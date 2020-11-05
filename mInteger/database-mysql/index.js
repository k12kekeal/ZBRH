const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllTransactions = function(callback) {
  // TODO - your code here!
};

module.exports = {
  getAllTransactions
};
