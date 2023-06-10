import axios from 'axios';

async function FetchData(param, query) {
  try {
    const API_KEY = 'ccb4b84fe6a2fe23dccdfdc3b96290a5';
    const params = new URLSearchParams({
      api_key: API_KEY,
      query,
      language: 'en - US',
      page: 1,
    });

    const responce = await axios.get(
      `https://api.themoviedb.org/3/${param}?${params}`
    );

    if (!responce.status === 200) {
      throw new Error(responce.status);
    }
    return await responce.data;
  } catch (error) {
    console.log(error);
  }
}

export default FetchData;
