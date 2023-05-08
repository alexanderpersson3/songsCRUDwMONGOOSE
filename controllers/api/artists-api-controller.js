const Artist = require('../../models/artist-model');

module.exports = {
    // Get all artists
    getAll: async (req, res) => {
        try {
            const artists = await Artist.find();
            res.send(artists);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Get one artist
    getOne: async (req, res) => {
        try {
            const artist = await Artist.findById(req.params.id);
            res.send(artist);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Create artist
    create: async (req, res) => {
        const artist = new Artist({
            title: req.body.title,
            instructions: req.body.instructions
        })

        try {
            await artist.save();
            res.status(201).send(artist);
        } catch (error) {
            res.status(400).send(error.message)
        }
    }


    // Update artist
    // Delete artist
};