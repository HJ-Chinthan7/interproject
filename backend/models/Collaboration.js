const mongoose = require("mongoose");

const collabarationSchema = new mongoose.Schema({
    partnerName: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    link: { 
        type: String 
    },
});

module.exports = mongoose.model("Collaboration", collaborationSchema);
