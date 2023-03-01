const express = require('express');
require('express-async-errors');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials'); // imports the file.
const errorMiddleware = require('./middlewares/errorMiddleware'); // imports errofile.

app.use(express.json());

// you can insert here custom endpoints which doesn't need the token validation middleware.

app.use(apiCredentials); 

// you can inser here custom endpoints which needs the token validation middleware.

app.use(errorMiddleware);
