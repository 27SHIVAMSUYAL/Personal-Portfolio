var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();

const SendGridApi = process.env.SendGridApiKey;
if(!SendGridApi){
    console.log("SendGridApiKey not found");}   // if the SendGridApiKey is not found, log it to the console

// the SendEmail function will be called when the user makes a request to /sendemail
const SendEmail =async (req, res) => {


// get the name, email, subject, and message from the request body
    let { name, email, subject, message } = req.body;
    if (!name || !email || !message || !subject) {
        return res.status(400).send({
          success: false,
          message: "Email Not Sent. Missing required fields.",
        });
      }


    // initialize the mailer of node mailer
    var mailer = nodemailer.createTransport(   sgTransport({
                                                    auth: {
                                            api_key: SendGridApi
                                        }
                                                }
     ));




    //send the email
    try{

    
    await mailer.sendMail({
        to: ['47shivam.1o1@gmail.com'], // reciever
        from: '27shivam.1o1@gmail.com', // sender
        replyTo: '27shivam.1o1@gmail.com', // if the reciever replies to the email, the reply will be sent to this email
        subject: `${subject}`,
        text: 'Awesome sauce',
        html: `
          <h2>This is the email</h2>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Subject: ${subject}</li>
            <li>Message: ${message}</li>
          </ul>
        `,
      });

      return res.status(200).send({ success: true, message: "Email Sent Successfully" });
    }
    catch(err){// if the email is not sent, return a 400 status code
        return res.status(500).send({
            success: false,
            message: "Email Not Sent",
            error:err.message
        });


    }
};

module.exports = { SendEmail };





