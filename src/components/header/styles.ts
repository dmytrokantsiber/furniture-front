import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  > a {
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  text-align: center;

  @media (max-width: 350px) {
    margin-right: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: auto;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    padding: 15px;
  }
`;
