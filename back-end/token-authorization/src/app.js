const express = require('express');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials'); // imports the file.

app.use(express.json());

// you can insert here custom endpoints which doesn't need the token validation middleware.

app.use(apiCredentials); 

// custom endpoints which needs the token validation middleware.
