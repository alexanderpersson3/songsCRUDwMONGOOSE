const Song = require('./../../models/song-model')

module.exports = {
    // Get all Songs
    getAll: async (req, res) => {
        try {
            const Songs = await Song.find();
            res.send(Songs);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Get one Song
    getOne: async (req, res) => {
        try {
            const Song = await Song.findById(req.params.id);
            res.send(Song);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Create Song
    create: async (req, res) => {
        const Song = new Song({
            name: req.body.name,
            description: req.body.description
        })

        try {
            await Song.save();
            res.status(201).send(Song);
        } catch (error) {
            res.status(400).send(error.message)
        }
    }


    // Update Song
    // Delete Song
};