import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
`;
