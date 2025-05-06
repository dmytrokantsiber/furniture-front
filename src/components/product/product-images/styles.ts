import styled from "styled-components";

export const ProductImagesWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  width: 80%;
  cursor: pointer;
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-lightgray);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const SecondaryImage = styled.img`
  width: 100px;
  padding-right: 5px;
  cursor: pointer;
`;
