import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import CreateDialog from '../exercises/dialogs/create'

export default (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" style={{flex: 1}}>Exercise Database</Typography>
        <CreateDialog /> 
      </Toolbar>
    </AppBar>
  );
};
