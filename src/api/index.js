import axios from "axios";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const getPlaylistItems = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=50&playlistId=${playlistId}&key=${GOOGLE_API_KEY}&pageToken=${pageToken}&part=id,contentDetails,snippet`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylistItems(playlistId, data.nextPageToken, result);
  }

  return result;
};

export const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?id=${playlistId}&key=${GOOGLE_API_KEY}&part=snippet`;
  const { data } = await axios.get(URL);

  let playlistItems = await getPlaylistItems(playlistId);

  const {
    title: playlistTitle,
    channelId,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items[0]?.snippet;

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { standard },
    } = item.snippet;

    return {
      title,
      description,
      thumbnail: standard,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playlistTitle,
    channelId,
    playlistDescription,
    channelTitle,
    playlistItems,
    playlistThumbnail: thumbnails.default,
  };
};

export default getPlaylistItems;
