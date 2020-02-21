const router = require('express').Router();
const path = require('path');

const { getPosts } = require('../controllers');
const { createPost } = require('../controllers');

router.get('/posts', getPosts);
router.post('/create-post', createPost);
router.use((req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', '404.html');
  res.sendFile(filePath);
});


module.exports = router;
