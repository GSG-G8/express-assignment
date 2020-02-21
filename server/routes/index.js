const router = require('express').Router();
const path = require('path');

const { getPosts } = require('../controllers');
const { createPost } = require('../controllers');

router.get('/posts', getPosts);
router.post('/create-post', createPost);
router.use((req, res, next) => {
  const err = new Error('not found');
  err.statusCode = 404;
  next(err);
});


module.exports = router;
