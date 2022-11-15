import React from "react";

// css
import css from "../styles/registration.module.scss";

// Material Components
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// Components
import SwipeBtn from "../components/SwipeBtn";

const Signup = () => {
  return (
    <>
      {/* <SwipeBtn /> */}
      <Grid container className={css.signup}>
        <Grid item className={css.signup_left}>
          <h1>Welcome!</h1>
          <h4>Enter your details and start journey with us</h4>
        </Grid>
        <Grid item className={css.signup_right}>
          <div className={css.signup_top}>
            <h2>Apply as Employee</h2>
          </div>
          <div className={css.signup_bottom}>
            <Box
              marginBottom={3}
              display="flex"
              alignItems="center"
              sx={{
                flexDirection: {
                  xs: "column", // 0
                  sm: "row", // 600
                },
              }}
              gap="20px"
            >
              <TextField
                size="small"
                label="First Name"
                sx={{ backgroundColor: "#fff " }}
                variant="filled"
                fullWidth
              />
              <TextField
                size="small"
                label="Last Name"
                variant="filled"
                fullWidth
              />
            </Box>
            <Box marginBottom={3}>
              <TextField
                size="small"
                label="Email"
                variant="filled"
                fullWidth
              />
            </Box>
            <Box
              marginBottom={3}
              display="flex"
              alignItems="center"
              gap="20px"
              sx={{
                flexDirection: {
                  xs: "column", // 0
                  sm: "row", // 600
                },
              }}
            >
              <TextField
                size="small"
                label="Password"
                variant="filled"
                fullWidth
              />
              <TextField
                size="small"
                label="Confrim Password"
                variant="filled"
                fullWidth
              />
            </Box>
            <Box marginBottom={3}>
              <TextField
                size="small"
                label="Phone"
                variant="filled"
                fullWidth
              />
            </Box>
            <Box
              marginBottom={3}
              display="flex"
              gap="20px"
              sx={{
                flexDirection: {
                  xs: "column", // 0
                  sm: "row", // 600
                },
              }}
            >
              <TextField
                size="small"
                label="No. of Employes"
                variant="filled"
                fullWidth
              />
              <FormControl variant="filled" fullWidth size="small">
                <InputLabel>Your Role/Designation</InputLabel>
                <Select>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              marginTop={3}
              marginBottom={1}
            >
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  borderRadius: "16px",
                  backgroundColor: "#283686",
                  width: "160px",
                  textTransform: "capitalize",
                  fontSize: "0.9rem",
                }}
              >
                Register
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
