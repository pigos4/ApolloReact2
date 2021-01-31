const { Pool } = require('pg')
const envReq = require('dotenv').config();

module.exports =  async function post (queryFromInput){

    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DATABASE_PASSWORD,
        port:process.env.DB_PORT,
        ssl: {rejectUnauthorized: false}
      })
return pool.query(queryFromInput)



}