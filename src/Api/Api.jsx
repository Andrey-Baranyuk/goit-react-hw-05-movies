import axios from 'axios';

const API_KEY = '9c745ff4be1ad36220d35c7d041cff56';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
  );
  // console.log(response.data.results);

  const trendingMovies = response.data.results.map(({ id, title }) => {
    return { id, title };
  });

  //   console.log(trendingMovies);

  return trendingMovies;
};

const getMoviesById = async id => {
  const responseId = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
  );
  //   console.log(responseId.data);

  return responseId.data;
};

const getMoviesReviews = async id => {
  const responseReviews = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
  );
  // console.log(responseReviews.data.results);
  const reviewsMovies = responseReviews.data.results.map(
    ({ author, content, id }) => {
      return { author, content, id };
    },
  );
  // console.log(reviewsMovies);
  return reviewsMovies;
};

const getMoviesCasts = async id => {
  const responseCasts = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  );


  return responseCasts.data;
};

const getMoviesQuery = async query => {
  const responseCasts = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
  // console.log(responceCasts.data.results);
  return responseCasts.data.results;
};

export {
  getMovies,
  getMoviesById,
  getMoviesReviews,
  getMoviesCasts,
  getMoviesQuery,
};