const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    last: {
        type: Number,
        // unique: true,
        required: true
    },
    Buy: {
        type: Number,
        required: true
    },
    Sell: {
        type: Number,
        required: true
    },
    Volume: {
        type: Number,
        required: true
    },
    Base_unit:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("modelSchema", modelSchema);