from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path

# Import routes
from routes import router as api_router

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'portfolio')]

# Create the main app
app = FastAPI(
    title="Portfolio API",
    description="Backend API for Likith Ganmarapu's Portfolio Website",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Portfolio API is running!", "version": "1.0.0"}

# Include API routes
app.include_router(api_router)

@app.on_event("startup")
async def startup_event():
    """Startup event handler"""
    logger.info("Starting Portfolio API...")
    logger.info("Connected to MongoDB")

@app.on_event("shutdown")
async def shutdown_event():
    """Shutdown event handler"""
    logger.info("Shutting down Portfolio API...")
    client.close()

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}

# API documentation endpoint info
@app.get("/docs-info")
async def docs_info():
    return {
        "message": "API Documentation available at /docs",
        "redoc": "Alternative documentation at /redoc",
        "openapi": "OpenAPI schema at /openapi.json"
    }