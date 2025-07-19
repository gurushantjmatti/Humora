// const express  = require('express');

// // const songRotes = require("./routes/songs.routes")
// const songRoutes = require('./routes/song.routes');  

// const app= express()
// app.use(express.json())

// app.use('./', songRotes)//use of api is done here


// module.exports = app;


const express = require('express');

const cors = require('cors')

// ✅ Correct spelling: songRoutes
const songRoutes = require('./routes/song.routes');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Correct spelling and correct path (use '/' or a better prefix like '/api/songs')
// app.use('/api/songs', songRoutes);
app.use('/', songRoutes);

module.exports = app;
