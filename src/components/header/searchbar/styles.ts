import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 25px;
  border: 1px solid black;
`;

export const Button = styled.div`
  background: white;
  border-radius: 50px;
  border: none;
  aspect-ratio: 1;
  height: 80%;
  position: absolute;
  top: 15%;
  right: 5px;
  cursor: pointer;
  color: black;
  &:hover {
    opacity: 0.8;
  }
`;
