import styled from "styled-components";

export const CatalogWrapper = styled.div``;

export const Main = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 20px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Select = styled.select`
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 230px;
  height: 50px;
  font-size: 18px;
  padding: 0 10px; 
  cursor: pointer;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: 12px;
  border: 1px solid #dfdfdf;
  }

    
  @media (max-width:600px){
    margin-bottom: 10px;
    display:flex;

  }
`;
