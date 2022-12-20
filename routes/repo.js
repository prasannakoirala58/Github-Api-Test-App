var express = require('express');
var router = express.Router();
// const GitHub = require('github-api');
const axios = require('axios');

// get details of a sepcific repo
router.get('/', async (req, res) => {
  const { owner, repo } = req.params;
  console.log(owner, repo);

  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
    const data = response.data;
    console.log('data is here about a repo', data);
    res.status(200).json({
      status: 'success',
      repo: data,
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
});

module.exports = router;
