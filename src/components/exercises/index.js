import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const style = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto",
  },
};

export default ({ exercises, category }) => {
  return (
    <Grid container spacing={1}>
      <Grid item sm>
        <Paper style={style.paper}>
          {exercises.map(([group, exercises]) => { 
            return !category || category === group 
              ? ( <>
                    <Typography
                      variant="h5"
                      style={{ textTransform: "capitalize" }}
                    >
                      {group}
                    </Typography>
                    <List component="ul">
                      {exercises.map(({ title }) => {
                        return (
                          <ListItem button>
                            <ListItemText primary={title} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </> ) 
              : null 
          })}
        </Paper>
        ;
      </Grid>
      <Grid item sm>
        <Paper style={style.paper}>
          <Typography variant="h1">Welcome!</Typography>
          <Typography variant="h5">
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
        ;
      </Grid>
    </Grid>
  );
};
