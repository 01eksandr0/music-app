import axios from "axios";

const clientId = "5fcc5565997d4dc9a4b4238041447fdf";
const clientSecret = "8830e7436d914dc88a152f7932535969";

export const getToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const accessToken = response.data.access_token;
    console.log("Access Token:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error:", error.response.data);
  }
};

const getRefreshToken = async () => {
  const newToken = await getToken();
  localStorage.setItem("token", newToken);
};

export const getRecomendTracks = async () => {
  const token = await localStorage.getItem("token");
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log(response.data.tracks);
    return response.data.tracks;
  } catch (error) {
    getRefreshToken();
    getRecomendTracks();
  }
};
// ==
export const getRecomendArtists = async () => {
  const token = await localStorage.getItem("token");
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx/related-artists`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log(response.data.artists);
    return response.data.artists;
  } catch (error) {
    getRecomendArtists();
  }
};

// ==

export const getArtistInfo = async (id) => {
  const token = await localStorage.getItem("token");
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);

    getArtistInfo();
  }
};

// ==

export const getTopTrecksActor = async (id) => {
  const token = await localStorage.getItem("token");
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=es`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    return response.data.tracks;
  } catch (error) {
    console.log(error);
    //  getRefreshToken();
    // getTopTrecksActor();
  }
};

export const getAudioNow = async (id) => {
  const token = await localStorage.getItem("token");
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/audio-features/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    //  getRefreshToken();
    // getTopTrecksActor();
  }
};
