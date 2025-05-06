import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Styles from "./styles";
import Button from "../common/button/button.component";
import SearchBar from "./searchbar/searchbar.component";
import { useAppSelector } from "../../hooks/redux-hooks";
import LangSwitcher from "./lang-switcher/lang-switcher.component";
import BaseContainer from "../common/base-container/base-container.wrapper";

const Header = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    setShowDropdown(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Styles.Header>
      <BaseContainer>
        <Styles.HeaderWrapper>
          <Link to="/">
            <Styles.Logo>Furniture App 🛋️</Styles.Logo>
          </Link>
          {windowWidth > 750 ? <SearchBar /> : null}
          {windowWidth > 400 ? <LangSwitcher /> : null}
          <Styles.Buttons>
            {windowWidth > 1100 ? (
              <>
                <Link to={"/cart"}>
                  <Button type="cart" styles={{ width: 140, height: 50 }} />
                </Link>
                {isAuth ? (
                  <Link to={"/profile"}>
                    <Button
                      type="profile"
                      styles={{ width: 140, height: 50 }}
                    />
                  </Link>
                ) : (
                  <>
                    <Link to={"/registration"}>
                      <Button
                        type="signup"
                        styles={{ width: 140, height: 50 }}
                      />
                    </Link>
                    <Link to={"/login"}>
                      <Button
                        type="signin"
                        styles={{ width: 140, height: 50 }}
                      />
                    </Link>
                  </>
                )}
              </>
            ) : (
              <div ref={dropdownRef}>
                <Button
                  type="dropdown"
                  styles={{ width: 140, height: 50 }}
                  handleClick={toggleDropdown}
                />
                {showDropdown && (
                  <Styles.Dropdown>
                    {windowWidth < 750 ? <SearchBar /> : null}
                    <Link to={"/cart"}>
                      <Button type="cart" styles={{ width: 140, height: 50 }} />
                    </Link>
                    {isAuth ? (
                      <Link to={"/profile"}>
                        <Button
                          type="profile"
                          styles={{ width: 140, height: 50 }}
                        />
                      </Link>
                    ) : (
                      <>
                        <Link to={"/registration"}>
                          <Button
                            type="signup"
                            styles={{ width: 140, height: 50 }}
                          />
                        </Link>
                        <Link to={"/login"}>
                          <Button
                            type="signin"
                            styles={{ width: 140, height: 50 }}
                          />
                        </Link>
                      </>
                    )}
                    {windowWidth < 400 ? <LangSwitcher /> : null}
                  </Styles.Dropdown>
                )}
              </div>
            )}
          </Styles.Buttons>
        </Styles.HeaderWrapper>
      </BaseContainer>
    </Styles.Header>
  );
};

export default Header;
