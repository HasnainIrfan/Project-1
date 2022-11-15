import React from "react";
import { useState } from "react";

// Csss
import css from "../styles/sidebar.module.scss";

// React Links
import { NavLink } from "react-router-dom";

// Images
import TaskLogo from "../assets/images/tasklogo.png";

// Icons
import FolderIcon from "@mui/icons-material/Folder";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import PaidIcon from "@mui/icons-material/Paid";
import PolicyIcon from "@mui/icons-material/Policy";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import Navbar from "./navbar";
import Dashboard from "../containers/Dashboard";


const Routes = [
  {
    link: "/",
    label: "Dashboard",
    Icon: <SpeedIcon />,
  },
  {
    link: "/Projects",
    label: "Projects",
    Icon: <FolderIcon />,
  },
  {
    link: "/Projects",
    label: "Tickets",
    Icon: <AirplaneTicketOutlinedIcon />,
  },
  {
    link: "/Projects",
    label: "OurClints",
    Icon: <MonetizationOnIcon />,
  },
  {
    link: "/Projects",
    label: "Employess",
    Icon: <Groups2OutlinedIcon />,
  },
  {
    link: "/Projects",
    label: "Sales",
    Icon: <AssessmentOutlinedIcon />,
  },
  {
    link: "/Projects",
    label: "Accounts",
    Icon: <SwitchAccountIcon />,
  },
  {
    link: "/Projects",
    label: "Payroll",
    Icon: <PaidIcon />,
  },
  {
    link: "/Projects",
    label: "Policies",
    Icon: <PolicyIcon />,
  },
  {
    link: "/Projects",
    label: "Reports",
    Icon: <ReportOutlinedIcon />,
  },
];

const NewSidebar = () => {
  const [toggle, settoggle] = useState(false);
  const Toggle = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className={css.main_container}>
        <div className={`${css.sidebar} + ${toggle ? css.sidebarActive : ""}`}>
          <div className={css.sidebar_wrapper}>
            <div className={css.sidebartop}>
              <div className={css.sidebarLogo}>
                <img src={TaskLogo} alt="" />
              </div>
              <span>My-Task</span>
            </div>
            <div className={css.sidebarbottom}>
              {Routes.map((items, index) => {
                return (
                  <>
                    <ul className={css.sidebarmenu} key={index}>
                      <li>
                        <NavLink>
                          <span className={css.sidebarIcon}>{items.Icon}</span>
                          <span className={css.sidebarText}>{items.label}</span>
                        </NavLink>
                        <ArrowDropDownIcon className={css.dropdownIcon} />
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`${css.main} + ${toggle ? css.mainActive : ""}`}>
          <Navbar Toggle={Toggle} />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default NewSidebar;
