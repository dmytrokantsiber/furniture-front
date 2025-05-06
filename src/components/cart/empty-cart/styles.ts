import styled from "styled-components";

export const EmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 100px;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    row-gap: 20px;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 10px;
  text-align: center;
`;

export const Text = styled.p`
  padding: 3px 0;
  font-size: 18px;
  text-align: center;
`;

export const Image = styled.div`
  padding: 50px 0;
`;
