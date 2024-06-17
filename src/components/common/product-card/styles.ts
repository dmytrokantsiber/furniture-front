import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: auto;
  padding: 20px 0;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  > img {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  > p {
    color: black;
  }
`;

export const Image = styled.img``;

export const Title = styled.p`
  text-align: center;
  padding: 10px 5px;
  font-size: 18px;
`;

export const Price = styled.p`
  padding: 10px 5px 20px;
  font-size: 24px;
  font-weight: bold;
`;
