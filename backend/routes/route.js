const express = require('express');
const { SendEmail } = require('../controller/controller');



// Create a new router
let router = express.Router();

//if a user makes a request to /sendemail, the SendEmail function will be called
router.post('/SendEmail',SendEmail);


module.exports = router;
