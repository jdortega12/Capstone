const mongoose = require("mongoose");

exports.connect = function(){
    mongoose.connect("mongodb+srv://jdortega:FinanceBoys@cluster0.1ktgc7g.mongodb.net/?retryWrites=true&w=majority")
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}
