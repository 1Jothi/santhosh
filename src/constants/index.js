import axios from 'axios';
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } 
  from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Ms Office",
      icon: web,
    },
    {
      title: "Editing",
      icon: mobile,
    },
    {
      title: "Influencer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Quality Assurance",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      "title": "DIGITAL MARKETING INTERN",
    "company_name": "BLUE-MINE TECHNOLOGY",
    "icon": "",
    "iconBg": "#",
    "date": "2022 - 2023",
    "points": [
      "Assisted in developing and optimizing digital marketing campaigns, including email, SEO, SEM, and social media.",
      "Conducted in-depth keyword research and analysis to improve search engine rankings.",
      "Researched potential customers to identify target audiences through surveys and focus groups."
    ],
    },
    {
      "title": "BLISS CONSULTANCY SERVICES",
    "company_name": "CENTRAL GOVERNMENT PROJECT",
    "icon": "",
    "iconBg": "#",
    "date": "2022 - 2023",
    "points": [
      "Worked as a Junior Tech Lead in the technology department at Bliss Consultancy Services, a BPO company.",
      "Led multiple technical projects, ensuring smooth execution and compliance with industry standards.",
      "Managed a team, optimizing workflows and overseeing project implementations."
    ],
    },
    {
      "title": "AYUSHMAN BHARAT YOJANA PROJECT",
    "company_name": "CENTRAL GOVERNMENT PROJECT",
    "icon": "",
    "iconBg": "#",
    "date": "2021",
    "points": [
      "Successfully completed the Ayushman Bharat Yojana project for the central government.",
      "Managed a team of 7 employees to ensure smooth execution and project delivery.",
      "Covered 27 town panchayats within 7 months, achieving project objectives efficiently."
    ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial: "Santhose has been an invaluable asset to our team at Bliss Consultancy Services. As a Junior Tech Lead, he played a key role in managing technical projects efficiently. His ability to lead and coordinate a team while ensuring smooth project execution was truly impressive. His contributions to the Central Government Project (Ayushman Bharat Yojana) were instrumental in its success.",
      name: "Manager/Senior",
      designation: "Project Lead",
      company: "Bliss Consultancy Services",
      image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      testimonial: "Santhose demonstrated outstanding expertise in digital marketing during his internship at Blue-Mine Technology. His deep understanding of SEO, SEM, and social media strategies significantly boosted our marketing campaigns. His enthusiasm and analytical skills made a lasting impact on our team.",
      name: "Digital Marketing Lead",
      designation: "Head of Marketing",
      company: "Blue-Mine Technology",
      image: "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
      testimonial: "Santhose's leadership and strategic planning were crucial to the successful execution of the Ayushman Bharat Yojana project. Managing a team across 27 town panchayats, he ensured smooth implementation within the given timeframe. His problem-solving and organizational skills were truly commendable.",
      name: "Government Project Coordinator",
      designation: "Senior Project Manager",
      company: "Ayushman Bharat Yojana",
      image: "https://randomuser.me/api/portraits/men/30.jpg"
    },
  ];
  
  const projects = [
    {
      name: "DIGITAL MARKETING",
      description: "Implemented digital marketing strategies including SEO, SEM, and social media campaigns to enhance online visibility and customer engagement. Conducted in-depth keyword research and optimized website content to improve search engine rankings. Managed social media platforms to increase brand awareness and audience interaction.",
       tags: [
        {
          name: "SEO",
          color: "blue-text-gradient"
        },
        {
          name: "SEM",
          color: "green-text-gradient"
        },
        {
          name: "Social Media",
          color: "pink-text-gradient"
        },
      ],
      image: carrent,
      source_code_link: "",
      demo_link: "" ,
    },
    {
      name: "BLISS CONSULTANCY SERVICES",
      description: "Led technical projects as a Junior Tech Lead, ensuring smooth execution and compliance with industry standards in a BPO environment.",
      tags: [
        {
          name: "Project Management",
          color: "blue-text-gradient"
        },
        {
          name: "Team Leadership",
          color: "green-text-gradient"
        },
        {
          name: "Technical Solutions",
          color: "pink-text-gradient"
        },
      ],
      image: jobit,
      source_code_link: "",
      demo_link: "" ,
    },
    {
      name: "AYUSHMAN BHARAT YOJANA PROJECT",
      description: "Successfully managed and implemented a central government project, overseeing operations across 27 town panchayats and leading a team of 7 professionals.",
      tags: [
        {
          name: "Government Project",
          color: "blue-text-gradient"
        },
        {
          name: "Team Coordination",
          color: "green-text-gradient"
        },
        {
          name: "Process Optimization",
          color: "pink-text-gradient"
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      demo_link: "http://www.demo.com" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  axios.get('http://localhost:5000/api/data')
  .then((response) => console.log(response.data))
  .catch((error) => console.error('Error:', error));