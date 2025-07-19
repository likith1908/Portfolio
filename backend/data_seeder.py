"""
Data seeder to populate the database with portfolio data
"""
import asyncio
import os
import sys
from pathlib import Path
from dotenv import load_dotenv

# Add backend directory to path
backend_dir = Path(__file__).parent
sys.path.append(str(backend_dir))

# Load environment variables
load_dotenv(backend_dir / '.env')

from database import Database
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Portfolio data from the resume
PORTFOLIO_DATA = {
    "personal": {
        "name": "Likith Ganmarapu",
        "title": "AI Engineer & Computer Vision Specialist",
        "email": "se21uari076@mahindrauniversity.edu.in",
        "phone": "(+91)7674042832",
        "location": "Hyderabad, Telangana",
        "linkedin": "https://linkedin.com/in/likith-ganmarapu",
        "github": "https://github.com/likith1908",
        "bio": "Passionate AI Engineer specializing in Computer Vision and Machine Learning. Currently pursuing B.Tech in Artificial Intelligence with hands-on experience in developing innovative solutions using cutting-edge technologies.",
        "availability": "Available for full-time opportunities"
    },
    "education": [
        {
            "id": "edu-1",
            "institution": "Mahindra University",
            "degree": "Bachelor of Technology in Artificial Intelligence",
            "location": "Hyderabad, Telangana",
            "duration": "Aug 2021 – Jun 2025",
            "cgpa": "8.02",
            "status": "Current"
        },
        {
            "id": "edu-2",
            "institution": "Sri Chaitanya Junior Kalasala",
            "degree": "Intermediate (PCM)",
            "location": "Hyderabad, Telangana",
            "duration": "Jun 2019 – Mar 2021",
            "cgpa": "98.6%"
        },
        {
            "id": "edu-3",
            "institution": "Sri Chaitanya Techno School",
            "degree": "10th Grade (SSC)",
            "location": "Hyderabad, Telangana",
            "duration": "May 2018 – Jun 2019",
            "cgpa": "9.8"
        }
    ],
    "patents": [
        {
            "id": "patent-1",
            "title": "Automated Short News Video Generation",
            "patent_number": "IN Patent 20244110586874",
            "publish_date": "August 5, 2024",
            "description": "Revolutionary system for automated generation of short news videos using AI and machine learning technologies"
        }
    ],
    "experience": [
        {
            "id": "exp-1",
            "position": "Associate Engineer - AI (Intern)",
            "company": "AuroPro Sys Systems",
            "location": "Hyderabad, Telangana",
            "duration": "Jan 2025 – Present",
            "type": "Internship",
            "achievements": [
                "Digitized printed and handwritten documents using TOCR and GOT (transformer-based) models, achieving 97% accuracy",
                "Developed a software solution for end-to-end analysis of bank statements and credit reports for microfinance evaluation using Generative AI and LLM's"
            ]
        },
        {
            "id": "exp-2",
            "position": "Computer Vision Intern",
            "company": "HarvestX Robotics",
            "location": "Hyderabad, Telangana",
            "duration": "Jun 2024 – Oct 2024",
            "type": "Internship",
            "achievements": [
                "Developed and implemented object detection and tracking algorithms using computer vision techniques",
                "Performed speed estimation and trained object detection models on custom datasets for accurate object detection",
                "Utilized machine vision systems for real-time image acquisition and analysis",
                "Integrated a laser gimbal system to target and shoot detected objects, enhancing automation capabilities"
            ]
        },
        {
            "id": "exp-3",
            "position": "Head of the Media Club",
            "company": "Mahindra University",
            "location": "Hyderabad, Telangana",
            "duration": "Aug 2023 – Mar 2024",
            "type": "Leadership",
            "achievements": [
                "Led the official photography club of Mahindra University, managing a diverse team of 40+ members across departments",
                "Oversaw planning & shooting of media coverage for major campus events, conferences, and promotional activities",
                "Handled & maintained equipment worth over Rs.50 lakh, ensuring availability and operational readiness for events",
                "Led cross-functional media teams, managed equipment logistics, and improved operational workflows for high-visibility university events"
            ]
        }
    ],
    "projects": [
        {
            "id": "proj-1",
            "title": "Quantum Machine Learning for Image Classification",
            "duration": "Sept 2024 – Nov 2024",
            "technologies": ["Quantum Computing", "Machine Learning", "Python", "Qiskit"],
            "description": "Implemented a Quantum Machine Learning (QML) model to perform image classification tasks, using a JetRacer platform for real-world deployment and testing.",
            "achievements": [
                "Compared the performance of QML models against classical machine learning models to evaluate the efficacy of quantum approaches"
            ],
            "category": "Research",
            "featured": True
        },
        {
            "id": "proj-2",
            "title": "Automated Short News Video Production System",
            "duration": "Feb 2024 – Jun 2024",
            "technologies": ["Python", "AI/ML", "Raspberry Pi", "Computer Vision", "NLP"],
            "description": "Developed an automated system for producing short news videos, integrating an Embedded Hardware Device (EHD) with a camera and a cloud-based server to streamline video production for social media platforms.",
            "achievements": [
                "Designed the EHD for real-time video capture and upload, enabling seamless content creation with minimal manual intervention using a Raspberry Pi"
            ],
            "category": "AI/ML",
            "featured": True
        },
        {
            "id": "proj-3",
            "title": "Analysis of Earthquake Data",
            "duration": "Feb 2023 – Jun 2023",
            "technologies": ["Python", "Machine Learning", "Data Analysis", "SeismoSoft"],
            "description": "Collected seismic data from the PEER Ground Motion Database and processed it using SeismoSoft for detailed analysis.",
            "achievements": [
                "Refined the dataset and developed a machine learning model to perform earthquakes classification task"
            ],
            "category": "Data Science",
            "featured": False
        }
    ],
    "skills": {
        "languages": ["Python", "C", "SQL", "FastAPI", "Flask"],
        "developer_tools": ["Git", "Google Colab", "VS Code", "Postman", "Swagger"],
        "libraries": ["pandas", "NumPy", "Matplotlib", "scikit-learn", "supervision", "OpenCV"],
        "cloud_infrastructure": ["Docker", "GCP", "AWS (beginner)"],
        "hardware": ["Raspberry Pi", "NVIDIA Jetson"]
    },
    "certifications": [
        {
            "id": "cert-1",
            "title": "Hugging Face Agents Course",
            "issuer": "Hugging Face Instructors",
            "date": "Apr 2025",
            "description": "Successfully completed coursework on building and deploying multi-modal AI agents using Hugging Face tools"
        }
    ],
    "awards": [
        {
            "id": "award-1",
            "title": "Merit-based Scholarship",
            "description": "Consecutively for two academic years (2021-22, 2022-23)",
            "year": "2021-2023"
        },
        {
            "id": "award-2",
            "title": "Aptitude Talent Search Olympiad (INTSO)",
            "description": "Achieved All India Rank 5",
            "year": "2015-2016"
        },
        {
            "id": "award-3",
            "title": "AMTI National Mathematics Talent Contest",
            "description": "Qualified and ranked in the top 10% nationally in 2014 and 2015",
            "year": "2014-2015"
        },
        {
            "id": "award-4",
            "title": "International Mathematics Olympiad",
            "description": "Secured Rank 12 in Telangana & AP",
            "year": "2014"
        }
    ]
}

