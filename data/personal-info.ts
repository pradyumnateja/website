export const personalInfo = {
  name: "Pradyumna Teja",
  title: "Computer Science Student | Software Developer",
  email: "pradyumna.teja@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  image: "/profile.jpg", // Add your profile image to the public folder
  about: "I'm a passionate Computer Science student and software developer with a keen interest in building innovative solutions. I love exploring new technologies and creating impactful applications.",
  currentRole: "Computer Science Student",
  education: "Pursuing B.S. in Computer Science",
  interests: "Full-stack Development, AI/ML, Open Source",
  expertise: [
    "Building responsive web applications",
    "Developing RESTful APIs",
    "Working with modern JavaScript frameworks",
    "Database design and optimization",
    "Problem-solving and algorithms",
  ],
  social: {
    github: "https://github.com/pradyumnateja",
    linkedin: "https://linkedin.com/in/pradyumnateja",
    email: "mailto:pradyumna.teja@example.com"
  }
} as const;

export const tejaData = {
  personalInfo,
  
  about: {
    quickFacts: [
      { icon: "🎓", text: "Pursuing B.S. in Computer Science" },
      { icon: "💼", text: "Computer Science Student" },
      { icon: "📍", text: "San Francisco, CA" },
      { icon: "🌟", text: "Full-stack Development, AI/ML, Open Source" }
    ]
  },

  projects: [
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization of sorting and pathfinding algorithms using React",
      technologies: ["React", "TypeScript", "Algorithms", "Data Structures"]
    },
    {
      title: "Smart Task Manager",
      description: "AI-powered task management system with priority scheduling",
      technologies: ["Python", "Machine Learning", "FastAPI", "React"]
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted messaging app with real-time communication",
      technologies: ["Node.js", "WebSocket", "Cryptography", "React"]
    }
  ],

  experience: [
    {
      title: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      period: "June 2023 - August 2023",
      responsibilities: [
        "Developed and maintained RESTful APIs using Node.js and Express",
        "Implemented responsive UI components with React and TypeScript",
        "Collaborated with senior developers on optimizing database queries"
      ],
      technologies: ["Node.js", "React", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      period: "January 2023 - Present",
      responsibilities: [
        "Conducting research on machine learning algorithms",
        "Implementing and testing neural network architectures",
        "Publishing findings in academic conferences"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Data Analysis"]
    }
  ],

  skills: {
    programmingLanguages: [
      { name: "Python", proficiency: 90 },
      { name: "JavaScript", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Java", proficiency: 75 },
      { name: "C++", proficiency: 70 }
    ],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Django"],
    tools: ["Git", "Docker", "AWS", "Linux", "VS Code"],
    concepts: ["Data Structures", "Algorithms", "System Design", "Database Design"]
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2021 - Present",
    details: {
      gpa: "3.8/4.0",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Web Development"],
      activities: [
        "Member of Computer Science Society",
        "Participated in multiple hackathons and coding competitions"
      ]
    }
  },

  blog: [
    {
      title: "Understanding Big O Notation",
      date: "March 15, 2024",
      readTime: "5 min read",
      description: "A deep dive into algorithmic complexity and why it matters in software development."
    },
    {
      title: "My Journey with React and Next.js",
      date: "March 10, 2024",
      readTime: "4 min read",
      description: "Personal experiences and lessons learned while building modern web applications."
    },
    {
      title: "The Future of AI in Software Development",
      date: "March 5, 2024",
      readTime: "6 min read",
      description: "Exploring how artificial intelligence is reshaping the development landscape."
    }
  ]
} as const;

