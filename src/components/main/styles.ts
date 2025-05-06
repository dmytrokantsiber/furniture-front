import styled from "styled-components";

export const MainComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 40px;
  padding: 30px 0;
  > a {
    text-decoration: none;
    color: var(--color-red);
  }
  font-size: 36px;
`;

export const CategoryElement = styled.div`
  width: 500px;
  height: 300px;
  background-size: cover;
  border-radius: 25px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  display: flex;
  justify-content: center;
  > p {
    letter-spacing: 2px;
    font-size: 32px;
    font-weight: 700;
    padding: 10px;
  }
  @media (max-width:550px){
    width:350px;
    height: 200px;
  }
    @media (max-width:400px){
    width:300px;
    height: 175px;
  }
`;

export const Text = styled.p``;

