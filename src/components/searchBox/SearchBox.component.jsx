import React, { Component } from "react";
import "./searchBox.styles.css";

const SearchBox = (props) => {
  return (
    <input
      className={`component-searchBox ${props.className}`}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onSearchHandler}
    />
  );
};

export default SearchBox;
