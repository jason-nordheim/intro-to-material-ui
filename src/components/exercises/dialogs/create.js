import React, { useState } from 'react' 
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

export default props => {
  const [ open, setOpen ] = useState(false)
  const handleClose = event => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button variant="fab" size="small" onClick={ e=> setOpen(true)}>
        <AddIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Create a new exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>
          <form>

          </form>
          <TextField 
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          /> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}