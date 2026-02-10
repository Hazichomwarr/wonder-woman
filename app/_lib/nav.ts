//_lib/nav.ts
import { ROUTES } from "./siteRoutes";

export type NavItem = { label: string; href: string };

export const NAV_LINKS: NavItem[] = [
  { label: "Accueil", href: ROUTES.home },
  { label: "À propos", href: ROUTES.about },
  { label: "Festival", href: ROUTES.festival },
  { label: "Mission", href: ROUTES.mission },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Mentions légales", href: ROUTES.legal },
  { label: "Confidentialité", href: ROUTES.privacy },
];
