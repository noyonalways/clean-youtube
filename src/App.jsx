import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";

function App() {
  const { getPlaylistById, playlists, error, isLoading } = usePlaylists();

  useEffect(() => {
    getPlaylistById("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl");
    getPlaylistById("PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS");
  }, []);

  console.log("Playlist", playlists);
  console.log("Error", error);
  console.log("Loading", isLoading);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <h1>Hello Clean YouTube</h1>
      <p>{isLoading && "Loading......."}</p>
      <p>{error}</p>
      {/* <div>{playlists["PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl"]?.items.length}</div> */}
    </>
  );
}

export default App;
