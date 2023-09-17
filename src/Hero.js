import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Container } from "@mui/material";

const useStyles = makeStyles((defaultTheme) => ({
  hero: {
    background:
      'url("https://images.unsplash.com/photo-1549558549-415fe4c37b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTQ5ODEyOTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080") center/cover',
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: defaultTheme.palette
  },
  heroText: {
    // backgroundColor: "rgba(255, 255, 255, 0.7)", // White background with transparency
    // borderRadius: "15px",
    // marginBottom: "5px"
    marginBottom: "50px",
    padding: "5px", // Add padding for the background
    backgroundColor: "rgba(255, 255, 255, 0.7)", // White background with transparency
    borderRadius: "8px", // Optional: Add rounded corners
    // color: theme.palette.primary.main, // Text color
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Shadow effect
    fontSize: "2.5rem", // Increased font size for h2
    "& h5": {
      fontSize: "1.5rem" // Increased font size for h5
    }
  },
  heroButton: {
    marginTop: "5px"
  }
}));

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <Container>
        <Typography variant="h2" component="div" className={classes.heroText}>
          Welcome to Our Website
        </Typography>
        <Typography variant="h5" className={classes.heroText}>
          Discover amazing content and services.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.heroButton}
        >
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
