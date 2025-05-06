import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 48px;
    font-weight: bold;
    margin: 0 0 10px 0;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 32px;
    }
  }
`;
