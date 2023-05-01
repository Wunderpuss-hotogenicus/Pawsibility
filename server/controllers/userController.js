const db = require('../model/dogmodel.js')

const UserController = {}

UserController.createUser = (req, res, next) => {
  console.log('in the createUser controller')
  res.locals.username = req.body.username
  const text = 'INSERT INTO users (username, password, housing, kids, age) VALUES ($1, $2, $3, $4, $5);'
  const values = [req.body.username, req.body.password, req.body.housing, req.body.kids, req.body.age]
  db.query(text, values, (err, result) => {
    if (err) {
      return next({
        log: 'There was an error creating user',
        status: 400,
        message: { err: 'An error occured while creating user!' }
      })
    } else {
      return next()
    }
  })
}

UserController.verifyUser = (req, res, next) => {
  console.log('inside verify user middleware')
  const text = 'SELECT * FROM users WHERE username = $1 AND password = $2'
  const values = [req.body.username, req.body.password]

  db.query(text, values)
    .then(result => {
      if (result.rows.length === 0) {
        res.locals.verification = false
        return next()
      } else {
        res.locals.verification = true
        res.locals.username = req.body.username
        return next()
      }
    })
    .catch(err => {
      console.log('oops', err)
    })
}

UserController.setCookie = (req, res, next) => {
  console.log('inside of setCookie middleware')
  console.log('cookie value', res.locals.username)
  res.cookie('username', res.locals.username)
  console.log(req.cookies.username)
  return next()
}

UserController.updateUser = (req, res, next) => {
  console.log('inside of updateUser middleware')
  console.log('cookie', req.cookies.username)
  console.log('req.body', req.body)

  const { housing, kids, age } = req.body
  const text = 'UPDATE users SET housing = $1, kids = $2, age = $3 WHERE username = $4'
  const values = [housing, kids, age, req.cookies.username]
  console.log('housing kids age', housing, kids, age)

  db.query(text, values, (err, result) => {
    if (err) {
      return next({
        log: 'There was an unknown error while updating user',
        status: 500,
        message: { err: 'An error occured while updating user!' }
      })
    } else {
      console.log('exiting middleware')
      next()
    }
  })
}

module.exports = UserController
