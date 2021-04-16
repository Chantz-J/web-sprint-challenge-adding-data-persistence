// start your server here
const server = require('./api/server');

const port = 1234

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${port}`);
});
