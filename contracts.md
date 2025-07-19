# Portfolio API Contracts

## Overview
This document outlines the API contracts for Likith Ganmarapu's portfolio website, detailing the transition from mock data to full backend implementation.

## Mock Data Currently Implemented

### 1. Personal Information
- **Location**: `/app/frontend/src/data/mock.js`
- **Structure**: Personal details, contact information, bio, availability status
- **Mock Functions**: Basic profile data retrieval

### 2. Education Records
- **Mock Data**: 3 educational records (Mahindra University, Sri Chaitanya Junior Kalasala, Sri Chaitanya Techno School)
- **Fields**: Institution, degree, location, duration, CGPA/percentage, status

### 3. Patents
- **Mock Data**: 1 patent record
- **Fields**: Title, patent number, publish date, description

### 4. Experience Records
- **Mock Data**: 3 professional experiences
- **Fields**: Position, company, location, duration, type, achievements array

### 5. Projects
- **Mock Data**: 3 technical projects
- **Fields**: Title, duration, technologies array, description, achievements array, category

### 6. Skills & Certifications
- **Mock Data**: Categorized skills and certifications
- **Categories**: Languages, developer tools, libraries, cloud infrastructure, hardware

### 7. Awards
- **Mock Data**: 4 award records
- **Fields**: Title, description, year

### 8. Contact Form
- **Mock Function**: `submitContactForm()` - simulated form submission
- **Mock Function**: `downloadResume()` - simulated file download

## Required Backend API Endpoints

### Profile Management
```
GET /api/profile
- Returns personal information, bio, contact details, availability
- Response: PersonalInfo object

PUT /api/profile
- Updates personal information (admin only)
- Body: PersonalInfo object
```

### Education Management
```
GET /api/education
- Returns all education records
- Response: EducationRecord[]

POST /api/education (admin only)
- Creates new education record
- Body: EducationRecord object

PUT /api/education/:id (admin only)
- Updates existing education record
- Body: EducationRecord object

DELETE /api/education/:id (admin only)
- Deletes education record
```

### Experience Management
```
GET /api/experience
- Returns all experience records
- Response: ExperienceRecord[]

POST /api/experience (admin only)
- Creates new experience record
- Body: ExperienceRecord object

PUT /api/experience/:id (admin only)
- Updates existing experience record
- Body: ExperienceRecord object

DELETE /api/experience/:id (admin only)
- Deletes experience record
```

### Projects Management
```
GET /api/projects
- Returns all projects
- Query params: ?category=string (optional filter)
- Response: ProjectRecord[]

POST /api/projects (admin only)
- Creates new project
- Body: ProjectRecord object

PUT /api/projects/:id (admin only)
- Updates existing project
- Body: ProjectRecord object

DELETE /api/projects/:id (admin only)
- Deletes project
```

### Skills & Certifications
```
GET /api/skills
- Returns all skills categorized
- Response: SkillsData object

GET /api/certifications
- Returns all certifications
- Response: CertificationRecord[]

POST /api/skills (admin only)
- Updates skills data
- Body: SkillsData object

POST /api/certifications (admin only)
- Creates new certification
- Body: CertificationRecord object
```

### Awards Management
```
GET /api/awards
- Returns all awards
- Response: AwardRecord[]

POST /api/awards (admin only)
- Creates new award
- Body: AwardRecord object

PUT /api/awards/:id (admin only)
- Updates existing award
- Body: AwardRecord object

DELETE /api/awards/:id (admin only)
- Deletes award
```

### Patents Management
```
GET /api/patents
- Returns all patents
- Response: PatentRecord[]

POST /api/patents (admin only)
- Creates new patent
- Body: PatentRecord object

PUT /api/patents/:id (admin only)
- Updates existing patent
- Body: PatentRecord object

DELETE /api/patents/:id (admin only)
- Deletes patent
```

### Contact & Communication
```
POST /api/contact
- Submits contact form
- Body: { name, email, subject, message }
- Response: { success: boolean, message: string }

GET /api/resume/download
- Downloads resume file
- Response: File download
```

### Analytics (Optional)
```
POST /api/analytics/view
- Tracks page views
- Body: { page: string, timestamp: Date }

GET /api/analytics/stats (admin only)
- Returns view statistics
- Response: AnalyticsData object
```

## Data Models

### PersonalInfo
```typescript
{
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  bio: string
  availability: string
}
```

### ExperienceRecord
```typescript
{
  id: string
  position: string
  company: string
  location: string
  duration: string
  type: string
  achievements: string[]
  startDate: Date
  endDate: Date | null
}
```

### ProjectRecord
```typescript
{
  id: string
  title: string
  duration: string
  technologies: string[]
  description: string
  achievements: string[]
  category: string
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}
```

## Frontend Integration Plan

### 1. API Service Layer
- Create `/app/frontend/src/services/api.js`
- Implement axios-based API client
- Handle authentication and error states
- Replace mock functions with real API calls

### 2. Data Management
- Replace direct mock imports with API calls
- Implement loading states for all sections
- Add error handling and retry logic
- Cache frequently accessed data

### 3. Admin Panel (Future Enhancement)
- Protected routes for content management
- Forms for adding/editing portfolio items
- File upload for resume management
- Basic authentication system

### 4. Error Handling
- Network error boundaries
- Fallback to cached data when possible
- User-friendly error messages
- Retry mechanisms for failed requests

## Database Schema

### Collections Required:
1. **profiles** - Personal information (singleton)
2. **education** - Education records
3. **experience** - Work experience records
4. **projects** - Project portfolio
5. **skills** - Skills and categories
6. **certifications** - Certification records
7. **awards** - Awards and achievements
8. **patents** - Patent records
9. **contacts** - Contact form submissions
10. **analytics** - Page view tracking (optional)

## Implementation Priority
1. **High Priority**: Profile, Experience, Projects, Skills
2. **Medium Priority**: Education, Awards, Patents, Certifications
3. **Low Priority**: Contact form backend, Analytics, Admin panel

## Security Considerations
- Input validation for all form submissions
- Rate limiting on contact form
- CORS configuration for production
- Basic authentication for admin endpoints
- Data sanitization for user inputs

## Performance Optimizations
- Pagination for large datasets (future)
- Image optimization for project screenshots
- Caching frequently accessed data
- Efficient database queries with proper indexing

---

*This contract serves as the bridge between the current mock implementation and the full-stack portfolio application.*