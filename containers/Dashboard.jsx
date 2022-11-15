import React from "react";

// Css
import css from "../styles/dashboard.module.scss";

// Material Icons
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

const EmployessData = [
  {
    icon: <GradingOutlinedIcon />,
    num: "120",
    title: "Projects",
  },
  {
    icon: <TrackChangesOutlinedIcon />,
    num: "42",
    title: "Clints",
  },

  {
    icon: <FormatListBulletedOutlinedIcon />,
    num: "36",
    title: "Tasks",
  },

  {
    icon: <Diversity3OutlinedIcon />,
    num: "423",
    title: "Employess",
  },
];

const EmployessAvailability = [
  {
    icon: <GradingOutlinedIcon />,
    title: "Attendence",
    num: "400",
  },
  {
    icon: <TrackChangesOutlinedIcon />,
    title: "Late Coming",
    num: "17",
  },

  {
    icon: <FormatListBulletedOutlinedIcon />,
    title: "Absent",
    num: "06",
  },

  {
    icon: <Diversity3OutlinedIcon />,
    title: "Leave Apply",
    num: "14",
  },
];

const progessbar = [
  {
    title: "Today Leave",
    info: "4/65",
    bg: "darkorange",
    width: "40%",
  },
  {
    title: "Pending Invoice",
    info: "15/92",
    bg: "yellow",
    width: "45%",
  },
  {
    title: "Complete Projects",
    info: "85/112",
    bg: "green",
    width: "80%",
  },
  {
    title: "Open Tickets",
    info: "190/212",
    bg: "red",
    width: "70%",
  },
  {
    title: "Close Tickets",
    info: "22/212",
    bg: "#00a1fb",
    width: "20%",
  },
];

const RadioBtn = [
  {
    title: "Pending Invoice",
    persentage: "30%",
    num: "166",
    bg: "purple",
  },
  {
    title: "Pending Invoice",
    persentage: "22%",
    num: "115",
    bg: "yellow",
  },
  {
    title: "Pending Invoice",
    persentage: "24%",
    num: "31",
    bg: "green",
  },
  {
    title: "Pending Invoice",
    persentage: "21%",
    num: "47",
    bg: "red",
  },
  {
    title: "Pending Invoice",
    persentage: "10%",
    num: "5",
    bg: "#00a1fb",
  },
];

const bar = [
  {
    persentage: "30%",
    bg: "purple",
  },
  {
    persentage: "22%",
    bg: "yellow",
  },
  {
    persentage: "24%",
    bg: "green",
  },
  {
    persentage: "21%",
    bg: "red",
  },
  {
    persentage: "10%",
    bg: "#00a1fb",
  },
];
const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <div className={css.dashboard_wrapper}>
        <div className={css.employes}>
          <div className={css.employes_left}></div>
          <div className={css.employes_right}>
            <div className={css.employes_right_logo}>
              <TaskOutlinedIcon />
            </div>
            <h3>360</h3>
            <h5>Applications</h5>
          </div>
        </div>
        <div className={css.employes_boxs}>
          {EmployessData.map((items, index) => {
            return (
              <>
                <div className={css.employes_box} key={index}>
                  <div className={css.employes_box_left}>{items.icon}</div>
                  <div className={css.employes_box_right}>
                    <h4>{items.num}</h4>
                    <h5>{items.title}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className={css.employes_detail}>
          <div className={css.employes_detailLeft}>
            <div className={css.employes_detailLeft_Wrapper}>
              <div className={css.detailLeft_heading}>
                <h3>Employees Avaigitlabity</h3>
              </div>
              <div className={css.detailLeft_boxs}>
                {EmployessAvailability.map((items, index) => {
                  return (
                    <>
                      <div className={css.detailLeft_box} key={index}>
                        <div className={css.detailLeft_logo}>{items.icon}</div>
                        <div>
                          <h5>{items.title}</h5>
                          <h3>{items.num}</h3>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={css.employes_detailRight}></div>
        </div>

        <div className={css.statistics}>
          <div className={css.statistics_left}>
            <div className={css.statistics_Wrapper}>
              <div className={css.statistics_heading}>
                <h3>Statistics</h3>
              </div>
              <div className={css.statistics_progressbars}>
                {progessbar.map((items, i) => {
                  return (
                    <>
                      <div className={css.statistics_progressbar}>
                        <div className={css.statistics_progressbar_details}>
                          <span>{items.title}</span>
                          <span>{items.info}</span>
                        </div>
                        <div className={css.progessbar}>
                          <div className={css.bars}>
                            <div
                              className={css.bar}
                              style={{
                                backgroundColor: items.bg,
                                width: items.width,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={css.statistics_right}>
            <div className={css.statistics_Wrapper}>
              <div className={css.statistics_heading}>
                <h3>Task Statistics</h3>
              </div>
              <div className={css.taskBar}>
                <div className={css.taskbar_top}>
                  <div className={css.taskbar_top_left}>
                    <span>Total Tasks</span>
                    <span>385</span>
                  </div>
                  <div className={css.taskbar_top_right}>
                    <span>Overdue Tasks</span>
                    <span>19</span>
                  </div>
                </div>
                <div className={css.taskbar_center}>
                  {RadioBtn.map((items, i) => {
                    return (
                      <>
                        <div key={i}
                          style={{
                            width: items.persentage,
                            backgroundColor: items.bg,
                          }}
                        >
                          {items.persentage}
                        </div>
                      </>
                    );
                  })}
                </div>
                {RadioBtn.map((items, i) => {
                  return (
                    <>
                      <div className={css.taskbar_bottom} key={i}>
                        <div className={css.radio}>
                          <div
                            className={css.radio_btn}
                            style={{ border: `2px solid ${items.bg}` }}
                          >
                            <div
                              className={css.btn}
                              style={{ backgroundColor: items.bg }}
                            ></div>
                          </div>
                          <span>{items.title}</span>
                        </div>
                        <span>{items.num}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
