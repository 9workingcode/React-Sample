import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default props => {
  return (
    <Paper style={props.styles.Paper}>
      {props.exercises.map(group => (
        <Typography component="overline" gutterBottom>
          {group.muscles}
        </Typography>
      ))}
    </Paper>
  );
};
