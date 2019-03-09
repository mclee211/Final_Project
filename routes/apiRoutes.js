var db = require("../models");

module.exports = function(app){
    app.get("/api/team", function(req, res){
        db.Team.findAll({}).then(function (dbTeam){
            res.json(dbTeam);
        });
    });

    
}