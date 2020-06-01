var express = require('express');
var router = express.Router();

var reqresController = require("./controllers/ReqresController");

router.get("/getUsers", reqresController.getUsers);
router.get("/getUserById/:idUser", reqresController.getUserById);

module.exports = router;