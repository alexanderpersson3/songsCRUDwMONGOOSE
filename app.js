require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Require routes
const homeWebRouter = require('./routers/web/home-web-router');
const songWebRouter = require('./routers/web/song-web-router');

const songApiRouter = require('./routers/api/song-api-router');
const artistApiRouter = require('./routers/api/artist-api-router');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MDB connected..."))
    .catch(err => console.log(err));

const app = express();

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs" // default ".handlebars"
}))

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Use routes
app.use('/', homeWebRouter);
app.use('/songs', songWebRouter);
app.use('/api/songs', songApiRouter);
app.use('/api/artists', artistApiRouter);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
})