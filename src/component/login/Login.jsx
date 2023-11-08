import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hotel-project.onrender.com/S-Printer-App/Admin/Auth/signIn",
        formData
      );

      const { accessToken } = response.data;

      console.log("accessToken", accessToken);
      localStorage.setItem("accessToken", accessToken);
      navigate("/");
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!isPasswordFocused) {
      setIsPasswordFocused(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{ maxWidth: 400, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  marginBottom: 4,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#79091E",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Admin Login
              </Typography>

              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                id="password"
                name="password"
                label={isPasswordFocused ? "Password" : "Password"}
                type={showPassword ? "text" : "password"}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                fullWidth
                variant="outlined"
                sx={{
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  padding: "12px 24px",
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </CardActions>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  <a href="#">Forgot Password?</a>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Login;