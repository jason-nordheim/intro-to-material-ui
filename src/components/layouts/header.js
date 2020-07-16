import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

export default (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit">Exercise Database</Typography>
      </Toolbar>
    </AppBar>
  );
};
