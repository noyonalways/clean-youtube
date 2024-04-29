import axios from "axios";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const getPlaylist = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=50&playlistId=${playlistId}&key=${GOOGLE_API_KEY}&pageToken=${pageToken}&part=id,contentDetails,snippet`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylist(playlistId, data.nextPageToken, result);
  }

  return result;
};

export default getPlaylist;
