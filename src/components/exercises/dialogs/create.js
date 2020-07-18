import React, { useState } from "react";
import {
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl, 
  InputLabel,
  Select, 
  TextField,
  MenuItem
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { muscles } from '../../../store'

export default ({ handleExerciseCreate }) => {
  const [open, setOpen] = useState(false);
  const [exercise, setExercise] = useState({
    title: "",
    description: "",
    muscles: "",
  });
  const handleClose = (event) => {
    setOpen(false);
  };

  const handleTextEntry = (field, value) => {
    setExercise({ ...exercise, [field]: value });
  };

  return (
    <React.Fragment>
      <Fab
        color="inherit"
        variant="round"
        size="small"
        onClick={(e) => setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new exercise</DialogTitle>

        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <form
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <FormControl>
              <TextField
                label="Title"
                fullWidth
                placeholder="Title"
                onChange={(e) => handleTextEntry("title", e.target.value)}
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="muscles" fullWidth>
                Muscles
              </InputLabel>
              <Select
                style={{ textTransform: "capitalize" }}
                onChange={(e) => handleTextEntry("muscles", e.target.value)}
              >
                {muscles.map((m) => (
                  <MenuItem value={m} style={{ textTransform: "capitalize" }}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl>
              <TextField
                label="Description"
                placeholder="Description"
                fullWidth
                onChange={(e) => handleTextEntry("description", e.target.value)}
                multiline
                rows={4}
              />
            </FormControl>
          </form>
        </DialogContent>

        <DialogActions style={{ display: "flex", justifyItems: "center" }}>
          <Button
            style={{ flex: 1 }}
            variant="contained"
            onClick={handleClose}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            style={{ flex: 1 }}
            variant="contained"
            onClick={e => {
              handleExerciseCreate(exercise)
              handleClose(e)
            }}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
