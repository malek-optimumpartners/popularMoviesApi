import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/popular', async (req, res) => {
  const url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY4NDc4YjE2NTgyZWI0NTU5ZjZmZDhlOWM2NmY4NSIsIm5iZiI6MTczMjQzNTcyNy42ODgwMjgzLCJzdWIiOiI2NzNmMWFmZWY0MDI4MmViY2I5YjhjMjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VA9GTvNcrvQ5T5ZicypXgfaHfY2JHOGc25xstOn23YM',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data');
  }
});
router.get('/get_by_vote_average', async (req, res) => {
  // Retrieve the vote average parameter from the query, default to 7.5 if not provided
  const voteAverage = req.query.vote_average || 7.5;

  // Construct the URL dynamically
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=${voteAverage}`;
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY4NDc4YjE2NTgyZWI0NTU5ZjZmZDhlOWM2NmY4NSIsIm5iZiI6MTczMjQzNTcyNy42ODgwMjgzLCJzdWIiOiI2NzNmMWFmZWY0MDI4MmViY2I5YjhjMjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VA9GTvNcrvQ5T5ZicypXgfaHfY2JHOGc25xstOn23YM'
    }
  };

  try {
    // Fetch data from the API
    const response = await fetch(url, options);
    const data = await response.json();
    // Send the data as the response
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data '+error);
  }
});

export default router;

