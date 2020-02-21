const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  console.log(req.headers);
  const filePath = path.join(__dirname, '..', 'models', 'posts.json');
  fs.readFile(filePath, (err, file) => {
    if (err) console.log(err);
    else {
      const posts = JSON.parse(file);
      console.log(posts);
      posts[Date.now()] = req.body.post;
      fs.writeFile(filePath, JSON.stringify(posts), (err) => {
        if (err) console.log(err);
        else res.sendFile(filePath);
      });
    }
  });
};
