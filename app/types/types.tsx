import { ReactNode } from "react";

export type Framework = {
  name: string;
  logo: string;
  color: string;
  render?(): ReactNode;
};

export type FooterLink = {
  label: string;
  href: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export type FooterDataType = {
  title: string;
  links: FooterLink[];
};
