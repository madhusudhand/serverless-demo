'use strict';

const cli = require('@angular/cli');
const mysql = require('mysql');
const loadtest = require('loadtest');

//               NOTE:              //
// the above package dependencies are imported just to create large bundle.
// They are totally irrelevant and not used in the function logic.

module.exports.test3 = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0',
    }),
  };

  setTimeout(() => {
    callback(null, response);
  }, 100);
};
