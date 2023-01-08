import {
  ABOUT_PATH,
  BLOG_PATH,
  HOME_PATH,
  LINKS_PATH,
  PROJECTS_PATH,
} from "./internalPaths";

export const navigation = [
  {
    name: "homepage",
    label: "",
    pathConfig: {
      path: HOME_PATH,
      exact: true,
      strict: true,
    },
  },
  // {
  //   name: "blog",
  //   label: "BLOG",
  //   pathConfig: {
  //     path: BLOG_PATH,
  //     exact: false,
  //   },
  // },
  {
    name: "about",
    label: "ABOUT",
    pathConfig: {
      path: ABOUT_PATH,
      exact: true,
      strict: true,
    },
  },
  // {
  //   name: "links",
  //   label: "LINKS",
  //   pathConfig: {
  //     path: LINKS_PATH,
  //     exact: true,
  //     strict: true,
  //   },
  // },
  // {
  //   name: "projects",
  //   label: "PROJECTS",
  //   pathConfig: {
  //     path: PROJECTS_PATH,
  //     exact: true,
  //     strict: true,
  //   },
  // },
];
