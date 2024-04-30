import usePlaylists from "./hooks/usePlaylists";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import PlaylistCardItem from "./components/playlist-card-item";
import { Box, CircularProgress, Container, Grid } from "@mui/material";

function App() {
  const { getPlaylistById, playlists, error, isLoading } = usePlaylists();
  const playlistArray = Object.values(playlists);

  return (
    <>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Container maxWidth="lg">
        <h1>Playlists</h1>
        {!error && playlistArray.length === 0 && (
          <div>
            There is no Playlist added. Please add playlist by clicking the
            &apos;ADD PLAYLIST&apos; Button
          </div>
        )}
        {error && <div>{error}</div>}
        {isLoading ? (
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
            height="500px"
          >
            <>
              <svg width={0} height={0}>
                <defs>
                  <linearGradient
                    id="my_gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e01cd5" />
                    <stop offset="100%" stopColor="#1CB5E0" />
                  </linearGradient>
                </defs>
              </svg>
              <CircularProgress
                sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
              />
            </>
          </Box>
        ) : (
          <Grid container spacing={2} marginBottom={2}>
            {playlistArray.length > 0 &&
              !error &&
              playlistArray.map((playlist) => (
                <Grid item xs={12} md={4} key={playlist.playlistId}>
                  <PlaylistCardItem {...playlist} />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default App;
