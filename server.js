const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
const port = 3003;

app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log(`Node Js server started at ${port}`));
