import styled from "styled-components";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

export const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  margin-top: 20px;
  border-radius: 15px;
  border: 2px solid var(--color-lightgray);
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;
  @media (max-width: 550px) {
    width: 90vw;
    font-size: 14px;
  }
`;

export const PhoneInput = styled(InputMask)`
  width: 500px;
  height: 50px;
  margin-top: 20px;
  border-radius: 15px;
  border: 2px solid var(--color-lightgray);
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;

  @media (max-width: 550px) {
    width: 90vw;
    font-size: 14px;
  }
`;

export const Button = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid var(--color-lightgray);
  background-color: var(--color-lightgray);
  color: white;
  padding: 10px;
  margin-top: 20px;
  font-size: 22px;
  cursor: pointer;
  box-sizing: border-box;
  @media (max-width: 550px) {
    width: 90vw;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  text-align: center;
`;

export const Description = styled.p`
  margin: 30px 0;
  text-align: center;
`;

export const RedirectLink = styled(Link)`
  margin: 30px 0;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

export const ErrorText = styled.p`
  color: red;
  padding-top: 5px;
  margin: 0;
  width: 100%;
`;
