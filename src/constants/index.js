import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer and data enthusiast with a strong foundation in building robust, scalable, and user-friendly web applications. With expertise in front-end technologies such as React, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS, I craft seamless and responsive user interfaces. On the back end, I have hands-on experience with Node.js, MongoDB, and MySQL, ensuring efficient and reliable server-side development.`;

export const ABOUT_TEXT = `In addition to my web development skills, I bring a deep interest in data science and analytics. Proficient in Python, I specialize in data analysis, machine learning, model building, and data visualization using tools like Power BI. My goal is to combine my technical skills in development and data science to deliver innovative solutions that drive business growth, optimize decision-making, and create exceptional user experiences.`;

export const ABOUT=`I’m a tech enthusiast and a creative problem solver with a passion for coding and innovation. My journey in web development and data science has equipped me with expertise in technologies like React, JavaScript, Python, and SQL, enabling me to craft efficient and impactful solutions. Beyond coding, I enjoy immersing myself in video games that fuel my strategic thinking, exploring new cuisines, and diving into the world of storytelling through movies and books. I believe that a blend of creativity, curiosity, and technical skills allows me to approach challenges with a unique perspective. Let’s build something extraordinary together!`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Oct 2024",
    role: "Data Science Intern",
    company: "Ai Varaint",
    description: `Contributed as a Data Science Intern by developing predictive models and data-driven solutions using Python, TensorFlow, and Scikit-learn. Conducted data preprocessing, feature engineering, and exploratory data analysis to improve model accuracy. Collaborated with team members to refine algorithms and present actionable insights to stakeholders.`,
    technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas","Numpy etc."],
  },
  {
    year: "Dec 2023 - Jun 2024",
    role: "Full Stack Developer Intern",
    company: "Talent Battle",
    description: `Designed and developed user interfaces for web applications. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "JavaScript","React.js", "mySQL"],
  },
  
];

export const PROJECTS = [
  
  {
    title: "Gold Price Forecasting",
    image: project4,
    description:
      "A machine learning project that analyzes historical gold price data to predict future trends, utilizing Python for data preprocessing, modeling, and visualization.",
    technologies: ["Python", "Pandas", "Numpy", "Scikit-learn", "Matplotlib","Seaborn"],
  },
  {
    title: "Bike Rental Regression",
    image: project6,
    description:
      "A regression project that predicts bike rental demand based on factors like weather, time of day, and holidays, using machine learning models to analyze and forecast rental patterns.",
    technologies: ["Python", "Pandas",  "Scikit-learn", "Matplotlib","NLTK","TextBlob"],
  },
  {
    title: "Sentiment Analysis",
    image: project5,
    description:
      "A text analysis project that uses natural language processing (NLP) to determine sentiment in user reviews, applying machine learning models to classify text as positive, negative, or neutral.",
    technologies: ["Python", "Pandas",  "Scikit-learn", "Matplotlib","Seaborn"],
  },

  {
    title: "E-Commerce Dashboard (Power BI)",
    image: project7,
    description:
      "An interactive e-commerce dashboard created using Power BI, providing real-time insights into key metrics like sales, customer behavior, and inventory status.",
    technologies: ["Power BI", "DAX",  "Power Query"],
  },

  {
    title: "Campground Explorer",
    image: project1,
    description:
      "A web app using Express, MongoDB, and Node.js, enabling users to view, create, update, and delete campground listings with a sleek Bootstrap-enhanced design.",
    technologies: ["HTML", "CSS", "Express", "Node.js", "MongoDB"],
  },
  {
    title: "Weather App",
    image: project2,
    description:
      "A simple React application that uses the OpenWeather API to fetch and display weather data for searched cities, featuring a clean and intuitive user interface.",
    technologies: ["HTML", "CSS", "React",],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TAILWIND CSS", "React"],
  },
];

export const CONTACT = {
  address: "Aurangabad,Maharashtra,India ",
  phoneNo: "+91 9960773676",
  email: "aftabsyed568@gmail.com",
};
