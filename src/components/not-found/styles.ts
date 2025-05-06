import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  padding-top: 30px;
  font-size: 30px;
  &:focus {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

export const NotFoundWrapper = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 52px;
  margin: 0;
  color: black;
`;

export const ErrorText = styled.p`
  font-size: 48px;
  color: red;
  padding-top: 30px;
`;
