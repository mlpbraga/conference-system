/* eslint-disable no-console */
require('express-async-errors');
const cors = require('cors');
const express = require('express');
const fs = require('fs');

class AppError {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/', async (req, res) => {
  const filePath = `${__dirname}/operationalnumber`;
  const operatioNalnumber = await fs.readFileSync(filePath, {encoding:'utf8', flag:'r'});
  await fs.writeFileSync(filePath, `${parseInt(operatioNalnumber) + 1}`);
  res.status(200).json({number: parseInt(operatioNalnumber) + 1});
});

// error handlers
app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: error.message || 'Internal Server Error',
  });
});

app.listen(3567, () => {console.log('🚀 Server started on port 3567!')});