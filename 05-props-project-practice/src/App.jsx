import React from "react";
import Profile from "./components/profile";

const App = () => {
  const teamMembers = [
    {
      name: "Wade Wilson",
      role: "UI/UX Designer",
      company: "Epic Coders",
      rate: 55,
      status: "available",
      skills: ["UI", "UX", "Photoshop", "Figma"],
      bio: "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
      image: "https://i.pravatar.cc/150?u=wade",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Zain Ahmed",
      role: "Frontend Developer",
      company: "Tech Solutions",
      rate: 45,
      status: "available",
      skills: ["React", "Next.js", "Tailwind"],
      bio: "Expert in building responsive and modern web applications with React.",
      image: "https://i.pravatar.cc/150?u=zain",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Sarah Khan",
      role: "Graphic Designer",
      company: "Creative Studio",
      rate: 40,
      status: "busy",
      skills: ["Illustrator", "Indesign", "Branding"],
      bio: "Specializes in brand identity and minimalist logo designs.",
      image: "https://i.pravatar.cc/150?u=sarah",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Ali Raza",
      role: "Backend Developer",
      company: "Data Systems",
      rate: 60,
      status: "available",
      skills: ["Node.js", "MongoDB", "Express"],
      bio: "Passionate about scalable architecture and secure API development.",
      image: "https://i.pravatar.cc/150?u=ali",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Ayesha Malik",
      role: "Product Manager",
      company: "Innova Tech",
      rate: 75,
      status: "available",
      skills: ["Agile", "Scrum", "Jira"],
      bio: "Strategic thinker focused on delivering high-quality user experiences.",
      image: "https://i.pravatar.cc/150?u=ayesha",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Hamza Sheikh",
      role: "Mobile App Developer",
      company: "App Masters",
      rate: 50,
      status: "busy",
      skills: ["Flutter", "Dart", "Firebase"],
      bio: "Creating cross-platform mobile apps that users love.",
      image: "https://i.pravatar.cc/150?u=hamza",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Maria Jones",
      role: "SEO Specialist",
      company: "Global Reach",
      rate: 35,
      status: "available",
      skills: ["SEO", "SEM", "Analytics"],
      bio: "Maria helps brands rank higher and reach more customers organically.",
      image: "https://i.pravatar.cc/150?u=maria",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Usman Ghani",
      role: "Full Stack Dev",
      company: "Code Craft",
      rate: 70,
      status: "available",
      skills: ["MERN Stack", "AWS", "Docker"],
      bio: "An all-rounder dev who can handle both client and server side.",
      image: "https://i.pravatar.cc/150?u=usman",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Fatima Noor",
      role: "Content Strategist",
      company: "Word Magic",
      rate: 30,
      status: "available",
      skills: ["Copywriting", "Editing", "Social Media"],
      bio: "Crafting stories that connect brands with their audience.",
      image: "https://i.pravatar.cc/150?u=fatima",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "John Doe",
      role: "DevOps Engineer",
      company: "Cloud Ops",
      rate: 80,
      status: "busy",
      skills: ["Kubernetes", "CI/CD", "Linux"],
      bio: "Automating workflows and managing cloud infrastructure.",
      image: "https://i.pravatar.cc/150?u=john",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Sana Abbas",
      role: "QA Engineer",
      company: "Bug Hunters",
      rate: 45,
      status: "available",
      skills: ["Selenium", "Testing", "Python"],
      bio: "Detail-oriented tester ensuring bug-free software delivery.",
      image: "https://i.pravatar.cc/150?u=sana",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Bilal Lodhi",
      role: "Data Scientist",
      company: "Insight AI",
      rate: 90,
      status: "available",
      skills: ["Python", "TensorFlow", "SQL"],
      bio: "Turning raw data into actionable business insights.",
      image: "https://i.pravatar.cc/150?u=bilal",
      companyImage: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
  ];

  return (
    <div className="parent">
      {teamMembers.map((elem, idx) => (
        <Profile
          key={idx}
          name={elem.name}
          role={elem.role}
          company={elem.company}
          rate={elem.rate}
          status={elem.status}
          bio={elem.bio}
          skills={elem.skills}
          image={elem.image}
          companyImage={elem.companyImage}
        />
      ))}
    </div>
  );
};

export default App;
