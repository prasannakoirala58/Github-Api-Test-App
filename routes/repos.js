var express = require('express');
var router = express.Router();
const GitHub = require('github-api');
const axios = require('axios');

// router.get('/', async (req, res, next) => {
//   const username = req.body.username;
//   console.log(username);
//   try {
//     const response = await axios.get(`https://api.github.com/users/${username}/repos`);
//     const data = response.data;
//     res.status(200).json({
//       status: 'success',
//       data,
//       msg: 'Data fetched successfully',
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       status: 'fail',
//       error: err,
//       msg: 'Data not fetched successfully',
//     });
//   }
// });

router.get('/', async (req, res, next) => {
  try {
    const gh = new GitHub({});

    const username = 'prasannakoirala58';
    const user = gh.getUser(username);
    const repos = await user.listRepos();
    // const data = repos.data;
    console.log(repos);
    res.status(200).json({
      status: 'success',
      user,
      msg: 'Data fetched successfully',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      error: err,
      msg: 'Data not fetched successfully',
    });
  }
});

module.exports = router;
