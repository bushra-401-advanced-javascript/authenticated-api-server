'use strict';

function serverErrorHandler(err,req,res,next){
    res.status(500);
    res.json({error: 'Internal Error: Server Error!'});
  }
  module.exports = errorHandler;
  