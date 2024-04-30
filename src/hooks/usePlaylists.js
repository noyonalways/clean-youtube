import { useState } from "react";
import { getPlaylist } from "./../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    setIsLoading(true);
    try {
      const playlist = await getPlaylist(playlistId);
      setError("");

      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
    } catch (err) {
      setError(err?.response?.data.error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const addToFavorites = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev, playlistId],
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    error,
    isLoading,
    addToFavorites,
    getPlaylistById,
    addRecent: addToRecent,
    playlists: state.playlists,
    favorites: getPlaylistsByIds(state.favorites),
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
  };
};

export default usePlaylists;
