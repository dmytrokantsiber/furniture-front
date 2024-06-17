import { KeyboardEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import * as Styles from "./styles";
import { useTranslations } from "../../../hooks/useTranslations";
import { ReactComponent as SearchSVG } from "../../../assets/icons/search.svg";

const SearchBar = () => {
  const { t } = useTranslations();
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = (): void => {
    if (searchValue.length > 0) {
      navigate(`/search?search=${searchValue}&page=1`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      navigate(`/search?search=${searchValue}&page=1`);
    }
  };

  return (
    <Styles.SearchBarWrapper>
      <Styles.Input
        placeholder={t["main_page.search-placeholder"]}
        value={searchValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Styles.Button onClick={handleClick}>
        <SearchSVG />
      </Styles.Button>
    </Styles.SearchBarWrapper>
  );
};

export default SearchBar;
