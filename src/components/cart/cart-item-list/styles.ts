import styled from "styled-components";

export const CartItemListWrapper = styled.div``;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px;
  @media (max-width: 700px) {
    flex-direction: column;
    row-gap: 15px;
    padding: 20px 0 20px;
  }
`;

export const ItemsAmount = styled.div`
  display: flex;
  color: black;
  font-weight: 500;
  font-size: 24px;
`;

export const TotalPrice = styled.div`
  color: black;
  font-weight: 500;
  font-size: 24px;
`;
