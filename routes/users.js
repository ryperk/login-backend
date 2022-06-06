var express = require('express');
var router = express.Router();
var Users =  require("../controllers/users");

/* GET users listing. */
router.get('/list', Users.getUser)
router.post('/create', Users.createUser)

module.exports = router;
