const { Pool } = require('pg')
const pg = require('pg')

const PG_URI = 'postgres://umstoiyr:U9P0OC9o5e9QTRQmgLOlp8sfSF9jPLl1@isilo.db.elephantsql.com/umstoiyr'

const db = new Pool({
  connectionString: PG_URI
})

const client = new pg.Client(PG_URI)
client.connect((err) => {
  if (err) {
    console.log('error connecting to database')
  }
  console.log('success')
})

module.exports = {
  query: (text, params, callback) => {
    return db.query(text, params, callback)
  }
}

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     Username VARCHAR(255) UNIQUE NOT NULL,
//     Password VARCHAR(255) NOT NULL,
//     Housing VARCHAR(255),
//     Location VARCHAR(10),
//     Kids BOOLEAN,
//     Cats BOOLEAN,
//     Dogs BOOLEAN
//   );

// CREATE TABLE dogs (
//     id SERIAL PRIMARY KEY,
//     Name VARCHAR(255) NOT NULL,
//     Photo VARCHAR(255) NOT NULL,
//     Breed VARCHAR(255),
//     Gender VARCHAR(255),
//     Age VARCHAR(255)
//   );
