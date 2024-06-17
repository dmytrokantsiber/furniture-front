import styled from "styled-components";

export const ProductWrapper = styled.div`
  padding: 10px 0;
`;

export const Main = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  height: auto;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
