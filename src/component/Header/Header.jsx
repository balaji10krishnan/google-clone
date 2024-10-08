import { AccountCircleRounded, AppsOutlined } from "@mui/icons-material";
import classes from "./Header.module.css";
import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <header className={classes["header"]}>
      <div className={classes["header-item"]}>
        <p>About</p>
        <p>Store</p>
      </div>
      <div className={classes["header-item"]}>
        <p className={classes["hide"]}>Gmail</p>
        <p className={classes["hide"]}>Images</p>
        <AppsOutlined className={classes["hide"]} />
        {/* <AccountCircleRounded /> */}
        <Avatar sx={{ width: 28, height: 28 }} />
      </div>
    </header>
  );
};
export default Header;
