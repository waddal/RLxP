const server = require('./api/server.js');

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n** running on port ${port} **\n`));
server.timeout = 60 * 10 * 1000;
