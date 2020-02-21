const router = require('express').Router();
const { getPosts } = require('../controllers');
const { createPost } = require('../controllers');

router.get('/posts', getPosts);
router.post('/create-post', createPost);

module.exports = router;
