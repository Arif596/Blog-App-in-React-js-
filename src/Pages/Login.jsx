import React from "react";
import {
  Avatar,
  Button,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
export default function Login() {
  const paperStyle = {
    padding: 40,
    margin: "auto",
    width: "350px",
    height: "65vh",
    marginBottom: 6,
    marginTop: 40,
  };
  const buttonStyle = {
    marginLeft: "15px",
    width: "100%",
    fontSize: "10px",
    marginTop: 1,
  };
  return (
    <div>
      <Grid Container>
        <Paper style={paperStyle} elevation={10}>
          <Grid align="center">
            <h5>Login</h5>
            <Avatar style={{ background: "green" }}>
              <LockOpenIcon />
            </Avatar>
            <br />
          </Grid>
          <Grid Container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="filled"
                placeholder="Enter Email"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField
                label="Password"
                variant="filled"
                placeholder="Enter Password"
                required
                fullWidth
              />
            </Grid>
            <FormControlLabel
              required
              control={<Checkbox sx={{ ml: 2 }} />}
              label="Remember me"
            />
            <Button variant="contained" sx={buttonStyle}>
              Sign In
            </Button>
            <Typography sx={{ ml: 2, mt: 1 }}>
              <Link href="#">Forget Password?</Link>
            </Typography>
            <Typography sx={{ ml: 2 }}>
              Do you have an account
              <Link href="/register">Sign Up?</Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
