import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://devweekly.github.io",
  author: "SW",
  desc: "Tech weekly newsletter",
  title: "TechWeekly",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 7,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/dalian-js",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
