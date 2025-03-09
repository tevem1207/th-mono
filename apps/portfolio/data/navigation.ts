export interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default navigationItems;
