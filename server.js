// const PORT =process.env.PORT || 3000;
// const path = require('path');
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, 'db.json'));
// const middlewares = jsonServer.defaults();
// server.use(middlewares);
// server.use(jsonServer.bodyParser);
// server.use('/api', router);
// server.listen(PORT, () => console.log(`JSON Server is running on port 0{PORT}`));

const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);
