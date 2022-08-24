import React, { useState } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Box, Typography, Grid, Paper, Button, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
const Form = () => {
  const [registerUser, setRegisterUser] = useState();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setRegisterUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <Box>
      <Paper sx={{ padding: "3rem", width: "50vw", marginTop: "1rem" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography marginY="20px">Sign Up Or Register</Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="text"
              sx={{ marginTop: "30px" }}
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <TextField
              label="Passwod"
              variant="outlined"
              fullWidth
              type="password"
              sx={{ marginTop: "30px" }}
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ marginTop: "30px" }}
              onClick={register}
            >
              Create User
            </Button>
            <Typography> user created is: {registerUser?.email}</Typography>
          </Grid>
          <Divider sx={{ width: "100%" }} variant="thin">
            ................
          </Divider>

          <Grid item xs={12}>
            <Typography marginY="20px">Login</Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="text"
              sx={{ marginTop: "30px" }}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              label="Passwod"
              variant="outlined"
              fullWidth
              type="password"
              sx={{ marginTop: "30px" }}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Typography>
              {" "}
              current login user email: {registerUser?.email}
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: "30px" }}
              onClick={login}
            >
              Login
            </Button>
            <Divider sx={{ width: "100%" }} variant="thin">
              _________________
            </Divider>
            <Divider sx={{ width: "100%" }} variant="thin">
              __________________
            </Divider>
            <Button
              variant="contained"
              sx={{ marginTop: "30px" }}
              onClick={logout}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Form;
