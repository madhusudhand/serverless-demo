'use strict';

module.exports.test1 = (event, context, callback) => {
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
