import axios from "axios";

//
export const getTrackById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "b5f3830a22mshe45b47b7cb5bfcdp1dcd0djsn18b379206e77",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

//
export const getArtistById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "b5f3830a22mshe45b47b7cb5bfcdp1dcd0djsn18b379206e77",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

//
export const searchTrack = async (q) => {
  try {
    const response = await axios.get(
      `https://deezerdevs-deezer.p.rapidapi.com/search`,
      {
        params: { q, limit: 10 },
        headers: {
          "X-RapidAPI-Key":
            "b5f3830a22mshe45b47b7cb5bfcdp1dcd0djsn18b379206e77",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
