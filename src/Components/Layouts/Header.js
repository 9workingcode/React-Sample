import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h4" gutterBottom>
          ExeApp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
