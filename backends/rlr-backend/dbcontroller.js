var mysql = require('mysql');
var db_config = require('./config');

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function(err) { 
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

// get user by user name
var login = function (userName, password, callback) {
  handleDisconnect();
  var query = "SELECT * FROM users WHERE username LIKE '" + userName + "' AND password LIKE '" + password + "' LIMIT 1";
  connection.query(query, function (err, resultUser) {
    if (err || resultUser.length == 0) {
      callback(null, err);
    } else {
      callback(resultUser[0]);
    }
  });
  connection.end();
}

// get land id
var getLandIdFromMapper = function (nic, land_key, callback) {
  handleDisconnect();
  var query = "SELECT land_id FROM lands_mapper WHERE nic LIKE '" + nic + "' AND land_key LIKE '" + land_key + "' LIMIT 1";
  connection.query(query, function (err, resultLandID) {
    if (err || resultLandID.length == 0) {
      callback(null, err);
    } else {
      callback(resultLandID[0]);
    }
  });
  connection.end();
}

// get nic details
var getNIC = function (nic_no, callback) {
  handleDisconnect();
  var query = "SELECT * FROM nic_table WHERE nic_no LIKE '" + nic_no + "' LIMIT 1";
  connection.query(query, function (err, resultNIC) {
    if (err || resultNIC.length == 0) {
      callback(null, err);
    } else {
      callback(resultNIC[0]);
    }
  });
  connection.end();
}

// get deed details
var getDeed = function (land_id, callback) {
  handleDisconnect();
  var query = "SELECT * FROM deed_table WHERE land_id LIKE '" + land_id + "' LIMIT 1";
  connection.query(query, function (err, resultDeed) {
    if (err || resultDeed.length == 0) {
      callback(null, err);
    } else {
      callback(resultDeed[0]);
    }
  });
  connection.end();
}

// get plan details
var getPlan = function (land_id, callback) {
  handleDisconnect();
  var query = "SELECT * FROM plan_table WHERE land_id LIKE '" + land_id + "' LIMIT 1";
  connection.query(query, function (err, resultPlan) {
    if (err || resultPlan.length == 0) {
      callback(null, err);
    } else {
      callback(resultPlan[0]);
    }
  });
  connection.end();
}

module.exports = { login, getLandIdFromMapper, getNIC, getDeed, getPlan };