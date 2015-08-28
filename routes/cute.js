var express = require('express');
var router = express.Router();
var fs = require('fs');//fs means file system
var path = require('path');

/* GET customers  */
router.get('/:id?', function(req, res, next) {//entering an id is optional

    var id = req.params.id;

    var file = path.join(__dirname, '../models/cute.json');
    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);//next middleware--error handler
        } else {
            var obj = JSON.parse(data);


            res.json(obj);//returns the data as a json stream
        }
    })
});

module.exports = router;