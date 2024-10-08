import logo from "../../assets/png/logo.png";
import classes from "./SearchHeader.module.css";
import { InputAdornment, TextField } from "@mui/material";
import {
  Description,
  Image,
  LocalOffer,
  LocationOn,
  Mic,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
const SearchHeader = ({ query, setQuery = () => {} }) => {
  const [searchValue, setSearchValue] = useState(query);
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={classes["search-header"]}>
      <div>
        <img src={logo} />
      </div>
      <div className={classes["search-bar"]}>
        <TextField
          value={searchValue}
          onChange={(e) => {
            handleSearchValue(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchValue.trim() !== "") {
              setQuery(searchValue);
            }
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Mic />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "30px",
                maxWidth: "750px",
                width: "100%",
              },
            },
          }}
          sx={{
            maxWidth: "750px",
            width: "100%",
          }}
        />
        <div className={classes["menu-list"]}>
          <div className={classes["menu-item"]}>
            <Search />
            <p>All</p>
          </div>
          <div className={classes["menu-item"]}>
            <Description />
            <p>News</p>
          </div>
          <div className={classes["menu-item"]}>
            <Image />
            <p>Images</p>
          </div>
          <div className={classes["menu-item"]}>
            <LocationOn />
            <p>Maps</p>
          </div>
          <div className={classes["menu-item"]}>
            <LocalOffer />
            <p>Shopping</p>
          </div>
          <div className={classes["menu-item"]}>
            <MoreVert />
            <p>More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
