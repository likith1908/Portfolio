from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
import logging

from .models import (
    PersonalInfo, PersonalInfoUpdate,
    EducationRecord, EducationRecordCreate, EducationRecordUpdate,
    ExperienceRecord, ExperienceRecordCreate, ExperienceRecordUpdate,
    ProjectRecord, ProjectRecordCreate, ProjectRecordUpdate,
    SkillsData, SkillsDataUpdate,
    CertificationRecord, CertificationRecordCreate, CertificationRecordUpdate,
    AwardRecord, AwardRecordCreate, AwardRecordUpdate,
    PatentRecord, PatentRecordCreate, PatentRecordUpdate,
    ContactSubmissionCreate, ContactResponse, ApiResponse
)
from .database import Database

logger = logging.getLogger(__name__)

# Initialize database
db = Database()

# Create router
router = APIRouter(prefix="/api")

# Personal Profile Routes
@router.get("/profile", response_model=PersonalInfo)
async def get_profile():
    """Get personal information"""
    try:
        profile = await db.get_personal_info()
        if not profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        
        # Remove MongoDB _id field
        if '_id' in profile:
            del profile['_id']
            
        return PersonalInfo(**profile)
    except Exception as e:
        logger.error(f"Error getting profile: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/profile", response_model=ApiResponse)
