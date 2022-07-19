const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

let yo = 'this is the connection';

app.get('/ayoo', (req, res) => {
    res.send(yo)
});
   