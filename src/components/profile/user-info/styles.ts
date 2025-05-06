import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  @media (max-width: 1300px) {
    align-items: center;
  }
`;

export const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
`;

export const InputWrapper = styled.div`
  // @media (max-width: 350px) {
  //   margin-left: 15px;
  // }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-heigth: 0;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  margin: 10px 0;
  border-radius: 15px;
  border: 2px solid var(--color-lightgray);
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;
  @media (max-width: 350px) {
    width: 290px;
  }
`;

export const ErrorText = styled.p`
  color: red;
  padding-bottom: 10px;
  margin: 0;
  width: 100%;
`;

export const SubmitButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin: 20px 0;
  background-color: var(--color-green);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 20px;
  &:hover {
    background-color: var(--color-green-hover);
  }
`;

export const Logout = styled.div`
  margin: 0 0 30px 0;
`;
