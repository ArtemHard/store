// Какая-тоКомпонента.tsx

import { Link } from "react-router-dom";
import styled from "styled-components";

const blackColor = "#000000";

const HeaderStyled = styled.header`
  background-color: ${blackColor};
  width: 100%;
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  flex-wrap: nowrap;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
`;
const Logo = styled.img`
  object-fit: contain;
`;

const LogoTitle = styled.h1`
  color: white;
`;

const Navigation = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavigationItem = styled.li`
  color: yellow;
`;

const NavigationLink = styled(Link)`
  color: inherit;
`;

export {
  HeaderStyled,
  LogoContainer,
  Logo,
  LogoTitle,
  Navigation,
  NavigationItem,
  NavigationLink,
};
