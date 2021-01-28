import { React } from "react";
import "./search-box.styles.css";

export const SearchBox = (props) => (
  <input
    className="search-box"
    placeholder="search monsters"
    type="search"
    onChange={props.onSearchChange}
  />
);
