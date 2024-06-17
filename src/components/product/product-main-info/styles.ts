import styled from "styled-components";

export const ProductMainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const ProductCard = styled.div`
  margin-top: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  border-radius: 25px;
`;

export const Name = styled.h2`
  font-size: 32px;
  padding-bottom: 20px;
`;

export const Code = styled.p`
  font-size: 18px;
  color: grey;
  padding-bottom: 20px;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const FilterInfo = styled.div`
  padding: 15px 0;
`;

export const AdditionalInfo = styled.div`
  padding-top: 15px;
`;

export const InfoField = styled.p`
  padding: 8px 0;
  font-size: 18px;
`;

export const Purchase = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 440px) {
    flex-direction: column-reverse;
    row-gap: 15px;
  }
`;

export const AmountInput = styled.input`
  padding: 0 5px;
  font-size: 24px;
  height: 40px;
  width: 100px;
`;

export const AmountLabel = styled.label`
  padding: 0 20px;
  font-size: 18px;
`;

export const Warning = styled.p`
  padding-top: 40px;
  color: red;
`;

export const InfoCards = styled.div`
  display: flex;
  padding-top: 40px;
  column-gap: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    row-gap: 25px;
    align-items: center;
  }
`;

export const InfoSingleCard = styled.div`
  display: flex;
  width: 300px;
`;

export const InfoSingleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoSingleImage = styled.div`
  padding-right: 10px;
`;

export const PriceDropdown = styled.div``;
