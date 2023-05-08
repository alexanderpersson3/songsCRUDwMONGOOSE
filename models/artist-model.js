const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: false
    },
    ingredients: [
        {
            quantity: String,
            ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Song"
            }
        }
    ]
});

module.exports = mongoose.model("Artist", artistSchema)