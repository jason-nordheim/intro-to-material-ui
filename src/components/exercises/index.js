import React, { useState, useEffect } from "react";
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

const getExerciseList = (exercises, category, onSelect) => {
  return exercises.map(([group, exercises]) => {
    return !category || category === group ? (
      <div key={group}>
        <Typography variant="h5" style={{ textTransform: "capitalize" }}>
          {group}
        </Typography>
        <List component="ul">
          {exercises.map(({ id, title }) => {
            return (
              <ListItem
                key={`${group}${id}`}
                button
                onClick={() => onSelect(id)}
              >
                <ListItemText primary={title} />
              </ListItem>
            );
          })}
        </List>
      </div>
    ) : null;
  });
};

export default ({ exercises, category, onSelect, exercise }) => {
  const [exerciseList, setExerciseList] = useState(
    getExerciseList(exercises, category, onSelect)
  );
  const { id, title, description } =
    exercise !== null
      ? exercise
      : {
          id: null,
          title: "Welcome",
          description: "Please select an exercise from the list on the left.",
        };
  useEffect(() => {
    setExerciseList(getExerciseList(exercises, category, onSelect));
  }, [exercises, category, onSelect]);

  return (
    <Grid container spacing={1}>
      <Grid item sm>
        <Paper style={style.paper}>{exerciseList}</Paper>
      </Grid>
      <Grid item sm>
        <Paper style={style.paper}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h5">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
