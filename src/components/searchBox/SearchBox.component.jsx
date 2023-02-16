import React, { Component } from "react";
import "./searchBox.styles.css";

const SearchBox = ({ onSearchHandler, placeholder, className }) => (
  <input
    className={`component-searchBox ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchHandler}
  />
);

export default SearchBox;
