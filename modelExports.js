var mongoose = require('mongoose'),
    archives = require("./archives"),
    Schema = mongoose.Schema;

    var customeSchema = new Schema({
        archives:[archives]
    },{collection: "arshcives"});

    module.exports = mongoose.model("archives",customeSchema);