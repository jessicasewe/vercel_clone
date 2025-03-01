import { PiScales } from "react-icons/pi";
import { FooterDataType, Framework } from "../types/types";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export const framworks: Framework[] = [
  {
    name: "Next.js",
    logo: "/images/frameworks/next-js.svg",
    color: "#FFFFFF",
  },
  {
    name: "React",
    logo: "/images/frameworks/react-svgrepo-com.svg",
    color: "#61DAFB",
  },
  {
    name: "Nuxt",
    logo: "/images/frameworks/nuxt-svgrepo-com.svg",
    color: "#00DC82",
  },
  {
    name: "Svelte",
    logo: "/images/frameworks/svelte-svgrepo-com.svg",
    color: "#FF3E00",
  },
  {
    name: "Vue",
    logo: "/images/frameworks/vue-svgrepo-com.svg",
    color: "#42b883",
  },
  {
    name: "Gatsby",
    logo: "/images/frameworks/gatsby-svgrepo-com.svg",
    color: "#663399",
  },
  {
    name: "Astro",
    logo: "/images/frameworks/astro-svgrepo-com.svg",
    color: "#FF5D01",
  },
  {
    name: "Python",
    logo: "/images/frameworks/python-svgrepo-com.svg",
    color: "#3776AB",
  },
  {
    name: "Angular",
    logo: "/images/frameworks/angular-icon-svgrepo-com.svg",
    color: "#DD0031",
  },
  {
    name: "Vite",
    logo: "/images/frameworks/vite-svgrepo-com.svg",
    color: "#646CFF",
  },
];

export const reliabilityData = [
  {
    title: "Elastic Scalablity",
    message: `Handle unbelivable scale without a sweat, whether you are on fortune 500, or it's a launch day`,
    icon: <PiScales />,
  },
  {
    title: "Rock-solid Security",
    message: `Infrastructure designed to automatically mitigate DDoS attacks and protect your information`,
    icon: <PiScales />,
  },
  {
    title: "Rock-solid Security",
    message: `Infrastructure designed to automatically mitigate DDoS attacks and protect your information`,
    icon: <PiScales />,
  },
  {
    title: "Global Performance",
    message: `Automatically route traffic to over 100 edge locations around the globe, for a fast site, anywhere in the world`,
    icon: <PiScales />,
  },
  {
    title: "User-first protection",
    message: `Automatically route traffic to over 100 edge locations around the globe, for a fast site, anywhere in the world`,
    icon: <PiScales />,
  },
  {
    title: "Serverless Storage",
    message: `Accerelate development with databases for the fastest frontends.`,
    icon: <PiScales />,
  },
];

export const deployYourAppSectionData = [
  {
    message: "Deploy your first app in seconds.",
    imagesUris: ["github", "gitlab", "", ""],
  },
  {
    message: "Deploy automatically with git or with our CLI.",
    imagesUris: ["github"],
  },
  {
    message: "Wide range support for the most popular frameworks.",
    imagesUris: ["github"],
  },
  {
    message: "Preview for every push.",
    imagesUris: ["github"],
  },
];

export const footerData: FooterDataType[] = [
  {
    title: "Products",
    links: [
      { label: "AI", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Fluid Compute", href: "#" },
      { label: "Next.js", href: "#" },
      { label: "Observability", href: "#" },
      { label: "Previews", href: "#" },
      { label: "Rendering", href: "#" },
      { label: "Security", href: "#" },
      { label: "Turbo", href: "#" },
      {
        label: "v0",
        href: "#",
        icon: <FiExternalLink />,
        iconPosition: "right",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Community",
        href: "#",
        icon: <FiExternalLink />,
        iconPosition: "right",
      },
      { label: "Docs", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Help", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Solution Partners", href: "#" },
      { label: "Templates", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "	About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: "#", icon: <FaGithub />, iconPosition: "left" },
      {
        label: "LinkedIn",
        href: "#",
        icon: <FaLinkedin />,
        iconPosition: "left",
      },
      {
        label: "Twitter",
        href: "#",
        icon: <FaXTwitter />,
        iconPosition: "left",
      },
      {
        label: "YouTube",
        href: "#",
        icon: <FaYoutube />,
        iconPosition: "left",
      },
    ],
  },
];
