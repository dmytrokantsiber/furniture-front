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

export const ProductsWrapper = styled.div`
  width: 100%;
  padding: 30px 0 60px 30px;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const List = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: space-between;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

export const NotFound = styled.div`
  width: 100%;
`;
