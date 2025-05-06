import styled from "styled-components";

interface LangSwitcherStyleProps {
  $isActive: boolean;
}

export const LangSwitcher = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const Option = styled.p<LangSwitcherStyleProps>`
  cursor: pointer;
  font-size: 20px;
  margin: 2px;
  color: ${(props) => {
    if (props.$isActive) {
      return "var(--color-green)";
    }
    return "black";
  }};
  &:hover {
    color: var(--color-green);
  }
`;
