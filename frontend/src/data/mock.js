// Mock data for Likith Ganmarapu's portfolio
export const portfolioData = {
  personal: {
    name: "Likith Ganmarapu",
    title: "AI Engineer & Computer Vision Specialist",
    email: "se21uari076@mahindrauniversity.edu.in",
    phone: "(+91)7674042832",
    location: "Hyderabad, Telangana",
    linkedin: "https://linkedin.com/in/likith-ganmarapu",
    github: "https://github.com/likith1908",
    bio: "Passionate AI Engineer specializing in Computer Vision and Machine Learning. Currently pursuing B.Tech in Artificial Intelligence with hands-on experience in developing innovative solutions using cutting-edge technologies.",
    availability: "Available for full-time opportunities"
  },

  education: [
    {
      id: 1,
      institution: "Mahindra University",
      degree: "Bachelor of Technology in Artificial Intelligence",
      location: "Hyderabad, Telangana",
      duration: "Aug 2021 – Jun 2025",
      cgpa: "8.02",
      status: "Current"
    },
    {
      id: 2,
      institution: "Sri Chaitanya Junior Kalasala",
      degree: "Intermediate (PCM)",
      location: "Hyderabad, Telangana",
      duration: "Jun 2019 – Mar 2021",
      cgpa: "98.6%"
    },
    {
      id: 3,
      institution: "Sri Chaitanya Techno School",
      degree: "10th Grade (SSC)",
      location: "Hyderabad, Telangana",
      duration: "May 2018 – Jun 2019",
      cgpa: "9.8"
    }
  ],

  patents: [
    {
      id: 1,
      title: "Automated Short News Video Generation",
      patentNumber: "IN Patent 20244110586874",
      publishDate: "August 5, 2024",
      description: "Revolutionary system for automated generation of short news videos using AI and machine learning technologies"
    }
  ],

  experience: [
    {
      id: 1,
      position: "Associate Engineer - AI (Intern)",
      company: "AuroPro Sys Systems",
      location: "Hyderabad, Telangana",
      duration: "Jan 2025 – Present",
      type: "Internship",
      achievements: [
        "Digitized printed and handwritten documents using TOCR and GOT (transformer-based) models, achieving 97% accuracy",
        "Developed a software solution for end-to-end analysis of bank statements and credit reports for microfinance evaluation using Generative AI and LLM's"
      ]
    },
    {
      id: 2,
      position: "Computer Vision Intern",
      company: "HarvestX Robotics",
      location: "Hyderabad, Telangana",
      duration: "Jun 2024 – Oct 2024",
      type: "Internship",
      achievements: [
        "Developed and implemented object detection and tracking algorithms using computer vision techniques",
        "Performed speed estimation and trained object detection models on custom datasets for accurate object detection",
        "Utilized machine vision systems for real-time image acquisition and analysis",
        "Integrated a laser gimbal system to target and shoot detected objects, enhancing automation capabilities"
      ]
    },
    {
      id: 3,
      position: "Head of the Media Club",
      company: "Mahindra University",
      location: "Hyderabad, Telangana",
      duration: "Aug 2023 – Mar 2024",
      type: "Leadership",
      achievements: [
        "Led the official photography club of Mahindra University, managing a diverse team of 40+ members across departments",
        "Oversaw planning & shooting of media coverage for major campus events, conferences, and promotional activities",
        "Handled & maintained equipment worth over Rs.50 lakh, ensuring availability and operational readiness for events",
        "Led cross-functional media teams, managed equipment logistics, and improved operational workflows for high-visibility university events"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Quantum Machine Learning for Image Classification",
      duration: "Sept 2024 – Nov 2024",
      technologies: ["Quantum Computing", "Machine Learning", "Python", "Qiskit"],
      description: "Implemented a Quantum Machine Learning (QML) model to perform image classification tasks, using a JetRacer platform for real-world deployment and testing.",
      achievements: [
        "Compared the performance of QML models against classical machine learning models to evaluate the efficacy of quantum approaches"
      ],
      category: "Research"
    },
    {
      id: 2,
      title: "Automated Short News Video Production System",
      duration: "Feb 2024 – Jun 2024",
      technologies: ["Python", "AI/ML", "Raspberry Pi", "Computer Vision", "NLP"],
      description: "Developed an automated system for producing short news videos, integrating an Embedded Hardware Device (EHD) with a camera and a cloud-based server to streamline video production for social media platforms.",
      achievements: [
        "Designed the EHD for real-time video capture and upload, enabling seamless content creation with minimal manual intervention using a Raspberry Pi"
      ],
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Analysis of Earthquake Data",
      duration: "Feb 2023 – Jun 2023",
      technologies: ["Python", "Machine Learning", "Data Analysis", "SeismoSoft"],
      description: "Collected seismic data from the PEER Ground Motion Database and processed it using SeismoSoft for detailed analysis.",
      achievements: [
        "Refined the dataset and developed a machine learning model to perform earthquakes classification task"
      ],
      category: "Data Science"
    }
  ],

  skills: {
    languages: ["Python", "C", "SQL", "FastAPI", "Flask"],
    developerTools: ["Git", "Google Colab", "VS Code", "Postman", "Swagger"],
    libraries: ["pandas", "NumPy", "Matplotlib", "scikit-learn", "supervision", "OpenCV"],
    cloudInfrastructure: ["Docker", "GCP", "AWS (beginner)"],
    hardware: ["Raspberry Pi", "NVIDIA Jetson"]
  },

  certifications: [
    {
      id: 1,
      title: "Hugging Face Agents Course",
      issuer: "Hugging Face Instructors",
      date: "Apr 2025",
      description: "Successfully completed coursework on building and deploying multi-modal AI agents using Hugging Face tools"
    }
  ],

  awards: [
    {
      id: 1,
      title: "Merit-based Scholarship",
      description: "Consecutively for two academic years (2021-22, 2022-23)",
      year: "2021-2023"
    },
    {
      id: 2,
      title: "Aptitude Talent Search Olympiad (INTSO)",
      description: "Achieved All India Rank 5",
      year: "2015-2016"
    },
    {
      id: 3,
      title: "AMTI National Mathematics Talent Contest",
      description: "Qualified and ranked in the top 10% nationally in 2014 and 2015",
      year: "2014-2015"
    },
    {
      id: 4,
      title: "International Mathematics Olympiad",
      description: "Secured Rank 12 in Telangana & AP",
      year: "2014"
    }
  ]
};

// Contact form mock functions
export const submitContactForm = async (formData) => {
  // Mock API call - will be replaced with actual backend
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock: Contact form submitted:', formData);
      resolve({ success: true, message: 'Thank you for your message! I\'ll get back to you soon.' });
    }, 1000);
  });
};

export const downloadResume = () => {
  // Mock download function - will be replaced with actual file download
  console.log('Mock: Resume download initiated');
  alert('Resume download would start here!');
};