import styled from "styled-components";

export const Footer = styled.div`
  background-color: var(--color-darkgray);
  color: #f2f3f4;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  align-items: center;
  min-height: 80px;
  height: 215px;
  @media (max-width: 750px) {
    height: auto;
    flex-direction: column;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  @media (max-width: 750px) {
    padding-top: 20px;
    font-size: 30px;
  }
`;

export const Link = styled.a`
  height: 50px;
`;

export const Socials = styled.div`
  display: flex;
  > * {
    padding-right: 20px;
  }
  @media (max-width: 750px) {
    padding-top: 20px;
    justify-content: center;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 380px;
  @media (max-width: 750px) {
    width: auto;
  }
  > a {
    color: white;
    margin: 5px 0 5px 0;
    text-decoration: none;
    font-size: 18px;
    @media (max-width: 750px) {
      font-size: 14px;
    }
    &:visited {
      color: black;
    }
  }
  > p {
    margin: 5px 0 5px 0;
    font-size: 18px;
    @media (max-width: 750px) {
      font-size: 14px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
  > p {
    font-size: 16px;
    color: white;
    cursor: pointer;
    padding: 5px 0;

    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 10px;
    }
  }
`;
