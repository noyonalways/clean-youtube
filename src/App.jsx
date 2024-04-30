import usePlaylists from "./hooks/usePlaylists";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";

function App() {
  const { getPlaylistById, playlists, error, isLoading } = usePlaylists();

  console.log("playlist", playlists);

  return (
    <>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
    </>
  );
}

export default App;
