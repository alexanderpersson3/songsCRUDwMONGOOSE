const Song = require('./../../models/song-model')

module.exports = {

    // Show all
    showAll: async (req, res) => {
        try {
            const songs = await Song.find().lean();
            res.render("songs/index", { songs })

        } catch (error) {
            res.render("error", { message: error.message })
        }
    },

    // Show one
    showOne: async (req, res) => {
        try {
            const song = await Song.findById(req.params.id);
            res.render("songs/single", song)

        } catch (error) {
            res.render("error", { message: error.message })
        }
    }
    // Show create form
    // Create song
    // Show edit form
    // Update song
    // Delete song
}