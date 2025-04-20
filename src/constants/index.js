import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



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
    BM,
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
    // { title: "Editing", icon: mobile },
    // { title: "Influencer Marketing", icon: mobile },
    // { title: "Food Blogger Promotions", icon: backend },
    // { title: "BPO - Data Entry", icon: backend },
    // { title: "Telecalling", icon: backend },
    // { title: "Quality Assurance", icon: creator },
    // { title: "SEO & SMO", icon: creator },
    // { title: "Web Development", icon: web },
    // { title: "Govt Project Execution", icon: backend },
  ];
  
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      "title": "DIGITAL MARKETING ",
      "company_name": "Drawvax Infotech & Digital Marketing",
      "icon": "mobile",
      "iconBg": "#",
      "date": "2023 - 2025",
      "points": [
        "Assisted in the development of digital marketing campaigns for clients, including email, SEO, SEM, and social media.",
      "Researched potential customers to identify target audiences through surveys and focus groups.",
      "Conducted keyword research and analysis to optimize search engine optimization efforts.",
      "Optimized website content using best practices for SEO."
    ],
    },
    {
      "title": "JUNIOR TECH LEAD",
      "company_name": "Bliss Consultancy Services",
      "icon": "BM",
      "iconBg": "BM",
      "date": "2022 - 2024",
      "points": [
        "Currently employed at Bliss Consultancy Services, a BPO company, as a Junior Tech Lead in the technology department.",
        "Lead technical projects within the company, ensuring smooth project execution.",
        "Managed workflows and provided technical leadership, guiding the team for optimal project delivery."
      ],
    },
    
    {
    "title": "DIGITAL MARKETING ",
    "company_name": "BLUE-MINE TECHNOLOGY",
    "icon": "BM",
    "iconBg": "BM",
    "date": "2022 - 2024",
    "points": [
      "Assisted in developing and optimizing digital marketing campaigns, including email, SEO, SEM, and social media.",
      "Conducted in-depth keyword research and analysis to improve search engine rankings.",
      "Researched potential customers to identify target audiences through surveys and focus groups."
    ],
    },
    {
      "title": "CENTRAL GOVERNMENT PROJECT - AYUSHMAN BHARAT YOJANA",
      "company_name": "Central Government Project",
      "icon": "",
      "iconBg": "#",
      "date": "2022-2021",
      "points": [
        "Successfully completed the Ayushman Bharat Yojana project for the central government.",
        "Managed a team of 7 employees to ensure smooth execution and timely project delivery.",
        "Covered 27 town panchayats within 7 months, achieving project goals efficiently."
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
      description: "Implemented digital marketing strategies including SEO, SEM, and social media campaigns to enhance online visibility and customer engagement. Conducted in-depth keyword research and optimized website content to improve search engine rankings.",
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
      name: "INFLUENCER MARKETING",
      description: "Managed influencer marketing campaigns, collaborating with influencers to enhance brand visibility and engagement. Worked with multiple influencers in the Tamil entertainment industry.",
      tags: [
        {
          name: "Influencer Collaboration",
          color: "blue-text-gradient"
        },
        {
          name: "Brand Visibility",
          color: "green-text-gradient"
        },
        {
          name: "Content Promotion",
          color: "pink-text-gradient"
        },
      ],
      image: jobit,
      source_code_link: "",
      demo_link: "" ,
      influencers: [
        "Mermer",
        "Edi Menal Kadhal", // Corrected spelling from "Edl Menal Kadhal"
        "Vathiyar Kuppam", // Corrected spelling from "Vathiyar Kuppa"
      ],
    },
    {
      name: "BRAND PROMOTION",
      description: "Executed various brand promotion campaigns, enhancing product visibility and boosting engagement across multiple channels. Focused on targeted marketing strategies.",
      tags: [
        {
          name: "Brand Awareness",
          color: "blue-text-gradient"
        },
        {
          name: "Targeted Marketing",
          color: "green-text-gradient"
        },
        {
          name: "Engagement Boost",
          color: "pink-text-gradient"
        },
      ],
      image: tripguide,
      // source_code_link: "https://github.com/",
      // demo_link: "http://www.demo.com" ,
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  axios.get('http://localhost:5000/api/data')
  .then((response) => console.log(response.data))
  .catch((error) => console.error('Error:', error));