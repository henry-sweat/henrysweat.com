import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Henry Sweat",
  initials: "HS",
  location: "Florida, USA",
  locationLink: "https://www.google.com/maps/place/Florida",
  headline: "Full-Stack Engineer & Open-Source Contributor",
  about:
    "Hello! 👋 I’m a Software Engineer specializing in full-stack applications using TypeScript, Node.js, Vue, and Fastify. Most recently, I’ve been working on Empath—-Capital One’s card servicing platform, an application used by tens of thousands of customer service agents around the world.",
  // avatarUrl: "",
  personalWebsiteUrl: "https://henrysweat.com",
  contact: {
    email: "hi@henrysweat.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/henry-sweat",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/henry-sweat/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Florida State University",
      degree: "Master's Degree in Accounting",
      start: "2018",
      end: "2019",
    },
    {
      school: "Florida State University",
      degree: "Bachelor's Degrees in Finance and Accounting",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Capital One",
      link: "https://www.capitalone.com/",
      badges: ["DC Area"],
      title: "Senior Software Engineer",
      start: "2024",
      end: "Present",
      description:
        "Collaborated with Design to implement a full redesign of our application's header + navigation bars to meet new regulatory requirements and enhance the user experience, all while maintaining full ADA compliance.",
    },
    {
      company: "Svelvet",
      link: "https://svelvet.io",
      badges: ["Remote", "Contract"],
      title: "Software Engineer",
      start: "2023",
      end: "2024",
      description:
        "Authored native parsing and rendering algorithms for mermaid strings in Svelte, upgraded the product's landing page to the latest version of SvelteKit, and operated in a fully type-safe system in TypeScript with generic functions and custom interfaces.",
    },
    {
      company: ".d Machining",
      link: "https://www.dotdmachining.com",
      badges: ["Orlando, FL"],
      title: "Software Engineer",
      start: "2021",
      end: "2023",
      description:
        "Spearheaded a major business intelligence initiative by securely bridging sensitive on-premise data to the cloud enabling real-time reporting, and implemented multiple production automations with Python and Robotic Process Automation techniques.",
    },
    {
      company: "Ernst & Young (EY)",
      link: "https://www.ey.com/en_us/financial-services",
      badges: ["New York City"],
      title: "Financial Services Auditor",
      start: "2019",
      end: "2021",
      description:
        "Leveraged Python to audit significant accounts for unregulated hedge funds, PE fund of funds, and large investment banks.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Fastify",
    "Vue",
    "React",
    "Node.js",
    "AWS",
    "Express",
    "Next.js",
    "Tailwind CSS",
    "Svelte",
    "SQL/NoSQL",
  ],
  projects: [
    //   {
    //     title: "",
    //     techStack: [
    //       "Side Project",
    //     ],
    //     description: "",
    //     logo: ,
    //     link: {
    //       label: "",
    //       href: "",
    //     },
    //   },
  ],
} as const;
