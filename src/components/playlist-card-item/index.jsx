import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const PlaylistCardItem = ({
  playlistTitle,
  playlistDescription,
  playlistThumbnail,
}) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        image={playlistThumbnail?.url}
        title="green iguana"
        sx={{ height: 203 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" lineHeight="1.2">
          {playlistTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {(playlistDescription?.length > 50
            ? playlistDescription?.substring(0, 50) + "..."
            : playlistDescription) || "Playlist Description"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small">Play</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

PlaylistCardItem.propTypes = {
  playlistTitle: PropTypes.string.isRequired,
  playlistDescription: PropTypes.string,
  playlistThumbnail: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default PlaylistCardItem;
