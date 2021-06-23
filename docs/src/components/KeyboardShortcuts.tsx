import React from "react";
import { Stack } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteInkLight};
  `}
`;

const StyledIcon = styled.span`
  ${({ theme }) => css`
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    background: rgba(17, 24, 39, 0.08);
    border-radius: ${theme.orbit.borderRadiusNormal};
  `}
`;

const KeyboardShortcuts = () => {
  const [os, setOs] = React.useState("mac");

  React.useEffect(() => {
    if (window.navigator.appVersion.includes("Mac")) setOs("mac");
    if (window.navigator.appVersion.includes("Windows")) setOs("win");
  }, []);

  return (
    <StyledWrapper>
      <Stack inline spacing="XXSmall" align="center">
        <StyledIcon>{os === "mac" ? <>&#8984;</> : "Alt"}</StyledIcon>
        <span>+</span>
        <StyledIcon>&#107;</StyledIcon>
      </Stack>
    </StyledWrapper>
  );
};

export default KeyboardShortcuts;