async def seed_database():
    """Seed the database with portfolio data"""
    db = Database()
    
    try:
        # Seed personal information
        logger.info("Seeding personal information...")
        await db.update_personal_info(PORTFOLIO_DATA["personal"])
        
        # Seed education records
        logger.info("Seeding education records...")
        for edu in PORTFOLIO_DATA["education"]:
            await db.create_education(edu)
        
        # Seed patents
        logger.info("Seeding patents...")
        for patent in PORTFOLIO_DATA["patents"]:
            await db.create_patent(patent)
        
        # Seed experience records
        logger.info("Seeding experience records...")
        for exp in PORTFOLIO_DATA["experience"]:
            await db.create_experience(exp)
        
        # Seed projects
        logger.info("Seeding projects...")
        for project in PORTFOLIO_DATA["projects"]:
            await db.create_project(project)
        
        # Seed skills
        logger.info("Seeding skills...")
        await db.update_skills(PORTFOLIO_DATA["skills"])
        
        # Seed certifications
        logger.info("Seeding certifications...")
        for cert in PORTFOLIO_DATA["certifications"]:
            await db.create_certification(cert)
        
        # Seed awards
        logger.info("Seeding awards...")
        for award in PORTFOLIO_DATA["awards"]:
            await db.create_award(award)
        
        logger.info("Database seeding completed successfully!")
        
    except Exception as e:
        logger.error(f"Error seeding database: {e}")
    finally:
        await db.close()

if __name__ == "__main__":
    asyncio.run(seed_database())