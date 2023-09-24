import * as React from "react";
import "./styles.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import Hero from "./Hero";
import Album from "./Album";

const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Hero />
      <Album />
    </ThemeProvider>
  );
}
