var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
 
// api key https://sendgrid.com/docs/Classroom/Send/api_keys.html
var options = {
    auth: {
        api_key: 'SENDGRID_PASSWORD'
    }
}
 
// or
 
// username + password
var options = {
    auth: {
        api_user: 'SENDGRID_USERNAME',
        api_key: 'SENDGRID_PASSWORD'
    }
}
    
var mailer = nodemailer.createTransport(sgTransport(options));


var email = {
    to: ['joe@foo.com', 'mike@bar.com'],
    from: 'roger@tacos.com',
    subject: 'Hi there',
    text: 'Awesome sauce',
    html: '<b>Awesome sauce</b>'
};
 
mailer.sendMail(email, function(err, res) {
    if (err) { 
        console.log(err) 
    }
    console.log(res);
});