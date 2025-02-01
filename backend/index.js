const express = require('express');
const dot = require('dotenv');
const cors = require('cors');

let app = express();
app.use(cors({
    origin: 'http://localhost:3000'  // Allow only requests from this domain
  }));

dot.config();
app.use(express.json());


app.use( '/api/email',require('./routes/route'));


let PORT=process.env.PORT || 8000;
app.listen(PORT);