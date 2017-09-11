/**
 * Created by Aisha on 9/11/2017.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('newsletter');
    //res.send('respond with a resource');
});

module.exports = router;
