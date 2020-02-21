const app = require('./app');

// eslint-disable-next-line no-console
app.listen(app.get('port'), () => console.log(`server is running http://localhost:${app.get('port')}`));
