import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Button, Container } from "@mui/material";
import PlayListForm from "../playlist-form";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ getPlaylistById }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlaylistId = (playlistId) => {
    getPlaylistById(playlistId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default">
        <Container maxWidth="lg">
          <Toolbar style={{ padding: "10px 0 10px 0" }}>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="h5">Clean YouTube</Typography>
              <Typography variant="body2">By Full-stack Army</Typography>
            </Stack>
            <Button onClick={handleClickOpen} variant="contained">
              Add Playlist
            </Button>
            <PlayListForm
              open={open}
              handleClose={handleClose}
              getPlayListId={getPlaylistId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

Navbar.propTypes = {
  getPlaylistById: PropTypes.func.isRequired,
};

export default Navbar;