async def update_profile(profile_data: PersonalInfoUpdate):
    """Update personal information"""
    try:
        # Convert to dict and remove None values
        update_data = {k: v for k, v in profile_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No data provided for update")
        
        success = await db.update_personal_info(update_data)
        
        if not success:
            raise HTTPException(status_code=500, detail="Failed to update profile")
        
        return ApiResponse(success=True, message="Profile updated successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating profile: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Education Routes
@router.get("/education", response_model=List[EducationRecord])
async def get_education():
    """Get all education records"""
    try:
        education_records = await db.get_all_education()
        # Remove MongoDB _id field from each record
        for record in education_records:
            if '_id' in record:
                del record['_id']
        
        return [EducationRecord(**record) for record in education_records]
    except Exception as e:
        logger.error(f"Error getting education records: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/education", response_model=ApiResponse)
async def create_education(education_data: EducationRecordCreate):
    """Create new education record"""
    try:
        education_dict = education_data.dict()
        education_record = EducationRecord(**education_dict)
        
        result = await db.create_education(education_record.dict())
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to create education record")
        
        return ApiResponse(success=True, message="Education record created successfully")
    except Exception as e:
        logger.error(f"Error creating education record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/education/{education_id}", response_model=ApiResponse)
async def update_education(education_id: str, education_data: EducationRecordUpdate):
    """Update education record"""
    try:
        update_data = {k: v for k, v in education_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No data provided for update")
        
        success = await db.update_education(education_id, update_data)
        
        if not success:
            raise HTTPException(status_code=404, detail="Education record not found or not updated")
        
        return ApiResponse(success=True, message="Education record updated successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating education record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.delete("/education/{education_id}", response_model=ApiResponse)
async def delete_education(education_id: str):
    """Delete education record"""
    try:
        success = await db.delete_education(education_id)
        
        if not success:
            raise HTTPException(status_code=404, detail="Education record not found")
        
        return ApiResponse(success=True, message="Education record deleted successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting education record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Experience Routes
@router.get("/experience", response_model=List[ExperienceRecord])
async def get_experience():
    """Get all experience records"""
    try:
        experience_records = await db.get_all_experience()
        # Remove MongoDB _id field from each record
        for record in experience_records:
            if '_id' in record:
                del record['_id']
        
        return [ExperienceRecord(**record) for record in experience_records]
    except Exception as e:
        logger.error(f"Error getting experience records: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/experience", response_model=ApiResponse)
async def create_experience(experience_data: ExperienceRecordCreate):
    """Create new experience record"""
    try:
        experience_dict = experience_data.dict()
        experience_record = ExperienceRecord(**experience_dict)
        
        result = await db.create_experience(experience_record.dict())
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to create experience record")
        
        return ApiResponse(success=True, message="Experience record created successfully")
    except Exception as e:
        logger.error(f"Error creating experience record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/experience/{experience_id}", response_model=ApiResponse)
async def update_experience(experience_id: str, experience_data: ExperienceRecordUpdate):
    """Update experience record"""
    try:
        update_data = {k: v for k, v in experience_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No data provided for update")
        
        success = await db.update_experience(experience_id, update_data)
        
        if not success:
            raise HTTPException(status_code=404, detail="Experience record not found or not updated")
        
        return ApiResponse(success=True, message="Experience record updated successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating experience record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.delete("/experience/{experience_id}", response_model=ApiResponse)
async def delete_experience(experience_id: str):
    """Delete experience record"""
    try:
        success = await db.delete_experience(experience_id)
        
        if not success:
            raise HTTPException(status_code=404, detail="Experience record not found")
        
        return ApiResponse(success=True, message="Experience record deleted successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting experience record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Project Routes
@router.get("/projects", response_model=List[ProjectRecord])
async def get_projects(category: Optional[str] = Query(None)):
    """Get all projects, optionally filtered by category"""
    try:
        projects = await db.get_all_projects(category)
        # Remove MongoDB _id field from each record
        for record in projects:
            if '_id' in record:
                del record['_id']
        
        return [ProjectRecord(**record) for record in projects]
    except Exception as e:
        logger.error(f"Error getting projects: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/projects", response_model=ApiResponse)
async def create_project(project_data: ProjectRecordCreate):
    """Create new project record"""
    try:
        project_dict = project_data.dict()
        project_record = ProjectRecord(**project_dict)
        
        result = await db.create_project(project_record.dict())
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to create project record")
        
        return ApiResponse(success=True, message="Project record created successfully")
    except Exception as e:
        logger.error(f"Error creating project record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/projects/{project_id}", response_model=ApiResponse)
async def update_project(project_id: str, project_data: ProjectRecordUpdate):
    """Update project record"""
    try:
        update_data = {k: v for k, v in project_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No data provided for update")
        
        success = await db.update_project(project_id, update_data)
        
        if not success:
            raise HTTPException(status_code=404, detail="Project record not found or not updated")
        
        return ApiResponse(success=True, message="Project record updated successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating project record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.delete("/projects/{project_id}", response_model=ApiResponse)
async def delete_project(project_id: str):
    """Delete project record"""
    try:
        success = await db.delete_project(project_id)
        
        if not success:
            raise HTTPException(status_code=404, detail="Project record not found")
        
        return ApiResponse(success=True, message="Project record deleted successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting project record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Skills Routes
@router.get("/skills", response_model=SkillsData)
async def get_skills():
    """Get skills data"""
    try:
        skills = await db.get_skills()
        if not skills:
            raise HTTPException(status_code=404, detail="Skills data not found")
        
        # Remove MongoDB _id field
        if '_id' in skills:
            del skills['_id']
            
        return SkillsData(**skills)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/skills", response_model=ApiResponse)
async def update_skills(skills_data: SkillsDataUpdate):
    """Update skills data"""
    try:
        update_data = {k: v for k, v in skills_data.dict().items() if v is not None}
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No data provided for update")
        
        success = await db.update_skills(update_data)
        
        if not success:
            raise HTTPException(status_code=500, detail="Failed to update skills")
        
        return ApiResponse(success=True, message="Skills updated successfully")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Certification Routes
@router.get("/certifications", response_model=List[CertificationRecord])
async def get_certifications():
    """Get all certifications"""
    try:
        certifications = await db.get_all_certifications()
        # Remove MongoDB _id field from each record
        for record in certifications:
            if '_id' in record:
                del record['_id']
        
        return [CertificationRecord(**record) for record in certifications]
    except Exception as e:
        logger.error(f"Error getting certifications: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/certifications", response_model=ApiResponse)
async def create_certification(certification_data: CertificationRecordCreate):
    """Create new certification record"""
    try:
        certification_dict = certification_data.dict()
        certification_record = CertificationRecord(**certification_dict)
        
        result = await db.create_certification(certification_record.dict())
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to create certification record")
        
        return ApiResponse(success=True, message="Certification record created successfully")
    except Exception as e:
        logger.error(f"Error creating certification record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Award Routes
@router.get("/awards", response_model=List[AwardRecord])
async def get_awards():
    """Get all awards"""
    try:
        awards = await db.get_all_awards()
        # Remove MongoDB _id field from each record
        for record in awards:
            if '_id' in record:
                del record['_id']
        
        return [AwardRecord(**record) for record in awards]
    except Exception as e:
        logger.error(f"Error getting awards: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/awards", response_model=ApiResponse)
async def create_award(award_data: AwardRecordCreate):
    """Create new award record"""
    try:
        award_dict = award_data.dict()
        award_record = AwardRecord(**award_dict)
        
        result = await db.create_award(award_record.dict())
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to create award record")
        
        return ApiResponse(success=True, message="Award record created successfully")
    except Exception as e:
        logger.error(f"Error creating award record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Patent Routes
@router.get("/patents", response_model=List[PatentRecord])
async def get_patents():
    """Get all patents"""
    try:
        patents = await db.get_all_patents()
        # Remove MongoDB _id field from each record
        for record in patents:
            if '_id' in record:
                del record['_id']
        
        return [PatentRecord(**record) for record in patents]
    except Exception as e:
        logger.error(f"Error getting patents: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/patents", response_model=ApiResponse)
async def create_patent(patent_data: PatentRecordCreate):
    """Create new patent record"""
    try:
        patent_dict = patent_data.dict()
        patent_record = PatentRecord(**patent_dict)
        
        result = await db.create_patent(patent_record.dict())
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to create patent record")
        
        return ApiResponse(success=True, message="Patent record created successfully")
    except Exception as e:
        logger.error(f"Error creating patent record: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Contact Routes
@router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactSubmissionCreate):
    """Submit contact form"""
    try:
        contact_dict = contact_data.dict()
        
        result = await db.create_contact_submission(contact_dict)
        
        if not result:
            raise HTTPException(status_code=500, detail="Failed to submit contact form")
        
        return ContactResponse(
            success=True, 
            message="Thank you for your message! I'll get back to you soon."
        )
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/contact/submissions", response_model=List[dict])
async def get_contact_submissions():
    """Get all contact submissions (admin only)"""
    try:
        submissions = await db.get_contact_submissions()
        # Remove MongoDB _id field from each record
        for record in submissions:
            if '_id' in record:
                del record['_id']
        
        return submissions
    except Exception as e:
        logger.error(f"Error getting contact submissions: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")