import React from "react";
import styled from "styled-components";
import { ColorTypes } from "../../../types/sharedTypes";
interface ButtonProps {
  color: ColorTypes;
  title: string;
  buttonStyle?: React.CSSProperties;
  withIcon: boolean;
  svgIcon?: React.ReactNode;
}
export const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      buttonStyle={props.buttonStyle}
      color={props.color}
      withIcon={props.withIcon}
    >
      <a href="#">{props.title}</a>
      {props.svgIcon}
    </StyledButton>
  );
};
type StyledButtonProps = Omit<ButtonProps, "title" | "svgIcon">;
const StyledButton = styled.div<StyledButtonProps>`
  display: flex;
  a {
    transition: var(--ds-transition);

    ${(props) =>
      props.color === "primary"
        ? { color: "var(--ds-button-color-primary)" }
        : props.color === "tertiary"
        ? { color: "var(--ds-button-color-tertiary)" }
        : { color: "var(--ds-button-color-secondary)" }}
    /* ${(props) =>
      props.color === "tertiary" && {
        color: "var(--ds-button-color-tertiary)",
      }} */
    margin: 0 var(--ds-spacing);
    ${(props) => (props.withIcon ? { paddingRight: ".75rem" } : "")}
  }
  ${(props) => props.buttonStyle && { ...props.buttonStyle }};
  svg {
    transition: var(--ds-transition);

    ${(props) =>
      props.withIcon
        ? {
            fill:
              props.color === "primary"
                ? "var(--ds-button-color-primary)"
                : props.color === "secondary"
                ? "var(--ds-button-color-secondary)"
                : "var(--ds-button-color-tertiary)",
          }
        : ""}
  }
  &:hover > a {
    ${(props) =>
      props.color === "primary"
        ? { color: "var(--ds-button-color-secondary)" }
        : { color: "var(--ds-button-color-primary)" }}
    ${(props) =>
      props.color === "tertiary" && { color: "var(--ds-button-color-primary)" }}
    transform: scale(1.15);
  }
  &:hover > svg {
    ${(props) =>
      props.color === "primary"
        ? { fill: "var(--ds-button-color-secondary)" }
        : { fill: "var(--ds-button-color-primary)" }}
    transform: scale(1.15);
  }
  @media (max-width: 991px) {
    align-self: flex-start;
  }
`;
