import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  lazy = true,
  webpSrc = null,
  avifSrc = null,
  placeholder = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(!lazy);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          {placeholder || (
            <div className="text-gray-400 text-sm">تحميل...</div>
          )}
        </div>
      )}

      {/* Optimized Image */}
      {isVisible && (
        <picture>
          {/* AVIF - أحدث صيغة بأفضل ضغط */}
          {avifSrc && (
            <source srcSet={avifSrc} type="image/avif" />
          )}
          
          {/* WebP - ضغط جيد ودعم واسع */}
          {webpSrc && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          
          {/* Fallback - الصورة الأصلية */}
          <img
            src={hasError ? '/images/placeholder.jpg' : src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={lazy ? 'lazy' : 'eager'}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;