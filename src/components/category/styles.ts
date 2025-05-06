import styled from "styled-components";

export const CategoryWrapper = styled.div`
  padding-top: 30px;
`;

export const Links = styled.div`
  display: flex;
  overflow-x: auto;
  height: 50px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Text = styled.h2`
  font-size: 24px;
  line-height: 0;
  padding-top: 20px;
  > a {
    text-decoration: none;
    color: black;
    white-space: nowrap;
    padding: 0 10px;
    &:hover {
      color: var(--color-green-hover);
    }
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
