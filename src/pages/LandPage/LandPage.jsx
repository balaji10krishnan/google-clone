import Header from "../../component/Header/Header";
import logo from "../../assets/png/logo.png";
import classes from "./LandPage.module.css";
import { InputAdornment, TextField } from "@mui/material";
import { Mic, Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LandPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <section>
      <Header />
      <main className={classes["landing-main"]}>
        <div>
          <img src={logo} />
        </div>
        <TextField
          value={searchValue}
          onChange={(e) => {
            handleSearchValue(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/search", { state: { query: e.target.value } });
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
                maxWidth: "548px",
                width: "100%",
              },
            },
          }}
          sx={{
            maxWidth: "548px",
            width: "100%",
          }}
        />
        <div className={classes["btn-group"]}>
          <button
            className={classes["gray-btn"]}
            onClick={() => {
              navigate("/search", { state: { query: searchValue } });
            }}
          >
            Google Search
          </button>
          <button className={classes["gray-btn"]}>I'm Feeling Lucky</button>
        </div>
      </main>
    </section>
  );
};
export default LandPage;
