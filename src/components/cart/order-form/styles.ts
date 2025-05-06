import styled from "styled-components";
import InputMask from "react-input-mask";

export const OrderFormWrapper = styled.div`
  padding: 30px 0 0 0;
`;

export const OrderForm = styled.form``;

export const Title = styled.h2`
  padding-bottom: 10px;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;

export const OrderFormItem = styled.div`
  padding-bottom: 30px;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Fields = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    column-gap: 10px;
    align-items: center;
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const InputWrapper = styled.div``;

export const Delivery = styled.div``;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  border-radius: 15px;
  border: 2px solid var(--color-lightgray);
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;
`;

export const PhoneInput = styled(InputMask)`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  border-radius: 15px;
  border: 2px solid var(--color-lightgray);
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;
`;

export const ErrorText = styled.p`
  color: red;
  padding-top: 5px;
  margin: 0;
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 580px) {
    flex-direction: column-reverse;
    row-gap: 10px;
    align-items: center;
  }
`;

export const SubmitButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 50px;
  border-radius: 20px;
  padding: 0 10px;
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

  @media (max-width: 580px) {
    width: 280px;
  }
`;

export const RadioButton = styled.div`
  padding-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 18px;
  > input[type="radio"] {
    margin-right: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }
  > input[type="radio"]:checked {
    background: url(https://res.cloudinary.com/ddvazhrn5/image/upload/v1710938490/check-mark-black-outline-svgrepo-com_1_s6aakz.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px 16px;
    border-color: var(--color-green);
  }
`;
