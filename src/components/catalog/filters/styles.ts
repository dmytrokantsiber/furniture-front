import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  width: 30px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid red;
  transition: background-color 0.3s;
  &:hover {
    background-color: red;
    > p {
      color: white;
    }
  }
  > p {
    line-height: 0;
    color: red;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    margin: 10px 0 0 20px;
  }
`;

export const InputsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    font-size: 18px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  width: 110px;
  border-radius: 25px;
  border: 1px solid black;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

export const SliderWrapper = styled.div`
  @media (max-width: 600px) {
    width: 280px;
    display: flex;
    justify-content: center;
    padding-left: 15px;
  }
`;

export const FilterButton = styled.div`
  font-size: 18px;
  padding: 10px;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  background-color: var(--color-green);
  transition: background-color 0.15s;
  &:hover {
    background-color: var(--color-green-hover);
  }
`;

export const Title = styled.h2`
  padding: 10px 0 10px 10px;
`;

export const SingleInputWrapper = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.15s;
  > * {
    cursor: pointer;
  }
  &:hover {
    background-color: #e5e9eb;
  }
  padding: 7px 0 7px 7px;
`;

export const Checkbox = styled.input`
  display: flex;
  margin-left: 10px;
  accent-color: var(--color-green-hover);
`;
export const Label = styled.span`
  display: flex;
  padding-left: 10px;
`;

export const InputCount = styled.p`
  color: grey;
  padding-left: 12px;
`;

export const ProductsCount = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

export const Test = styled.div`
  display: block;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
