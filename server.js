const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

const port = 8000;

MongoClient.connect(db.url, (err, client) => {
    if (err)
        return console.log(err);

    require("./app/routes")(app, client.db("easycode"));

    app.listen(port, () => {
        console.log("Express is alive");
    });
});