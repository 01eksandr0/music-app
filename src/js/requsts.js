import axios from "axios";

const clientId = "0b8e2a247c594d16a0d4923fb6b3dbb5";
const clientSecret = "132aa0e32d6844ed9b2df874a649502e";
const id = "1l5LxX34FgwqlhvMb7BPXq";

const token =
  "BQBR-SRu-NcuxOUTAxsrqINdBcnPg098ilQb0-c_neaDOUdkPcXAj6RCIn7o1ZqUfkZR03wStDjjeorL17X85p5Kpy6IR2ypt8T8_IU9J1M6cdcbLR0";
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

export const searchAlbums = async () => {
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
export const getTrackInfo = async () => {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Track Info:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data);
  }
};
