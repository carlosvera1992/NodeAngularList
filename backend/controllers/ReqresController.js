var request = require("request");
var reqresPath = "https://reqres.in/api/"

exports.getUsers = function(req, res) {
    request.get(reqresPath+"users", (error, response, body) => {
        if (error){
            res.send(error);    
        }
        res.send(body);
    });
}

exports.getUserById = function(req, res) {
    request.get(reqresPath+"users/"+req.params.idUser, (error, response, body) => {
        if (error){
            res.send(error);    
        }
        res.send(body);
    });
}