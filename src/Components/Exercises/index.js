import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: { padding: 20, marginTop: 20, marginBottom: 20 }
};

export default ({ exercises }) => (
  <Grid container spacing={16}>
    <Grid item xs>
      <LeftPane styles={styles} exercises={exercises} />
    </Grid>
    <Grid item xs>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
