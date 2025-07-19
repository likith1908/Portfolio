from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Personal Information Model
class PersonalInfo(BaseModel):
    name: str
    title: str
    email: str
    phone: str
    location: str
    linkedin: str
    github: str
    bio: str
    availability: str

class PersonalInfoUpdate(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    location: Optional[str] = None
    linkedin: Optional[str] = None
    github: Optional[str] = None
    bio: Optional[str] = None
    availability: Optional[str] = None

# Education Models
class EducationRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    institution: str
    degree: str
    location: str
    duration: str
    cgpa: str
    status: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class EducationRecordCreate(BaseModel):
    institution: str
    degree: str
    location: str
    duration: str
    cgpa: str
    status: Optional[str] = None

class EducationRecordUpdate(BaseModel):
    institution: Optional[str] = None
    degree: Optional[str] = None
    location: Optional[str] = None
    duration: Optional[str] = None
    cgpa: Optional[str] = None
    status: Optional[str] = None

# Experience Models
class ExperienceRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    position: str
    company: str
    location: str
    duration: str
    type: str
    achievements: List[str]
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ExperienceRecordCreate(BaseModel):
    position: str
    company: str
    location: str
    duration: str
    type: str
    achievements: List[str]

class ExperienceRecordUpdate(BaseModel):
    position: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    duration: Optional[str] = None
    type: Optional[str] = None
    achievements: Optional[List[str]] = None

# Project Models
class ProjectRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    duration: str
    technologies: List[str]
    description: str
    achievements: List[str]
    category: str
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectRecordCreate(BaseModel):
    title: str
    duration: str
    technologies: List[str]
    description: str
    achievements: List[str]
    category: str
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    featured: bool = False

class ProjectRecordUpdate(BaseModel):
    title: Optional[str] = None
    duration: Optional[str] = None
    technologies: Optional[List[str]] = None
    description: Optional[str] = None
    achievements: Optional[List[str]] = None
    category: Optional[str] = None
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    featured: Optional[bool] = None

# Skills Models
class SkillsData(BaseModel):
    languages: List[str]
    developer_tools: List[str]
    libraries: List[str]
    cloud_infrastructure: List[str]
    hardware: List[str]

class SkillsDataUpdate(BaseModel):
    languages: Optional[List[str]] = None
    developer_tools: Optional[List[str]] = None
    libraries: Optional[List[str]] = None
    cloud_infrastructure: Optional[List[str]] = None
    hardware: Optional[List[str]] = None

# Certification Models
class CertificationRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    issuer: str
    date: str
    description: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class CertificationRecordCreate(BaseModel):
    title: str
    issuer: str
    date: str
    description: str

class CertificationRecordUpdate(BaseModel):
    title: Optional[str] = None
    issuer: Optional[str] = None
    date: Optional[str] = None
    description: Optional[str] = None

# Award Models
class AwardRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    year: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AwardRecordCreate(BaseModel):
    title: str
    description: str
    year: str

class AwardRecordUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    year: Optional[str] = None

# Patent Models
class PatentRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    patent_number: str
    publish_date: str
    description: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class PatentRecordCreate(BaseModel):
    title: str
    patent_number: str
    publish_date: str
    description: str

class PatentRecordUpdate(BaseModel):
    title: Optional[str] = None
    patent_number: Optional[str] = None
    publish_date: Optional[str] = None
    description: Optional[str] = None

# Contact Models
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    read: bool = False

class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# Response Models
class ContactResponse(BaseModel):
    success: bool
    message: str

class ApiResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None