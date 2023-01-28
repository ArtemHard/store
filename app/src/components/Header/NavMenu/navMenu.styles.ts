import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavigationItem = styled.li`
  color: yellow;
`;

const NavigationLink = styled(Link)`
  color: inherit;
  :hover {
    color: gray;
  }
`;

export { Navigation, NavigationItem, NavigationLink };
