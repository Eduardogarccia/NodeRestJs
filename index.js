'use strict'
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect('mongodb://127.0.0.1:27017/test')

const express = require('express')
const jwtService = require('jsonwebtoken')

const app = express();
const port = process.env.port || 3000;

const purchasesRouter = require('./src/routers/purchasesRouter')
const productsRouter = require('./src/routers/productsRouter');
const userRouter = require('./src/routers/userRouter');
const middlewareAuth = require('./src/middlewareAuth')

app.use(express.json())
app.use(middlewareAuth)
app.use(purchasesRouter)
app.use(productsRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`Servidor online na porta ${port}`)
});

