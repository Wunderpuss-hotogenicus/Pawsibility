// const path = require('path');

const express = require('express')
const app = express()
const UserController = require('./controllers/userController')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())

const PORT = 3000

// app.get('/', UserController.addcookie, (req, res))

app.post('/api/signup', UserController.createUser, (req, res) => {
  console.log('back in the router for signup')
  return res.status(200)
})

app.post('api/login', UserController.verifyUser, UserController.setCookie, (req, res) => {
  console.log('successfully logged in')
  return res.status(200).redirect('../src/pages/Home.js')
})

app.patch('api/form', UserController.updateUser, (req, res) => {
  console.log('back in the router for updsateUser')
  res.send(200)
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
