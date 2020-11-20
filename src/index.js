const express = require('express');
const userRegisterRouter = require('./routes/userRoutes');

const server = express();
const userRegisterRoutes = require('./routes/userRoutes');


require('./db');
server.use('/userRegister', userRegisterRouter);
server.listen(3000);

console.log(`server listening on port 3000`)