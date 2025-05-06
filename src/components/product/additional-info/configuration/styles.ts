import styled from "styled-components";

export const ProductConfigurationWrapper = styled.div`
  display: flex;
  column-gap: 50px;

  @media (max-width: 650px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const Item = styled.div`
  padding-bottom: 10px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  > input[type="radio"] {
    margin-right: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  }

  > input[type="radio"]:checked {
    background: url(https://res.cloudinary.com/ddvazhrn5/image/upload/v1710938490/check-mark-black-outline-svgrepo-com_1_s6aakz.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px 16px;
    border-color: var(--color-green);
  }
`;

export const Title = styled.h2`
  padding-bottom: 20px;
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 18px;
`;
