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

export default ({ exercises, category, onSelect, exercise }) => {
  const { id, title, description } =
    exercise !== null
      ? exercise
      : {
          id: null,
          title: "Welcome",
          description: "Please select an exercise from the list on the left.",
        };

  return (
    <Grid container spacing={1}>
      <Grid item sm>
        <Paper style={style.paper}>
          {exercises.map(([group, exercises]) => { 
            return !category || category === group 
              ? ( <div key={group}>
                    <Typography
                      variant="h5"
                      style={{ textTransform: "capitalize" }}
                    >
                      {group}
                    </Typography>
                    <List component="ul">
                      {exercises.map(({ id, title }) => {
                        return (
                          <ListItem key={`${group}${id}`} button onClick={() => onSelect(id)}>
                            <ListItemText primary={title} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </div> ) 
              : null 
          })}
        </Paper>
        ;
      </Grid>
      <Grid item sm>
        <Paper style={style.paper}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h5">
            { description }
          </Typography>
        </Paper>
        ;
      </Grid>
    </Grid>
  );
};
