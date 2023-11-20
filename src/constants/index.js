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
    mediaplayer,
    flyingtweety,
    uom,
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
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
      name: "Spring",
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
      name: "java",
      icon: figma,
    },
    {
      name: "mysql",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Trainee Full Stack Developer",
      company_name: "IJSE",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Developing and maintaining web applications using Spring boot and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Trainee- Full Stack Developer",
      company_name: "UOM",
      icon: uom,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Successfully completed Trainee - full stack developer program provided by University of Moratuwa",
        "Covers Develop fully functional web applications by utilizing state-of-the-art tools and frameworks.",
        "Develop communication and analytical skills in a professional software development setting.",
        "Apply core programming knowledge and skills to solve real-world problems.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "EA System",
      description:
        "Desktop Application that allows users to manage, mark attendance, and get attendance reports for various users such as admin, HR , IT department and employees.",
      tags: [
        {
          name: "JavaFX",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Nilan-Dinushka/IJSE-Employee-Management-System.git",
    },
    {
      name: "Personal Portfolio",
      description:
        "My Personal portfolio is a treatment to my commitment to excellance, featuring a collection of my finest works that showcase my skills, and unwaving passion for success.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Nilan-Dinushka/my-portfolio-website.git",
    },
    {
      name: "Point of Sale System",
      description:
        "User-friendly point of sale solution is designed to enhance efficiency and elevate customer experience. This allows users to manage customers and manage inventories.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Postgresql",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Nilan-Dinushka/smart-pos-system.git",
    },

    {
      name: "Mini Game",
      description:
        "Simple game designed using html, css and javascript. Player should guid to a bird for fly through barriers",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: flyingtweety,
      source_code_link: "https://github.com/Nilan-Dinushka/mini-game.git",
    },

    {
      name: "Media Player",
      description:
        "Attractive Media PLayer can use with both audio and video media files. This consist with multiple functionalities such as seeking, fast forwarding etc.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "JavFX",
          color: "pink-text-gradient",
        },
      ],
      image: mediaplayer,
      source_code_link: "https://github.com/Nilan-Dinushka/Media-Player-JavaFX.git",
    },

  
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  