import styled from "styled-components";

export const SingleCartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 780px) {
    padding-top: 15px;
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: space-around;
  width: 180px;
  align-items: center;
`;

export const AmountText = styled.p`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 30px;
`;

export const AmountButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: 2px solid var(--color-green);
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  color: var(--color-green);
  line-height: 0px;
  font-size: 32px;

  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
    font-size: 16px;
  }
`;

export const Price = styled.p`
  display: flex;
  justify-content: center;
  min-width: 180px;
  font-size: 24px;
  font-weight: bold;
  color: var(--color-green);
  margin: 0 10px;
  @media (max-width: 500px) {
    font-size: 18px;
    text-align: center;
    min-width: 100px;
  }
`;

export const RemoveButton = styled(AmountButton)`
  border: 2px solid var(--color-red);
  color: var(--color-red);
  margin-left: 10px;
`;
