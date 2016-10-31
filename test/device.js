module.exports = function() {
    // Fire up fake API server
    var express = require("express");
    var bodyParser = require('body-parser');

    var app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var cache = {
        power: 0,
        brightness: 0,
        color: "000000"
    };

    app.get("/api/v1/:name", function(req, res) {
        switch (req.params.name) {
            case "status":
                res.send(cache.power.toString());
                break;
            case "brightness":
                res.send(cache.brightness.toString());
                break;
            case "color":
                res.send(cache.color.toString());
                break;
        }
    });

    app.post("/api/v1/:name", function(req, res) {
        switch (req.params.name) {
            case "status":
                if (req.body.value === "on") {
                  cache.power = 1;
                } else if (req.body.value === "off") {
                  cache.power = 0;
                }
                res.send(cache.power.toString());
                break;
            case "brightness":
                res.send(cache.brightness.toString());
                break;
            case "color":
                res.send(cache.color.toString());
                break;
        }
    });

    var server = app.listen(0);
    return { port: server.address().port };
};