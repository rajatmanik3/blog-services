const path = require("path");
require('dotenv').config()

const express = require('express')
require('./main');
const app = express()
const bodyParser = require('body-parser')
const port = 8000
const cors = require('cors');
const blog = require('./routes/blogRoutes');

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/blog', blog);

app.listen(port, () => {
  console.log(`Blogging app listening at http://localhost:${port}`)
})