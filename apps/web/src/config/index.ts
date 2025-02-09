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
    educations: {
      icon: IoSchoolOutline,
      title: "resume.educations.title",
      items: [
        {
          company: "resume.educations.items.0.company",
          location: "resume.educations.items.0.location",
          role: "resume.educations.items.0.role",
          duration: "resume.educations.items.0.duration",
          tasksMarkdown: "resume.educations.items.0.tasksMarkdown"
        },
        {
          company: "resume.educations.items.1.company",
          location: "resume.educations.items.1.location",
          role: "resume.educations.items.1.role",
          duration: "resume.educations.items.1.duration",
          tasksMarkdown: "resume.educations.items.1.tasksMarkdown"
        }
      ]
    },
    professionalExperiences: {
      icon: MdOutlineDevices,
      title: "resume.professionalExperiences.title",
      items: [
        {
          company: "resume.professionalExperiences.items.0.company",
          location: "resume.professionalExperiences.items.0.location",
          role: "resume.professionalExperiences.items.0.role",
          duration: "resume.professionalExperiences.items.0.duration",
          tasksMarkdown: "resume.professionalExperiences.items.0.tasksMarkdown"
        },
        {
          company: "resume.professionalExperiences.items.1.company",
          location: "resume.professionalExperiences.items.1.location",
          role: "resume.professionalExperiences.items.1.role",
          duration: "resume.professionalExperiences.items.1.duration",
          tasksMarkdown: "resume.professionalExperiences.items.1.tasksMarkdown"
        }
      ]
    },
    projectExperiences: {
      icon: PiTrophy,
      title: "resume.projectExperiences.title",
      items: [
        {
          company: "resume.projectExperiences.items.0.company",
          location: "resume.projectExperiences.items.0.location",
          role: "resume.projectExperiences.items.0.role",
          duration: "resume.projectExperiences.items.0.duration",
          tasksMarkdown: "resume.projectExperiences.items.0.tasksMarkdown"
        },
        {
          company: "resume.projectExperiences.items.1.company",
          location: "resume.projectExperiences.items.1.location",
          role: "resume.projectExperiences.items.1.role",
          duration: "resume.projectExperiences.items.1.duration",
          tasksMarkdown: "resume.projectExperiences.items.1.tasksMarkdown"
        }
      ]
    },
    skills: {
      icon: PiBooks,
      title: "resume.skills.title",
      items: [
        {
          company: "resume.skills.items.0.company",
          tasksMarkdown: "resume.skills.items.0.tasksMarkdown"
        }
      ]
    }
  },
  giscusConfig: {
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
  googleAnalyticId: process.env.NEXT_PUBLIC_GA_ID || '',
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
};

export default config;
