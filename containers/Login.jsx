import React from "react";

// css
import css from "../styles/login.module.scss";

// Images
import LoginLogo from "../assets/images/login-img.gif";

// React Links
import { Link } from "react-router-dom";

// Material Components
import { Checkbox, FormControlLabel } from "@mui/material";

// Material Icons
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Components
import SwipeBtn from "../components/SwipeBtn";

const Login = () => {
  return (
    <>
      <div className={css.login}>
        {/* <SwipeBtn /> */}

        {/* Login Top */}

        <div className={css.login_top}>
          <h1>let's get started now !</h1>
          <h2> Login as Employee</h2>
        </div>

        {/* Login Bottom */}

        <div className={css.login_bottom}>
          <div className={css.login_main}>
            <div className={css.login_logo}>
              <img src={LoginLogo} alt="" />
            </div>
            <form>
              <div className={css.login_items}>
                <span>Email:</span>
                <div className={css.login_input}>
                  <div className={css.loginicon}>
                    <MailOutlineIcon />
                  </div>
                  <input type="text" placeholder="Your Email *" />
                </div>
              </div>

              <div className={css.login_items}>
                <span>Password:</span>
                <div className={css.login_input}>
                  <div className={css.loginicon}>
                    <LockOpenIcon />
                  </div>
                  <input type="password" placeholder="Password *" />
                </div>
              </div>

              {/* Login Footer */}

              <div className={css.login_btn}>
                <button>Login</button>
              </div>

              <div className={css.login_footer}>
                <FormControlLabel
                  className={css.login_footerIcon}
                  control={
                    <Checkbox
                      icon={<FavoriteBorderIcon />}
                      checkedIcon={<FavoriteIcon />}
                    />
                  }
                  label="Remember me"
                />
                <Link href="#" underline="none" variant="subtitle2">
                  {"forget Password?"}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
