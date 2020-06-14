'use strict';

function notFoundHandler(req,res,next){
    res.status(404);
    res.json({error: 'Error 404: Not Found!'});
  }
  module.exports = notFoundHandler;
  