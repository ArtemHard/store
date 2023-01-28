// Какая-тоКомпонента.tsx

import styled from "styled-components";

const blackColor = "#000000";

const HeaderStyled = styled.header`
  background-color: ${blackColor};
  width: 100%;
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.5rem 2rem; */
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

export { HeaderStyled, LogoContainer, Logo, LogoTitle };
