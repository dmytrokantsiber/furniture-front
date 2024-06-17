import styled from "styled-components";

export const SingleOrderWrapper = styled.div`
  margin: 10px 0 32px;
`;

export const MiniOrder = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 500;

  > span {
    color: var(--color-green);
  }
`;

export const Date = styled.div`
  font-size: 20px;
  font-weight: 500;

  margin-bottom: 20px;
  > span {
    color: var(--color-green);
  }
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 0;
  margin: 10px 0;
  cursor: pointer;
  text-decoration: underline;
`;

export const FullOrder = styled.div``;

export const ProductMiniCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 780px) {
    margin-bottom: 25px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const AdditionalInfo = styled.div``;

export const Amount = styled.div`
  font-size: 20px;
  font-weight: 500;
  > span {
    color: var(--color-green);
  }
`;
