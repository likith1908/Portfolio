from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional, Dict, Any
import os
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

class Database:
    def __init__(self):
        self.mongo_url = os.environ['MONGO_URL']
        self.db_name = os.environ.get('DB_NAME', 'portfolio')
        self.client = AsyncIOMotorClient(self.mongo_url)
        self.db = self.client[self.db_name]
        
    async def close(self):
        """Close database connection"""
        self.client.close()

    # Personal Info operations
    async def get_personal_info(self) -> Optional[Dict[str, Any]]:
        """Get personal information"""
        try:
            result = await self.db.profiles.find_one()
            return result
        except Exception as e:
            logger.error(f"Error getting personal info: {e}")
            return None

    async def update_personal_info(self, data: Dict[str, Any]) -> bool:
        """Update personal information"""
        try:
            result = await self.db.profiles.replace_one(
                {},  # Empty filter to match any document
                data,
                upsert=True  # Create if doesn't exist
            )
            return result.acknowledged
        except Exception as e:
            logger.error(f"Error updating personal info: {e}")
            return False

    # Education operations
    async def get_all_education(self) -> List[Dict[str, Any]]:
        """Get all education records"""
        try:
            cursor = self.db.education.find().sort("created_at", -1)
            return await cursor.to_list(100)
        except Exception as e:
            logger.error(f"Error getting education records: {e}")
            return []

    async def create_education(self, data: Dict[str, Any]) -> Optional[str]:
        """Create new education record"""
        try:
            data['created_at'] = datetime.utcnow()
            result = await self.db.education.insert_one(data)
            return str(result.inserted_id) if result.inserted_id else None
        except Exception as e:
            logger.error(f"Error creating education record: {e}")
            return None

    async def update_education(self, education_id: str, data: Dict[str, Any]) -> bool:
        """Update education record"""
        try:
            result = await self.db.education.update_one(
                {"id": education_id},
                {"$set": data}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error updating education record: {e}")
            return False

    async def delete_education(self, education_id: str) -> bool:
        """Delete education record"""
        try:
            result = await self.db.education.delete_one({"id": education_id})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting education record: {e}")
            return False

    # Experience operations
    async def get_all_experience(self) -> List[Dict[str, Any]]:
        """Get all experience records"""
        try:
            cursor = self.db.experience.find().sort("created_at", -1)
            return await cursor.to_list(100)
        except Exception as e:
            logger.error(f"Error getting experience records: {e}")
            return []

    async def create_experience(self, data: Dict[str, Any]) -> Optional[str]:
        """Create new experience record"""
        try:
            data['created_at'] = datetime.utcnow()
            result = await self.db.experience.insert_one(data)
            return str(result.inserted_id) if result.inserted_id else None
        except Exception as e:
            logger.error(f"Error creating experience record: {e}")
            return None

    async def update_experience(self, experience_id: str, data: Dict[str, Any]) -> bool:
        """Update experience record"""
        try:
            result = await self.db.experience.update_one(
                {"id": experience_id},
                {"$set": data}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error updating experience record: {e}")
            return False

    async def delete_experience(self, experience_id: str) -> bool:
        """Delete experience record"""
        try:
            result = await self.db.experience.delete_one({"id": experience_id})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting experience record: {e}")
            return False

    # Project operations
    async def get_all_projects(self, category: Optional[str] = None) -> List[Dict[str, Any]]:
        """Get all projects, optionally filtered by category"""
        try:
            filter_query = {"category": category} if category else {}
            cursor = self.db.projects.find(filter_query).sort("created_at", -1)
            return await cursor.to_list(100)
        except Exception as e:
            logger.error(f"Error getting projects: {e}")
            return []

    async def create_project(self, data: Dict[str, Any]) -> Optional[str]:
        """Create new project record"""
        try:
            data['created_at'] = datetime.utcnow()
            result = await self.db.projects.insert_one(data)
            return str(result.inserted_id) if result.inserted_id else None
        except Exception as e:
            logger.error(f"Error creating project record: {e}")
            return None

    async def update_project(self, project_id: str, data: Dict[str, Any]) -> bool:
        """Update project record"""
        try:
            result = await self.db.projects.update_one(
                {"id": project_id},
                {"$set": data}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error updating project record: {e}")
            return False

    async def delete_project(self, project_id: str) -> bool:
        """Delete project record"""
        try:
            result = await self.db.projects.delete_one({"id": project_id})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting project record: {e}")
            return False

    # Skills operations
    async def get_skills(self) -> Optional[Dict[str, Any]]:
        """Get skills data"""
        try:
            result = await self.db.skills.find_one()
            return result
        except Exception as e:
            logger.error(f"Error getting skills: {e}")
            return None

    async def update_skills(self, data: Dict[str, Any]) -> bool:
        """Update skills data"""
        try:
            result = await self.db.skills.replace_one(
                {},
                data,
                upsert=True
            )
            return result.acknowledged
        except Exception as e:
            logger.error(f"Error updating skills: {e}")
            return False

    # Certification operations
    async def get_all_certifications(self) -> List[Dict[str, Any]]:
        """Get all certifications"""
        try:
            cursor = self.db.certifications.find().sort("created_at", -1)
            return await cursor.to_list(100)
        except Exception as e:
            logger.error(f"Error getting certifications: {e}")
            return []

    async def create_certification(self, data: Dict[str, Any]) -> Optional[str]:
        """Create new certification record"""
        try:
            data['created_at'] = datetime.utcnow()
            result = await self.db.certifications.insert_one(data)
            return str(result.inserted_id) if result.inserted_id else None
        except Exception as e:
            logger.error(f"Error creating certification record: {e}")
            return None

    async def update_certification(self, certification_id: str, data: Dict[str, Any]) -> bool:
        """Update certification record"""
        try:
            result = await self.db.certifications.update_one(
                {"id": certification_id},
                {"$set": data}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error updating certification record: {e}")
            return False

    async def delete_certification(self, certification_id: str) -> bool:
        """Delete certification record"""
        try:
            result = await self.db.certifications.delete_one({"id": certification_id})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting certification record: {e}")
            return False

    # Award operations
    async def get_all_awards(self) -> List[Dict[str, Any]]:
        """Get all awards"""
        try:
            cursor = self.db.awards.find().sort("created_at", -1)
            return await cursor.to_list(100)
        except Exception as e:
            logger.error(f"Error getting awards: {e}")
            return []

    async def create_award(self, data: Dict[str, Any]) -> Optional[str]:
        """Create new award record"""
        try:
            data['created_at'] = datetime.utcnow()
            result = await self.db.awards.insert_one(data)
            return str(result.inserted_id) if result.inserted_id else None
        except Exception as e:
            logger.error(f"Error creating award record: {e}")
            return None

    async def update_award(self, award_id: str, data: Dict[str, Any]) -> bool:
        """Update award record"""
        try:
            result = await self.db.awards.update_one(
                {"id": award_id},
                {"$set": data}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error updating award record: {e}")
            return False

    async def delete_award(self, award_id: str) -> bool:
        """Delete award record"""
        try:
            result = await self.db.awards.delete_one({"id": award_id})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting award record: {e}")
            return False

    # Patent operations
    async def get_all_patents(self) -> List[Dict[str, Any]]:
        """Get all patents"""
        try:
            cursor = self.db.patents.find().sort("created_at", -1)
            return await cursor.to_list(100)
        except Exception as e:
            logger.error(f"Error getting patents: {e}")
            return []

    async def create_patent(self, data: Dict[str, Any]) -> Optional[str]:
        """Create new patent record"""
        try:
            data['created_at'] = datetime.utcnow()
            result = await self.db.patents.insert_one(data)
            return str(result.inserted_id) if result.inserted_id else None
        except Exception as e:
            logger.error(f"Error creating patent record: {e}")
            return None

    async def update_patent(self, patent_id: str, data: Dict[str, Any]) -> bool:
        """Update patent record"""
        try:
            result = await self.db.patents.update_one(
                {"id": patent_id},
                {"$set": data}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error updating patent record: {e}")
            return False

    async def delete_patent(self, patent_id: str) -> bool:
        """Delete patent record"""
        try:
            result = await self.db.patents.delete_one({"id": patent_id})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting patent record: {e}")
            return False

    # Contact operations
    async def create_contact_submission(self, data: Dict[str, Any]) -> Optional[str]:
        """Create new contact submission"""
        try:
            data['created_at'] = datetime.utcnow()
            data['read'] = False
            result = await self.db.contacts.insert_one(data)
            return str(result.inserted_id) if result.inserted_id else None
        except Exception as e:
            logger.error(f"Error creating contact submission: {e}")
            return None

    async def get_contact_submissions(self) -> List[Dict[str, Any]]:
        """Get all contact submissions"""
        try:
            cursor = self.db.contacts.find().sort("created_at", -1)
            return await cursor.to_list(100)
        except Exception as e:
            logger.error(f"Error getting contact submissions: {e}")
            return []