"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

var envReq = require('dotenv').config();

module.exports = function post(queryFromInput) {
  var pool;
  return regeneratorRuntime.async(function post$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DATABASE_PASSWORD,
            port: process.env.DB_PORT,
            ssl: {
              rejectUnauthorized: false
            }
          });
          return _context.abrupt("return", pool.query(queryFromInput));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};