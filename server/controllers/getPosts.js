const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
  const filePath = path.join(__dirname, '..', 'models', 'posts.json');
  fs.readFile(filePath, (err, file) => {
    if (err) next(err);
    else res.json(JSON.parse(file));
  });
};
