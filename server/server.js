// const path = require('path');

const express = require('express')
const app = express()
const UserController = require('./controllers/userController')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const httpProxy = require('http-proxy');

app.use(cookieParser())
app.use(express.json())
app.use(cors());
const proxy = httpProxy.createProxyServer();


const PORT = 3000


// app.get('/', UserController.addcookie, (req, res))

app.post('/api/signup', UserController.createUser, UserController.setCookie, (req, res) => {
  console.log('back in the router for signup')
  return res.status(200).json('signed up')
})

app.get('/api/userData', UserController.getUser, (req, res) => {
  return res.status(200).json(res.locals.userData)
})

app.post('/api/login', UserController.verifyUser, UserController.setCookie, (req, res) => {
  console.log('finished loging post request')
  console.log(res.locals.verification)
  return res.status(200).json(res.locals.verification)
})

app.patch('/api/form', UserController.updateUser, (req, res) => {
  console.log('back in the router for updateUser')
  res.send(200)
})

// CATCH ALL ERROR HANDLER
app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'There was an unknown error',
    status: 500,
    message: { err: 'An error occured!' }
  }
  const errorObj = Object.assign({}, defaultError, err)
  res.status(errorObj.status).json(errorObj.message)
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
