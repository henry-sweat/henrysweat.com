import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Henry Sweat",
  initials: "HS",
  location: "Florida, USA",
  locationLink: "https://www.google.com/maps/place/Florida",
  headline: "Full-Stack Engineer & Open-Source Contributor",
  about:
    "Hello! 👋 I'm Henry Sweat, a Software Engineer focused on building full-stack applications in TypeScript, React/Redux, Svelte, Node.js/Express.js, and SQL/NoSQL databases. Most recently, I have made contributions to Svelvet, a lightweight component library for building interactive, node-based UIs and diagrams in Svelte.",
  // avatarUrl: "",
  personalWebsiteUrl: "https://henrysweat.com",
  contact: {
    email: "hi@henrysweat.com",
    tel: "+14074082366",
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
      company: "Svelvet",
      link: "https://svelvet.io",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "2023",
      end: "Present",
      description:
        "Authored native parsing and rendering algorithms for mermaid strings in Svelte, upgraded the product's landing page to the latest version of SvelteKit, and operated in a fully type-safe system in TypeScript with generic functions and custom interfaces.",
    },
    {
      company: ".d Machining",
      link: "https://www.dotdmachining.com",
      badges: [],
      title: "Business Intelligence Developer",
      start: "2021",
      end: "2023",
      description:
        "Spearheaded a major business intelligence initiative by securely bridging sensitive on-premise data to the cloud enabling real-time reporting, and implemented multiple production automations with Python and Robotic Process Automation techniques.",
    },
    {
      company: "Ernst & Young (EY)",
      link: "https://www.ey.com/en_us/financial-services",
      badges: [],
      title: "Financial Services Auditor",
      start: "2019",
      end: "2021",
      description:
        "Leveraged python to audit all significant accounts for unregulated hedge funds, PE fund of funds, and large investment banks.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwind",
    "Svelte",
    "Node.js",
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
