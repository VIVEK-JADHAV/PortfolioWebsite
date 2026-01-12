import { JobExperience, SkillCategory, Education, Certification, Project } from './types';

export const PERSONAL_INFO = {
  name: "Vivek R Jadhav",
  role: "Data Engineer",
  email: "vivekjadhavr@gmail.com",
  phone: "+91-8748002322",
  location: "Bangalore, India",
  linkedin: "https://www.linkedin.com/in/vivek-rajakumar-jadhav/",
  summary: "Skilled Data Engineer with over 6 years of experience in the IT industry. Specialized in designing and managing data pipelines, optimizing data processing, and building robust data warehousing solutions. Proficient in transforming raw data into actionable insights. Proven track record of reducing deployment efforts and enhancing data quality through automation and efficient pipeline design."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Fundamentals",
    items: ["Python", "Shell Scripting", "Data Structures & Algorithms"]
  },
  {
    category: "AWS Services",
    items: ["S3", "EC2", "Lambda", "Glue", "Redshift", "Athena", "Dynamo DB"]
  },
  {
    category: "Azure Services",
    items: ["Azure Data Factory", "Azure Functions", "Azure DevOps", "ADLS", "Synapse"]
  },
  {
    category: "Big Data & Orchestration",
    items: ["Apache Spark", "Hive", "Hadoop", "Databricks", "Airflow"]
  },
  {
    category: "Databases & Visualization",
    items: ["MySQL", "SQL Server", "Mongo DB", "Power BI"]
  }
];

export const EXPERIENCE: JobExperience[] = [
  {
    role: "Data Engineer",
    company: "Amazon",
    location: "Bangalore, India",
    period: "December 2024 - Present",
    description: [
      "Developed and maintained over 10 ETL pipelines on EMR using PySpark and Lambda, designed to detect vendor-induced defects from incorrect product detail updates, efficiently processing 15 TB of data daily to ensure data accuracy and consistency across systems.",
      "Engineered a Lakehouse architecture leveraging AWS EMR, Glue, and S3, with data stored in Apache Iceberg format, to enable seamless tracking and analysis of customer product returns, processing 5 TB of data each day with high reliability and scalability.",
      "Enhanced the performance of existing PySpark jobs by 60% through the application of advanced Spark optimization techniques, resulting in significantly faster identification and resolution of incorrect widgets displayed to customers."
    ],
    techStack: ["PySpark", "AWS EMR", "AWS Glue", "AWS Lambda", "Apache Iceberg", "S3", "Python"]
  },
  {
    role: "Data Engineer",
    company: "Nokia",
    location: "Bangalore, India",
    period: "October 2022 - November 2024",
    description: [
      "Built and optimized over 30 data pipelines for Real Estate Data using Azure Data Factory, ensuring efficient and reliable data flow across systems.",
      "Architected a 50 GB data warehouse on Azure Synapse, employing SCD Type II dimension modeling to maintain historical data accuracy and support complex reporting needs.",
      "Streamlined deployment processes by developing CI/CD pipelines in Azure DevOps, reducing manual deployment efforts by 50%, and leading to faster and more reliable software releases."
    ],
    techStack: ["Azure Data Factory", "Azure Synapse", "Azure DevOps", "SCD Type II", "SQL"]
  },
  {
    role: "Data Engineer",
    company: "Data Grokr",
    location: "Bangalore, India",
    period: "May 2021 - September 2022",
    description: [
      "Built and managed robust data pipelines using Airflow and AWS services like AWS Lambda and Amazon S3, seamlessly integrating on-premises data sources with cloud environments.",
      "Improved query efficiency and reduced data retrieval times on Amazon Redshift by implementing advanced distribution and sort key strategies."
    ],
    techStack: ["Apache Airflow", "AWS Lambda", "Amazon S3", "Amazon Redshift", "Python"]
  },
  {
    role: "Backend Software Engineer",
    company: "Infosys",
    location: "Bangalore, India",
    period: "Jan 2019 - April 2021",
    description: [
      "Managed a trade reporting platform for an Investment banking company using Java and SQL.",
      "Optimized SQL queries by implementing advanced indexing techniques, reducing trade reporting time by 10%, which improved system efficiency."
    ],
    techStack: ["Java", "SQL", "Database Optimization"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Data Engineer – Associate",
    year: "2025"
  },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    year: "2024"
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    year: "2023"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Bangalore Institute Of Technology",
    degree: "Bachelor Of Engineering",
    year: "2013 - 2017"
  }
];

export const HOBBIES = ["Technical Blogger", "Trek Lead"];

export const PROJECTS: Project[] = [
  {
    title: "Enterprise Data Lakehouse",
    description: [
      "Designed a scalable Lakehouse architecture on AWS using EMR, Glue, and Iceberg to process 15 TB of daily data.",
      "Enabled efficient tracking of customer product returns and defect detection."
    ]
  },
  {
    title: "Real Estate Data Platform",
    description: [
      "Built 30+ pipelines using Azure Data Factory for comprehensive real estate data management.",
      "Optimized data warehousing on Azure Synapse with SCD Type II modeling."
    ]
  },
  {
    title: "Trade Reporting System Optimization",
    description: [
      "Optimized SQL queries and backend services for an investment banking trade reporting platform.",
      "Reduced reporting time by 10% through advanced database indexing and query tuning."
    ]
  }
];