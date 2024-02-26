import axios from "axios";

const clientId = "6622062e041b4e199884ee38c1db27cd";
const clientSecret = "d1a8d2587c6a4ffd85c7a7c7f56f563f";
//const id = "d1a8d2587c6a4ffd85c7a7c7f56f563f";
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

export const searchAlbums = async () => {
  const token = await getToken();
  try {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      params: {
        q: "elvise",
        type: "album",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data);
  }
};
// ==
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
    getRefreshToken();
    getRecomendArtists();
  }
};
