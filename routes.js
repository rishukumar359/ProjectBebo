// const { request } = require('express')
const express = require("express");
const newModel = require("./signmodel");
const userModel = require("./models");
const mail = require("./mail");
const { signup, getbill } = require('./mail1.js')
// const user_controller=require('./controllers/user')

//  const userModel=require('./models/user')
//  const storyModel=require('./models/story')
var jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.use(express.json());
app.post("/add_user", (request, response) => {
  const user = new userModel(request.body);
  //const user=new storyModel(request.body)

  try {
    user.save();
    const story = new storyModel({
      user: user._id,
      title: "rishu story",
    });
    try {
      story.save();
      response.send(story);
    } catch (e) {
      response.status(500).send(error);
    }

    // response.status(200).send({user})
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/editusers/:id", async (request, response) => {
  try {
    const _id = req.params.id;
    console.log(request.body);
    const user = await userModel.findByIdAndUpdate(_id, request.body, {
      new: true,
    });
    response.status(200).send(user);
    console.log(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/delusers/:id", async (req, response) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send(error);
  }
}); 

app.post("/email/post", getbill);

app.get("/users", async (request, response) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
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
  const users = await userModel.find({});
  //const userLen =users.length
  try {
    // console.log(users);
    response.send(users);
    //response.send({userLen: userLen,users: users})
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users/:id", async (req, response) => {
  const id = req.params.id;
  const users = await userModel.findById(id);
  //const userLen =users.length
  try {
    // console.log(users);
    response.send(users);
    //response.send({userLen: userLen,users: users})
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users_story", (req, res) => {
  storyModel
    .find({ title: "use first story" })
    .populate("user")
    .then((story) => {
      //if (err) return handleError(err);
      // console.log("the auther is %s",story.users.name);
      //console.log("hello")
      res.send(story);
    });
});

app.get("/", async (request, response) => {
  return response.sendFile(__dirname + "/index.html");
});
// app.post('/sign_up',user_controller.signup)

app.post("/signupsend", (request, response) => {
  const user = userModel(request.body);
  user.save();
  response.send(user);
  console.log(user);
});

app.post("/signin", async (request, response) => {
  const newuser = new newModel(request.body);
  const check_email = request.body.email;
  console.log(check_email);
  const Password = request.body.Password;
  console.log(Password);
  try {
    const user = await userModel.findOne({ email: check_email });
    if (!user) {
      return response.status(422).send("email or password not found");
    }
    if (user.Password == Password) {
      console.log("login success");
      const token = jwt.sign({ id: user._id }, "jhgfhjfjfjfjhfygfghtjtydh", {
        expiresIn: 300,
      });
      const unique = new newModel({ token });
      unique.save();

      return response
        .status(200)
        .send({ name: user.name, email: user.email, token });
    } else {
      return response.status(422).send("email or password not found");
    }
  } catch (e) {
    response.status(500).send(e);
  }
});

app.post("/forgot", async (request, response) => {
  const check_email = request.body.email;

  try {
    const user = await userModel.findOne({ email: check_email });
    console.log(user);
    if (user) {
      // let otpcode=Math.floor([Math.random()*100000]+1)
      // let otpdata=new otp({
      // })
      return response.status(200).send("user found");
    } else {
      return response.status(422).send("invalid email");
    }
  } catch (e) {
    response.status(500).send(e);
  }
});

module.exports = app;
