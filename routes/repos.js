var express = require('express');
var router = express.Router();
// const GitHub = require('github-api');
const axios = require('axios');

router.post('/', async (req, res, next) => {
  const { username, sortBy } = req.body;
  console.log('The user name from axios request is:', req.body);
  if (!sortBy) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const data = response.data;
      console.log('data is here without sort', sortBy);
      res.status(200).json({
        status: 'success',
        repos: data,
        msg: 'Data fetched successfully',
      });
    } catch (err) {
      if (err.code === 'ECONNRESET') {
        console.log('The connection was reset by the remote host.');
      } else {
        console.log(err);
      }
      res.status(400).json({
        status: 'fail',
        error: err,
        msg: 'Data not fetched successfully',
      });
    }
  } else {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=${sortBy}`
      );
      const data = response.data;
      console.log('data is here with sort', sortBy);
      res.status(200).json({
        status: 'success',
        repos: data,
        msg: 'Data fetched successfully',
      });
    } catch (err) {
      if (err.code === 'ECONNRESET') {
        console.log('The connection was reset by the remote host.');
      } else {
        console.log(err);
      }
      res.status(400).json({
        status: 'fail',
        error: err,
        msg: 'Data not fetched successfully',
      });
    }
  }
});

// get readme details of a repo
router.get('/readme/:owner/:repo', (req, res) => {
  const { owner, repo } = req.params;

  axios
    .get(`https://api.github.com/repos/${owner}/${repo}/readme`)
    .then((response) => {
      const readmeUrl = response.data.download_url;

      axios
        .get(readmeUrl)
        .then((response) => {
          res.send(response.data);
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
