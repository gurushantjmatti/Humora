const express = require('express');

const router = express.Router();

const uploadFile = require('../service/storage.service.js'); // Import the uploadFile function
const multer = require('multer');//use as muiddleware to read the audio file
const songModel = require('../models/song.models.js');

const upload = multer({storage: multer.memoryStorage()});

//share the title artist and 
// autofile for this u cannot use the raw file
//to upload create the song create api done
router.post('/songs', upload.single("audio"), async (req, res) => {
    try {
        console.log(req.body); // title and artist
        console.log(req.file); // audio file
        const fileData = await uploadFile(req.file);
        const newSong = await songModel.create({
            title: req.body.title,
            artist: req.body.artist,
            audio: fileData.url,
            mood: req.body.mood
        });
        res.status(201).json({
            message: "Song created successfully",
            song: newSong
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error uploading song", error: error.message });
    }
});



router.get('/songs', async (req, res) => {
    const {mood} = req.query;
    const songs = await songModel.find({
        mood:mood
    })

    res.status(200).json({
       message:"songs fetched" ,
       songs
    })
})




module.exports = router;