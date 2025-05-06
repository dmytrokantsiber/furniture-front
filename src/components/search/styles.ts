import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiPaginationItem-root": {
      backgroundColor: "var(--color-green)",
      borderRadius: "8px",
      width: "50px",
      fontSize: "18px",
      color: "white",
      margin: "0 4px",
      "&:hover": {
        backgroundColor: "#A5D6A7",
      },
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "gray",
      "&:hover": {
        backgroundColor: "#A5D6A7",
      },
    },
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
    "& .MuiTypography-caption": {
      fontSize: "1.2rem",
      color: "#455A64",
    },
  },
}));

export const SearchComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  max-width: 50%;
  overflow-wrap: break-word;
  margin-right: 10px;
  @media (max-width: 550px) {
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ProductCardsList = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: space-between;
`;

export const Pagination = styled.div`
  padding: 40px 0 60px;
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
`;
