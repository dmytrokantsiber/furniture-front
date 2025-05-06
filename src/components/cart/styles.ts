import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 30px 0 60px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 36px;
`;

export const ClearCartButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  background-color: white;
  border: none;
  transition: all 0.2s ease 0s;
  &:hover {
    transform: translateY(3px);
  }
`;
