import styled from "styled-components";

interface CheckboxStyleProps {
  $isChecked: boolean;
}

export const CheckboxWrapper = styled.div<CheckboxStyleProps>`
  width: 24px;
  height: 24px;
  border: ${(props) => {
    return props.$isChecked ? "1px solid var(--color-green)" : "1px solid #ccc";
  }};

  display: flex;
  align-items: center;
  justify-content: center;
`;
