import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy loading للصفحات - تقسيم الكود حسب الصفحات
import HomePage from "./pages/HomePage";
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const FeaturesPage = React.lazy(() => import("./pages/FeaturesPage"));
const PricingPage = React.lazy(() => import("./pages/PricingPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FAF8F5'}}>
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">جاري التحميل...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}> 
          <main id="main-content" tabIndex="-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;