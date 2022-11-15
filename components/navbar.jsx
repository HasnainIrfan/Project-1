import React, { useState } from "react";

import { Box, Menu, MenuItem, Paper } from "@mui/material";
// Css
import css from "../styles/navbar.module.scss";

// Icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";

const Navbar = (props) => {
  const [showmenu, setshowmenu] = useState(false);
  const open = Boolean(showmenu);
  const handleClick = (event) => {
    setshowmenu(event.currentTarget);
  };
  const handleClose = () => {
    setshowmenu(null);
  };

  return (
    <div className={css.navbar}>
      <div className={css.navbar_wrapper}>
        <Box className={css.NavbarLeft}>
          <Box
            className={`${css.handburgerMenu} + ${
              props.Toggle ? css.aahandburgerActivea : ""
            }`}
            onClick={props.Toggle}
          >
            <Box className={css.bar}></Box>
          </Box>
          <Box className={css.search}>
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </Box>
        </Box>
        <Box className={css.NavbarRight}>
          <Box className={css.NavbarRight_items}>
            <NotificationsIcon className={css.icon} />
            <Box className={css.Counter}>1</Box>
          </Box>
          <Box className={css.NavbarRight_items}>
            <TextsmsRoundedIcon className={css.icon} />
            <Box className={css.Counter}>20</Box>
          </Box>
          <Box className={css.NavbarRight_items}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className={css.avatar}
              onClick={handleClick}
              alt=""
            />
            <Menu
              id="basic-menu"
              anchorEl={showmenu}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
