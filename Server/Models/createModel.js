const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const createModel = mongoose.model("Card", createSchema);

module.exports = createModel;