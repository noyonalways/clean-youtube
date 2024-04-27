import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";

function App() {
  const { getPlaylistById, playlists } = usePlaylists();

  useEffect(() => {
    getPlaylistById("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl");
    getPlaylistById("PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS");
  }, []);

  console.log("Playlist", playlists);

  return (
    <>
      <h1>Hello Clean YouTube</h1>
    </>
  );
}

export default App;
