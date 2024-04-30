import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import PropTypes from "prop-types";

const PlayListForm = ({ open, handleClose, getPlayListId }) => {
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle url later

    if (!state) {
      alert("Invalid State");
    } else {
      getPlayListId(state);
      handleClose();
      setState("");
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new playlist please insert the playlist id, or playlist
            link. Please make sure the link is correct. Otherwise we won&apos;t
            be able to fetch the playlist information.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Playlist id or Link"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleSubmit} type="submit">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PlayListForm;
PlayListForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  getPlayListId: PropTypes.func.isRequired,
};
