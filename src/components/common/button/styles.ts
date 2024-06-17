import styled from "styled-components";

import { StylesProps } from "./button.component";

interface ButtonStyleProps {
  $type: string;
  $styles: StylesProps;
}

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => {
    return `${props.$styles.width}px`;
  }};
  height: ${(props) => {
    return `${props.$styles.height}px`;
  }};
  border-radius: 20px;
  background-color: ${(props) => {
    switch (props.$type) {
      case "signup":
        return "var(--color-darkgray)";
      case "signin":
        return "var(--color-lightgray)";
      case "logout":
        return "var(--color-lightgray)";
      case "profile":
        return "#3c87d6";
      case "purchase":
        return "var(--color-green)";
      case "cart":
        return "var(--color-green)";
      case "orders":
        return "var(--color-green)";
      case "backToMain":
        return "var(--color-darkgray)";
      case "dropdown":
        return "var(--color-green)";
      default:
        return "var(--color-green)";
    }
  }};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  > p {
    color: white;
    font-size: 20px;
  }

  &:hover {
    background-color: ${(props) => {
      switch (props.$type) {
        case "signup":
          return "var(--color-darkgray-hover)";
        case "signin":
          return "var(--color-lightgray-hover)";
        case "logout":
          return "var(--color-lightgray-hover)";
        case "profile":
          return "#5398e0";
        case "purchase":
          return "var(--color-green-hover)";
        case "cart":
          return "var(--color-green-hover)";
        case "orders":
          return "var(--color-green-hover)";
        case "backToMain":
          return "var(--color-darkgray-hover)";
        case "dropdown":
          return "var(--color-green)";
        default:
          break;
      }
    }};
  }
`;

export const Count = styled.div`
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: var(--color-red);
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
