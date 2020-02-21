const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
  const filePath = path.join(__dirname, '..', 'models', 'posts.json');
  fs.readFile(filePath, (err, file) => {
    if (err) next(err);
    else {
      const posts = JSON.parse(file);
      posts[Date.now()] = req.body.post;
      fs.writeFile(filePath, JSON.stringify(posts), (error) => {
        if (err) next(error);
        else res.sendFile(filePath);
      });
    }
  });
};
