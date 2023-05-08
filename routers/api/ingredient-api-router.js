const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/api/song-api-controller')

// Get all songs
router.get('/', controller.getAll);

// Get one song
router.get('/:id', controller.getOne);

// Create song
router.post('/', controller.create);

// Update song
// Delete song

module.exports = router;