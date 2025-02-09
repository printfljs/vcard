import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from '@primer/octicons-react'
import { LuGithub, LuPencil, LuLinkedin, LuRss, LuMail, LuMapPin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";
import { TbPhoneCalling } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiLatex, SiFastapi, SiKubernetes, SiPostman } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import {
  TbBrandCpp, TbBrandTypescript,
  TbBrandGolang, TbBrandNextjs,
  TbBrandDjango, TbBrandDocker, TbBrandMysql,
  TbMarkdown, TbBrandAstro, TbBrandTerraform,
  TbPhotoSquareRounded
} from "react-icons/tb";

const config: Config = {
  avatar: '/images/profile.webp',
  title: "Jiashu Liu | Software Developer",
  description: "",
  author: "Jiashu Liu",
  keywords: [
    "Jiashu Liu",
    "Software Engineering",
    "Next.js",
    "React",
  ],
  status: "contact.status",
  siteURL: "https://www.jiashuu.com",
  openGraph: {
    url: "https://www.jiashuu.com/",
    type: "website",
    siteName: "Jiashu Liu",
    title: "Jiashu Liu",
    description: "",
    images: [
      {
        url: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
        width: 1200,
        height: 630,
        alt: "Jiashu Liu",
      },
    ],
  },
  navItems: [
    { path: '/', label: 'navbar.about' },
    { path: '/resume', label: 'navbar.resume' },
    // { path: '/portfolio', label: 'Portfolio' },
    { path: '/post', label: 'navbar.post' },
    { path: '/gallery', label: 'navbar.gallery' },
  ],
  contacts: [
    {
      icon: LuMapPin,
      title: "Location",
      content: "contact.location",
    },
    {
      icon: LuMail,
      title: "Email",
      link: "contact.email-link",
      content: "contact.email",
    },
    // {
    //   icon: TbPhoneCalling,
    //   title: "Phone",
    //   content: "404 Not Found 📲",
    // },
    // {
    //   icon: LuGithub,
    //   title: "GitHub",
    //   link: "https://github.com/1chooo",
    //   content: "1chooo",
    // },
    // {
    //   icon: IoCalendarOutline,
    //   title: "Birthday",
    //   content: "January 27, 2002 🐻",
    // },
    {
      icon: LuLinkedin,
      title: "LinkedIn",
      link: "contact.linkedin-link",
      content: "contact.linkedin",
    },
  ],
  socialLinks: [
    // { url: `https://github.com/1chooo`, icon: LuGithub, name: 'GitHub' },
    { url: `https://www.linkedin.com/in/jiashu-liu/`, icon: LuLinkedin, name: 'LinkedIn' },
    // { url: `https://medium.com/@1chooo`, icon: PiMediumLogoBold, name: 'Medium' },
    // { url: `https://twitter.com/1chooo___`, icon: FaXTwitter, name: 'Twitter' },
    // { url: `/rss.xml`, icon: LuRss, name: 'RSS Feed' },
    { url: `/cv.pdf`, icon: MdAttachment, name: 'CV' },
  ],
  about: {
    "firstName": 'Jiashu',
    "lastName": 'Liu',
    "fullName": 'contact.fullname',
    "middleName": "",
    "preferredName": "",
    "additionalName": "",
    "pronouns": 'She/Her',
    "githubUsername": "printfljs",
    "introduction": "contact.introduction",
    "lifestyles": [
      {
        icon: LuGithub,
        title: "Open Source",
        text: "Actively contributing to open source projects on GitHub."
      },
      {
        icon: LuPencil,
        title: "Storytelling",
        text: "Love to share my knowledge and experience with others."
      },
      {
        icon: GoalIcon,
        title: "Workouts",
        text: "Basketball and weight training defines my active workout lifestyle."
      },
      {
        icon: TbPhotoSquareRounded,
        title: "Photography",
        text: "Sky brings freedom; streets, a reminder of others' contributions."
      }
    ],
    "techStacks": {
      programmingLanguages: [
        { name: 'Python', icon: AiOutlinePython },
        { name: 'TypeScript', icon: TbBrandTypescript },
        { name: 'Golang', icon: TbBrandGolang },
        { name: 'C++', icon: TbBrandCpp },
        { name: 'Java', icon: RiJavaLine },
        { name: 'JavaScript', icon: RiJavascriptLine },
        { name: 'LaTeX', icon: SiLatex },
        { name: 'Markdown', icon: TbMarkdown },
        { name: 'Astro', icon: TbBrandAstro },
        { name: 'Terraform', icon: TbBrandTerraform },
      ],
      frameworks: [
        { name: 'React', icon: FaReact },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Flask', icon: BiLogoFlask },
        { name: 'Redis', icon: DiRedis },
        { name: 'Linux Terminal', icon: VscTerminalLinux },
        { name: 'AWS', icon: FaAws },
        { name: 'Next.js', icon: TbBrandNextjs },
        { name: 'Docker', icon: TbBrandDocker },
        { name: 'MySQL', icon: TbBrandMysql },
        { name: 'Django', icon: TbBrandDjango },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Postman', icon: SiPostman },
        { name: 'Azure', icon: VscAzure },
      ],
    }
  },
  resume: {
      "educations": {
        "icon": IoSchoolOutline,
        "title": "Education",
        "items": [
          {
            "company": "University of Helsinki",
            "location": "Helsinki, Finland",
            "role": "Master of Science in Computer Science (Networking)",
            "duration": "Sep. 2023 — Jun. 2025",
            tasksMarkdown: `
___Full Scholarship Recipient___

- **Key Courses:** Network Protocol Analysis, IoT Data Science, Network AI Systems, Computer Vision, Edge Intelligence & LLM
            `
          },
          {
            "company": "Jilin University",
            "location": "Changchun, China",
            "role": "Bachelor of Science in Computer Science",
            "duration": "Sep. 2015 — Jun. 2019",
            "tasksMarkdown": ``
          }
        ]
      },
      "professionalExperiences": {
        "icon": MdOutlineDevices,
        "title": "Professional Experience",
        "items": [
          {
            "company": "Eficode, Fuji Team",
            "location": "Helsinki, Finland",
            "role": "Full Stack Developer Intern",
            "duration": "Apr. 2024 - Sep. 2024",
            tasksMarkdown: `
- Developed and maintained a web accessibility monitoring project using Puppeteer and BullMQ for web scraping and task processing.
- Designed and implemented WebSocket server deployment with distributed scaling in Kubernetes, handling timeout reconnections and backend service authentication.
- Used Pulumi for Infrastructure as Code (IaC) to automate Azure resource provisioning and scaling, ensuring high availability and elasticity.
- Gained expertise in WCAG (Web Content Accessibility Guidelines) compliance, implementing and testing WCAG 2 rules.
            `
          },
          {
            "company": "Inspur, Medical Data Platform Department",
            "location": "Jinan, China",
            "role": "Software Engineer",
            "duration": "Aug. 2021 - Jun. 2023",
            "tasksMarkdown": `
- Developed key business interfaces, including contact tracing report submission and venue code scanning, using Kafka for load balancing to ensure system stability.
- Optimized venue code system performance through horizontal partitioning, read-write separation, and cold-hot data separation.
- Developed WeChat Mini Program and public account frontend, implementing login, scanning, and caching mechanisms for improved performance.
            `
          }
        ]
      },
      "projectExperiences": {
        "icon": PiTrophy,
        "title": "Projects",
        "items": [
          {
            "company": "Laundry Bot - Smart Laundry Booking System",
            "location": "",
            "role": "Inspired by the apartment's needs, I conceived, designed, and developed the entire system, with 80% user adoption and 30% active engagement",
            "duration": "",
            "tasksMarkdown": `
- Designed and implemented a serverless laundry booking automation system using AWS Lambda, Apify, and CockroachDB for data collection, storage, and management.
- Integrated OpenAI API for natural language interactions, enabling users to book, query, and manage reservations via a Telegram bot.
- Leveraged AWS EventBridge for automated booking handling and S3 for raw data storage, implementing a multi-level notification system.
            `
          },
          {
            "company": "Edge-LLM - Edge LLM-driven Network Adaptive Optimization System",
            "location": "",
            "role": "Extended development from a course hackathon",
            "duration": "",
            "tasksMarkdown": `
- Developed an adaptive distributed network system using edge devices, integrating federated learning and traffic optimization strategies to enhance communication efficiency.
- Utilized TensorFlow Lite and MQTT for low-power edge model training and high-efficiency device communication.
- Deployed lightweight LLM with LlamaFile to analyze traffic data and dynamically optimize hyperparameters for improved training efficiency.
            `
          }
        ]
      },
      "skills": {
        "icon": PiBooks,
        "title": "Skills",
        "items": [
          {
            "company": "Development Tech Stack",
            "tasksMarkdown": `
- **Backend:** Java, Python, Node.js, Spring Boot, Express
- **Frontend:** TypeScript, JavaScript, React, Next.js, Vue.js, Tailwind CSS
- **Tools:** Git, GitHub Actions, Bitbucket, Jenkins
- **Cloud & Containerization:** Docker, Kubernetes, AWS, Azure (Azure Developer Associate Certified)
        `
          }
        ]
      }
  },
  "giscusConfig": {
    id: "comments",
    repo: "1chooo/1chooo.com",
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || '',
    category: "General",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CONFIG_CATEGORY_ID || '',
    mapping: "pathname",
    term: "Welcome to @giscus/react component!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  "googleAnalyticId": process.env.NEXT_PUBLIC_GA_ID || '',
  "googleTagManagerId": process.env.NEXT_PUBLIC_GTM_ID || '',
};

export default config;
