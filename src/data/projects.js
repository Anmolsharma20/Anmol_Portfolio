// src/data/projects.js

const projectsData = [
  {
    id: 1,
    name: "Dynamic Sales & Customer Dashboards",
    description: "Interactive Tableau dashboards analyzing sales, customer behavior, and KPIs with filters.",
    details:
      "Designed and published multiple Tableau dashboards for sales and customer insights. Added interactive filters, KPIs, and drill-downs to support better decision-making. The dashboards provided real-time visibility into performance metrics and helped identify customer trends.",
    image: "/assets/tableau_dashboards.png", // put actual image in public/assets/
    skills: ["Tableau", "Data Visualization", "KPI Analysis", "Dashboard Design"],
    projectUrl: "https://public.tableau.com/app/profile/anmol.sharma1795/viz/SalesCustomerDashboardsDynamic_17413747707680/CustomerDashboard", // replace with your Tableau Public link if available
  },
  {
    id: 2,
    name: "Car Rental Website",
    description: "A responsive car rental booking platform with user interface for rentals.",
    details:
      "Designed and developed a car rental website with options to view, filter, and book cars. Integrated a clean UI for car details (price, type, availability) and booking flow. Added responsive design for mobile and desktop. Future scope includes payment integration and user authentication.",
    image: "/assets/car_rental.png",
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
    projectUrl: "https://car-rental-fullstack-rho.vercel.app/", // update if repo exists
  },
  {
    id: 3,
    name: "Land & Water Classification – Google Earth Engine",
    description: "Geospatial classification model achieving 0.928 F1 score.",
    details:
      "Developed a machine learning model in Google Earth Engine to classify land and water regions in Northern India. Trained on satellite data and validated with ground truthing. Achieved an F1 score of 0.928 and exported results as CSV for analysis. This project demonstrated expertise in geospatial analysis and remote sensing.",
    image: "/assets/land_water.png",
    skills: ["Google Earth Engine", "Remote Sensing", "Machine Learning", "Python"],
    projectUrl: "https://code.earthengine.google.com/ed31c3d01126c50407867236db941b41", // add link if hosted
  },
  {
    id: 4,
    name: "Payment Gateway & Ask a Question – MNF",
    description: "Real-time payment gateway with discount system and Q&A interface.",
    details:
      "Built a secure payment gateway with discount integration for MNF. Designed an 'Ask a Question' feature where users could select from pre-written questions to streamline query resolution. Recognized as the highest bug solver in the team and delivered reports directly to the CEO.",
    image: "/assets/payment_gateway.png",
    skills: ["JavaScript", "Payment APIs", "Frontend Development", "Bug Resolution"],
    projectUrl: "", // add link if deployed
  },
  {
    id: 5,
    name: "Flipkart Homepage Clone",
    description: "A functional Flipkart homepage clone with product listings and search.",
    details:
      "Developed a responsive and dynamic Flipkart homepage clone using HTML, CSS, and JavaScript. Implemented dynamic product listing, search functionality, and styled components to replicate the real Flipkart experience. This project sharpened frontend development skills and UI design.",
    image: "/assets/flipkart_clone.png",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    projectUrl: "https://github.com/Anmolsharma20/Flipkart_front_page_clone", // update if you have a repo
  },  
  {
    id: 6,
    name: "Deloitte Tableau Work",
    description: "Professional Tableau dashboards for Deloitte case work.",
    details:
      "Built Tableau dashboards to analyze client business metrics and KPIs as part of Deloitte-style case work. Focused on storytelling with data, enabling actionable insights for business stakeholders. Implemented interactive filters and KPI cards for executive reporting.",
    image: "/assets/deloitte_tableau.png",
    skills: ["Tableau", "Data Analysis", "KPI Dashboards", "Storytelling with Data"],
    projectUrl: "https://public.tableau.com/app/profile/anmol.sharma1795/viz/Deloitteworkexperience/Dashboard1",
  },
  {
    id: 7,
    name: "Zeotap Assignment",
    description: "Data cleaning and insights generation for Zeotap dataset.",
    details:
      "Completed a case study assignment for Zeotap involving data cleaning, preprocessing, and analysis. Applied SQL and Python to derive insights from customer datasets. Designed reports and presented key findings in structured format, showcasing problem-solving and analytical thinking.",
    image: "/assets/zeotap.png",
    skills: ["SQL", "Python", "Data Cleaning", "Data Analysis", "Reporting"],
    projectUrl: "https://github.com/Anmolsharma20/ZEOTAP_Assignment",
  },
  {
    id: 8,
    name: "World Happiness Index – Tableau Visualization",
    description: "Visualization of global happiness scores and trends.",
    details:
      "Created an interactive Tableau dashboard analyzing the World Happiness Index across countries. Implemented country-level filters, region comparisons, and trend analysis. Visualized factors like GDP, social support, and life expectancy to uncover drivers of happiness worldwide.",
    image: "/assets/world_happiness.png",
    skills: ["Tableau", "Data Visualization", "Global Index Analysis"],
    projectUrl: "https://public.tableau.com/app/profile/anmol.sharma1795/viz/worldhappiness2015-2017_17090328873150/Sheet2", // replace with your Tableau link
  },
];

export default projectsData;
