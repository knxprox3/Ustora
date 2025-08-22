from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Trust metrics models
class MetricItem(BaseModel):
    key: str
    label: str
    value: str
    icon: Optional[str] = None  # frontend decides icon mapping

class TrustMetrics(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    items: List[MetricItem]
    updated_at: datetime = Field(default_factory=datetime.utcnow)


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


# New: Dynamic trust metrics endpoint (creates default doc if empty)
@api_router.get("/metrics", response_model=TrustMetrics)
async def get_metrics():
    doc = await db.trust_metrics.find_one()
    if not doc:
        default = TrustMetrics(
            items=[
                MetricItem(key="rating", label="تقييم العملاء", value="4.9/5", icon="Star"),
                MetricItem(key="shipments", label="عمليات الشحن", value="120K+", icon="Zap"),
                MetricItem(key="downloads", label="عدد التحميلات", value="85K+", icon="Download"),
                MetricItem(key="uptime", label="زمن الاستجابة", value="1.2s", icon="Gauge"),
            ]
        )
        await db.trust_metrics.insert_one(default.dict())
        return default
    # Convert existing doc to TrustMetrics model (ignore _id if present)
    doc.pop("_id", None)
    return TrustMetrics(**doc)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()