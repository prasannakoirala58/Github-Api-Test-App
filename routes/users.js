var express = require('express');
var router = express.Router();
const GitHub = require('github-api');

router.get('/', async (req, res, next) => {
  try {
    const gh = new GitHub({});

    const username = req.body.username;
    const user = gh.getUser(username);
    console.log(user);
    res.status(200).json({
      status: 'success',
      user,
      msg: 'User data fetched successfully',
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
