"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'rishukumar94716@gmail.com',
        pass: 'ygxfdbpszbhqgbao'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Nikki 👻" <rishukumar94716@gmail.com>', // sender address
    to: "rishkumar94716@gmail.com,nikitathakur0904@gmail.com, rishu94716@gmail.com", // list of receivers
    subject: "Welcome To Swim", // Subject line
    text: "Welcome in nikkis Swimming pool", // plain text body
    html: "<b>Welcome Dear To Our Team As an Admin</b> <img src=https://i.pinimg.com/736x/be/a8/ea/bea8ea3d92b7d5435eba9042d712f64b.jpg><br> <h1>CONGRATULATIONS!</h1> <br> <h4>We are Really Excited To Work with you  and Enjoy Your Services To Swim Community</h4> <h2>Best of luck</h2>" // html body  


  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
