const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '..', 'models', 'posts.json');
  res.sendFile(filePath);
};
