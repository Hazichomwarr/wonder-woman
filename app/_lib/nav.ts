//_lib/nav.ts
import { ROUTES } from "./siteRoutes";

export type NavItem = { label: string; href: string; hash?: string };

export const NAV_LINKS: NavItem[] = [
  { label: "Accueil", href: ROUTES.home },
  { label: "Festival", href: ROUTES.festival, hash: "#festival" },
  { label: "Mission", href: ROUTES.mission, hash: "#mission" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Mentions légales", href: ROUTES.legal },
  { label: "Confidentialité", href: ROUTES.privacy },
];
