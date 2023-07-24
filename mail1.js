const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');



/** send mail from testing account */
const signup = async (req, res) => {

    /** testing account */
    let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "<b>Successfully Register with us.</b>", // html body
      }


    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Successfully...!");
}

/** send mail from real gmail account */
const getbill = async(req, res) => { 

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
      text:req.name,
      text: "Welcome in nikkis Swimming pool", // plain text body
      html: "<b>Welcome Dear To Our Team As an Admin</b> <img src=https://i.pinimg.com/736x/be/a8/ea/bea8ea3d92b7d5435eba9042d712f64b.jpg><br> <h1>CONGRATULATIONS!</h1> <br> <h4>We are Really Excited To Work with you  and Enjoy Your Services To Swim Community</h4> <h2>Best of luck</h2>", // html body  
     
  
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    

    // let config = {
    //     service : 'gmail',
    //     auth : {
    //         user: 'rishukumar94716@gmail.com',
    //     pass: 'ygxfdbpszbhqgbao'
    //     }
    // }

    // let transporter = nodemailer.createTransport(config);

    // let MailGenerator = new Mailgen({
    //     theme: "default",
    //     product : {
    //         name: "Mailgen",
    //         link : 'https://mailgen.js/'
    //     }
    // })

    // let response = {
    //     body: {
    //         name : "Daily Tuition",
    //         intro: "Your bill has arrived!",
    //         table : {
    //             data : [
    //                 {
    //                     item : "Nodemailer Stack Book",
    //                     description: "A Backend application",
    //                     price : "$10.99",
    //                 }
    //             ]
    //         },
    //         outro: "Looking forward to do more business"
    //     }
    // }

    // let mail = MailGenerator.generate(response)

    // let message = {
    //     from : 'rishukumar94716@gmail.com',
    //     to : "rishu94716@gmail.com",
    //     subject: "Place Order",
    //     html: mail
    // }

    // transporter.sendMail(message).then(() => {
    //     return res.status(201).json({
    //         msg: "you should receive an email"
    //     })
    // }).catch(error => {
    //     return res.status(500).json({ error })
    // })

    // res.status(201).json("getBill Successfully...!");
}


module.exports = {
    signup,
    getbill
}