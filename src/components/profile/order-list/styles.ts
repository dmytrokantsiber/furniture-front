import styled from "styled-components";

export const OrderListWrapper = styled.div`
  width: 100%;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const List = styled.div`
  margin-top: 20px;
  width: 950px;
  padding-right: 20px;

  overflow: auto;

  @media (max-width: 1000px) {
    width: 100%;
    // box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.3);
    padding-right: 0px;
  }
`;
