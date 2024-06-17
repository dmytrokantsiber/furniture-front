import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbsWrapper = styled.div`
  padding: 20px 0;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  color: #919191;
  letter-spacing: 1px;
  &:hover {
    color: var(--color-green-hover);
  }
`;
