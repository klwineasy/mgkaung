import type { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  name: "KAUNG",
  title: "LWIN",
  tagline: "Front-End Developer · Full-Stack Aspirant · AWS Certified",
  summary:
    "Results-driven developer with 6+ years building responsive, high-performance web applications using React, TypeScript, and modern CSS. Bridging design and engineering — from pixel-perfect UIs to cloud integrations.",
  contact: {
    email: "klwin38@gmail.com",
    // phone: "+1 (602) 476-4034",
    github: "github.com/klwin",
    website: "mgkaung.com",
    location: "Phoenix, AZ",
  },
  experience: [
    {
      title: "Front-End Developer",
      company: "inizioevoke",
      location: "Tempe, AZ",
      period: "OCT 2020 – PRESENT",
      bullets: [
        "Architected and maintained a library of reusable React/TypeScript components, reducing feature development time across teams.",
        "Delivered modern, fully responsive web applications using React and advanced CSS techniques.",
        "Integrated applications with AWS services (S3, Lambda, API Gateway) and third-party REST APIs.",
        "Built and maintained CI/CD pipelines using GitHub Actions to automate testing, builds, and deployments.",
        "Managed version control and release workflows using Git/GitHub in an Agile environment.",
        "Collaborated cross-functionally with back-end developers, PMs, and QA engineers to ship features on schedule.",
      ],
    },
    {
      title: "Technical Support / Web Developer",
      company: "U Than Ohn & Sons",
      location: "Yangon (Freelance)",
      period: "MAR 2020 – PRESENT",
      bullets: [
        "Designed and built a fully customized accounting system with Google Sheets and Apps Script (JavaScript).",
        "Launched an e-commerce storefront on Shopify (uthanohn.com) and integrated it with the accounting system for automated, real-time inventory management.",
      ],
    },
    {
      title: "Front-End Developer (CMS & Support)",
      company: "Simpleview",
      location: "Tucson, AZ",
      period: "JUN 2018 – FEB 2020",
      bullets: [
        "Translated high-fidelity designs into interactive, responsive pages for travel destination websites using HTML, CSS, JavaScript, jQuery, and Vue.js.",
        "Supported and maintained a portfolio of CMS-driven client sites, resolving bugs and implementing feature enhancements.",
      ],
    },
    {
      title: "Web Developer",
      company: "RPImaging",
      location: "Tucson, AZ",
      period: "MAY 2015 – OCT 2021",
      bullets: [
        "Maintained and enhanced product pages using HTML, CSS, and JavaScript via the Magento CMS platform.",
        "Boosted organic search visibility through ongoing SEO improvements monitored via Google Search Console.",
        "Designed and deployed email marketing templates in MailChimp; ensured cross-client compatibility.",
        "Ensured consistent mobile responsiveness and accessibility across all site pages.",
        "Administered third-party API integrations and performed image retouching in Adobe Photoshop.",
      ],
    },
  ],
  skillGroups: [
    {
      category: "Languages",
      variant: "cyan",
      skills: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      variant: "pink",
      skills: ["React", "Vue.js", "Node.js", "Express.js", "GraphQL", "jQuery"],
    },
    {
      category: "Cloud & DevOps",
      variant: "yellow",
      skills: [
        "AWS S3",
        "Lambda",
        "API Gateway",
        "GitHub Actions",
        "CI/CD",
        "Git",
      ],
    },
    {
      category: "CMS & E-Commerce",
      variant: "cyan",
      skills: ["WordPress", "Magento", "Shopify"],
    },
    {
      category: "Databases",
      variant: "pink",
      skills: ["MySQL", "SQL"],
    },
    {
      category: "Design & Tools",
      variant: "cyan",
      skills: ["Adobe Photoshop", "UI/UX", "MailChimp", "MS Office"],
    },
    {
      category: "Operating Systems",
      variant: "yellow",
      skills: ["Windows", "macOS", "Linux"],
    },
  ],
  certifications: [
    {
      name: "Solutions Architect – Associate",
      period: "AUG 2022 – AUG 2025",
      description:
        "Demonstrated ability to design secure, scalable, fault-tolerant distributed systems on AWS using architectural best practices.",
    },
    {
      name: "Cloud Practitioner",
      period: "JUN 2022 – JUN 2025",
      description:
        "Validated foundational knowledge of AWS Cloud services, core infrastructure, and cloud fluency.",
    },
  ],
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Arizona",
    graduated: "MAY 2017",
  },
};
