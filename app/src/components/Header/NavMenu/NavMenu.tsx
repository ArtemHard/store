import React from "react";
import { Navigation, NavigationItem, NavigationLink } from "./navMenu.styles";
type RouteType = {
  route: string;
  name: string;
};
const routes: Array<RouteType> = [
  { route: "/", name: "Главная" },
  { route: "/", name: "Каталог" },
  { route: "/", name: "Контакты" },
  { route: "/", name: "О нас" },
];

const createNavLinks = (routes: Array<RouteType>) => {
  return routes.map((r) => {
    return (
      <NavigationItem key={r.name}>
        <NavigationLink to={r.route}>{r.name}</NavigationLink>
      </NavigationItem>
    );
  });
};
export const NavMenu = () => {
  return <Navigation>{createNavLinks(routes)}</Navigation>;
};
