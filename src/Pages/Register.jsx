import { Grid, Paper, Avatar, TextField,MenuItem,InputLabel,Button } from "@mui/material";
import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Select from '@mui/material/Select';

export default function Register() {
  const PaperStyle = {
    width: 380,
    height: "80vh",
    padding: 20,
   marginTop:'20px',
    margin: "auto",
  };

  return (
    <div>
      <Grid container>
        <Paper elevation={10} style={PaperStyle}>
          <Grid align="center">
            <h5>Register Form</h5>

            <Avatar style={{ background: "green", mt: 2 }}>
              <LockOpenIcon />
            </Avatar>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6}>
              <TextField
                label="FName"
                placeholder="Enter fname"
                required
                fullWidth
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label="LName" 
              variant="filled"placeholder="Enter lname" required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="email"
                required
                fullWidth
                placeholder="enter Email"
                variant="filled" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                placeholder="Enter Phone"
                required variant="filled"
                fullWidth
              />
              </Grid>
            <Grid item xs={6}>
              <TextField label="password" variant="filled" placeholder="enter password" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CPassword"
                placeholder="Enter CPassword"
                required variant="filled"
              />

            </Grid>
            <Grid item xs={6}>
            <InputLabel>Select City</InputLabel>
            <Select sx={{width:200}}
            label="City" placeholder="Slect City"
            variant="filled">
                <MenuItem value={10}>Rawalpindi</MenuItem>
                <MenuItem value={10}>Islmabad</MenuItem>
                <MenuItem value={10}>karachi</MenuItem>
                <MenuItem value={10}>Lahore</MenuItem>
                <MenuItem value={10}>Dera Gahzi khan</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={6}>
                <InputLabel>Slect Age</InputLabel>
                <Select sx={{ml:2,width:150}} variant="filled">
                    <MenuItem>20</MenuItem>
                    <MenuItem>28</MenuItem>
                    <MenuItem>18</MenuItem>
                    <MenuItem>26</MenuItem>
                </Select>
            </Grid>
            <Button  variant="contained"sx={{ml:20,mt:3}}>Submit</Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
