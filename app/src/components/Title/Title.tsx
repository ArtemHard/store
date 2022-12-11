import React from "react";
import styled from "styled-components";

const StyledTytle = styled.h1`
  color: ${(props) => props.color};
`;

export const Title: React.FC<any> = (props) => {
  return <StyledTytle {...props} />;
};
