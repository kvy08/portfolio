// ╔══════════════════════════════════════════════════════════════╗
// ║           PORTFOLIO CONFIG — YOUR SINGLE SOURCE OF TRUTH    ║
// ║     Edit ONLY this file. The UI updates automatically.       ║
// ╚══════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── Personal ────────────────────────────────────────────────
  personal: {
    name: "Kunj Yadav",
    nameStyled: ["Kunj", "Yadav"],          // Split for animated display
    role: "Full-Stack Developer",
    tagline: "Backend-Focused Full-Stack Developer",
    taglineAccent: "Java • Spring Boot",
    bio: "I have 6+ years of experience building backend systems and web applications using Java and Spring Boot. I build APIs, develop features, and improve existing systems. I like keeping things simple, clean, and easy to maintain.",
    location: "India 🇮🇳",
    available: true,                     // Toggle "Available for work" badge
    email: "yadavkunj08@gmail.com",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/kunj-yadav-b1449a135",
    // Profile image: place photo as "me.jpg" next to index.html
    // OR use a URL: "https://yourcdn.com/photo.jpg"
    profileImage: "images/me.png",
    profileFallbackEmoji: "👨‍💻",
    resumeUrl: "#",                      // Link to your resume PDF
  },

  // ── Dashboard Stats ─────────────────────────────────────────
  stats: [
    { value: "6+", label: "Years Experience", icon: "⚡", suffix: "" },
    { value: "10", label: "Projects Delivered", icon: "🚀", suffix: "+" },
    { value: "", label: "Backend & Full-Stack Development", icon: "🛠", suffix: "" },
    { value: "", label: "Web & Cloud Applications", icon: "🌐", suffix: "" },
  ],

  techStack: [
    // Backend
    { name: "Java", icon: "tech-images/java.png", category: "Backend", glowColor: "#f89820" },
    { name: "Spring Boot", icon: "tech-images/spring-boot.png", category: "Backend", glowColor: "#6DB33F" },
    { name: "Python", icon: "tech-images/python.png", category: "Backend", glowColor: "#3776AB" },
    { name: "Django", icon: "tech-images/django.png", category: "Backend", glowColor: "#092E20" },
    { name: "REST API", icon: "tech-images/rest-api.png", category: "Backend", glowColor: "#00D4FF" },
    { name: "Microservices", icon: "tech-images/microservices.png", category: "Backend", glowColor: "#FF6B35" },
    // Frontend
    { name: "React", icon: "tech-images/react.png", category: "Frontend", glowColor: "#61DAFB" },
    { name: "Angular", icon: "tech-images/angular.png", category: "Frontend", glowColor: "#DD0031" },
    { name: "JavaScript", icon: "tech-images/javascript.png", category: "Frontend", glowColor: "#F7DF1E" },
    { name: "HTML/CSS", icon: "tech-images/html-css.png", category: "Frontend", glowColor: "#E34F26" },
    { name: "jQuery", icon: "tech-images/jquery.png", category: "Frontend", glowColor: "#0769AD" },
    // Cloud
    { name: "AWS EC2", icon: "tech-images/aws-ec2.png", category: "Cloud", glowColor: "#FF9900" },
    { name: "AWS Lambda", icon: "tech-images/aws-lambda.png", category: "Cloud", glowColor: "#FF9900" },
    { name: "S3", icon: "tech-images/s3.png", category: "Cloud", glowColor: "#FF9900" },
    { name: "QuickSight", icon: "tech-images/quicksight.png", category: "Cloud", glowColor: "#8C4FFF" },
    { name: "Azure AD", icon: "tech-images/azure-ad.png", category: "Cloud", glowColor: "#0078D4" },
    { name: "Docker", icon: "tech-images/docker.png", category: "Cloud", glowColor: "#2496ED" },
    // Data
    { name: "MySQL", icon: "tech-images/mysql.png", category: "Database", glowColor: "#4479A1" },
    { name: "MongoDB", icon: "tech-images/mongodb.png", category: "Database", glowColor: "#47A248" },
    // Platform
    { name: "Open edX", icon: "tech-images/open-edx.png", category: "Platform", glowColor: "#00262B" },
    { name: "Liferay", icon: "tech-images/liferay.png", category: "Platform", glowColor: "#1E4E9C" },
    { name: "Raspberry Pi", icon: "tech-images/raspberry-pi.png", category: "Platform", glowColor: "#C51A4A" },
  ],

  // ── Projects ─────────────────────────────────────────────────
  projects: [
    {
      id: "routee",
      title: "Routee",
      tag: "Communication Platform",
      year: "",
      problem: "Businesses needed a single platform to manage customer communication across multiple channels like SMS, WhatsApp, Viber, and Email.",
      solution: "Developed backend microservices to handle messaging workflows, subscription management, payment integration, and real-time dashboards for monitoring communication data.",
      role: "Sr. Java Developer",
      tech: ["Java", "Spring Boot", "MongoDB", "Angular", "REST API", "Jenkins"],
      accentColor: "#00D4FF",
      icon: "📡",
      featured: true,
    },
    {
      id: "medicodb",
      title: "MedicoDB",
      tag: "Healthcare System",
      year: "",
      problem: "Hospitals needed a centralized system to manage patient records, reports, and daily operations from one place.",
      solution: "Developed backend APIs for hospital, patient, and clinical modules. Built report generation features using Jasper Reports and supported multi-hospital setup by duplicating configurations. Also handled repository migration and automation scripts for microservices.",
      role: "Java Developer",
      tech: ["Java", "Spring Boot", "MySQL", "JasperReports"],
      accentColor: "#00FF88",
      icon: "🏥",
      featured: false,
    },
    {
      id: "omnilearn",
      title: "OmniLearn LMS",
      tag: "Education",
      year: "",
      problem: "Organizations needed a flexible platform to host courses, manage learners, and customize the learning experience.",
      solution: "Managed and customized an Open edX-based LMS. Built custom XBlocks, themes, APIs for mobile apps, and integrated dashboards and SSO login to improve the learning workflow.",
      role: "Python Developer",
      tech: ["Python", "Django", "React", "Open edX", "Docker", "AWS EC2", "AWS QuickSight", "MySQL", "MongoDB"],
      accentColor: "#FF6B35",
      icon: "🎓",
      featured: true,
    },
    {
      id: "eclairs",
      title: "ECLAIRS Analytics",
      tag: "Analytics Dashboard",
      year: "",
      problem: "Businesses needed better visibility into data collected from multiple systems.",
      solution: "Created data pipelines, SQL queries, and built interactive dashboards using AWS QuickSight to help teams understand performance and trends.",
      role: "Python Developer",
      tech: ["Python", "MySQL", "AWS Lambda", "AWS QuickSight"],
      accentColor: "#A855F7",
      icon: "📊",
      featured: true,
    },
    {
      id: "nestcool",
      title: "NestCool IoT",
      tag: "IoT System",
      year: "",
      problem: "Users needed a way to remotely monitor and control air conditioning systems in real time.",
      solution: "Integrated Google Nest APIs with CoolMaster devices and built Python scripts running on Raspberry Pi to sync thermostat settings with AC units.",
      role: "Python Developer",
      tech: ["Python", "Google Nest API", "Raspberry Pi", "CoolMasterNet"],
      accentColor: "#FFD700",
      icon: "🌡️",
      featured: false,
    },
    {
      id: "omniedu",
      title: "OmniEdu EMS",
      tag: "Exam Management System",
      year: "",
      problem: "Institutions needed a system to manage exams, enrollments, invoices, and payments from a single platform.",
      solution: "Developed finance-related modules including invoices, receipts, and credit notes. Built REST APIs, created dynamic forms using Form.io, and integrated features within the Liferay portal.",
      role: "Java Developer",
      tech: ["Java", "Spring Boot", "Liferay", "Form.io", "MySQL", "AWS EC2"],
      accentColor: "#FF4081",
      icon: "📋",
      featured: false,
    },
    {
      id: "transcript-system",
      title: "Transcript Management System",
      tag: "Education System",
      year: "",
      problem: "Institutions needed an automated way to generate semester-wise results and transcripts.",
      solution: "Developed backend and frontend features for score calculation, semester grouping, and mark sheet generation. Deployed and managed the system on AWS EC2.",
      role: "Python Developer",
      tech: ["Python", "Django", "DRF", "MySQL", "AWS EC2"],
      accentColor: "#1E90FF",
      icon: "📄",
      featured: false,
    },
    {
      id: "online-assessment",
      title: "Online Assessment",
      tag: "Assessment Platform",
      year: "",
      problem: "Organizations needed a secure platform to conduct online assessments with SSO and monitoring.",
      solution: "Built dynamic assessment forms, result generation features, Azure SSO login, and integrated camera access for monitoring during assessments.",
      role: "Python Developer",
      tech: ["Python", "Django", "DRF", "Microsoft Graph API", "AWS EC2"],
      accentColor: "#0078D4",
      icon: "📝",
      featured: false,
    },
    {
      id: "helpxchange",
      title: "HelpXchange",
      tag: "E-Commerce Platform",
      year: "",
      problem: "The platform needed secure payment and donation management features within a Liferay portal.",
      solution: "Integrated Liferay Commerce, implemented PayPal payment gateway, customized portal themes, and configured email workflows.",
      role: "Java Developer",
      tech: ["Liferay", "Java", "JSP", "MySQL"],
      accentColor: "#1E4E9C",
      icon: "🤝",
      featured: false,
    },
    {
      id: "project-orchard",
      title: "Project Orchard",
      tag: "Content & Commerce",
      year: "",
      problem: "Users needed a platform to manage blogs and sell products from their own sites.",
      solution: "Built and customized Liferay-based commerce features, integrated PayPal payments, and configured content and email workflows.",
      role: "Java Developer",
      tech: ["Liferay", "Java", "FreeMarker", "MySQL"],
      accentColor: "#6A5ACD",
      icon: "🛒",
      featured: false,
    }
  ],

  // ── Experience Timeline ──────────────────────────────────────
  experience: [
    {
      period: "2019 – Present",
      role: "Software Engineer",
      company: "Fusion Softtech",
      type: "Full-time",
      description: "Building and maintaining web applications using Java, Spring Boot, and Python. Working on backend APIs, frontend features, and system improvements.",
      milestones: [
        "Developed backend services for Routee communication platform",
        "Worked on OmniLearn LMS customization and feature development",
        "Built analytics dashboards and data processing features for ECLAIRS"
      ]
    }
  ],

  // ── Education ────────────────────────────────────────────────
  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Gujarat Technological University",      // ← Update
      period: "2016 – 2019",
      grade: "6.58 CGPA",               // ← Update (e.g. "8.5 CGPA")
      icon: "🎓"
    },
    {
      degree: "Diploma",
      field: "Computer Engineering",
      institution: "Gujarat Technological University",      // ← Update
      period: "2013 – 2016",
      grade: "7.55 CGPA",               // ← Update (e.g. "8.5 CGPA")
      icon: "🎓"
    }
  ],

  // ── Certifications ───────────────────────────────────────────
  certifications: [
    { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2023", icon: "☁️", color: "#FF9900" },
    { title: "Java SE Programming", issuer: "Oracle", year: "2020", icon: "☕", color: "#f89820" },
    { title: "Python for Data Science", issuer: "Coursera / IBM", year: "2021", icon: "🐍", color: "#3776AB" },
    { title: "Spring & Hibernate", issuer: "Udemy", year: "2019", icon: "🌱", color: "#6DB33F" },
  ],

  // ── Contact ──────────────────────────────────────────────────
  contact: {
    headline: "Let's Build Something",
    headlineAccent: "Remarkable.",
    subtext: "Whether it's microservices, an LMS, or a data pipeline — I ship.",
    cta: "Start the Conversation",
  },

};
