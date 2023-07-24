var jwt = require("jsonwebtoken");
const User = require("./model/user");
app.post("/register", (req, res) => {
  try {
    const tokenver = jwt.verify(token, "jhgfhjfjfjfjhfygfghtjtydh");
    const tokenemail = tokenver.email;
    tokenver
      .findOne({ email: tokenemail })
      .then((data) => {
        response.send({ status: 200, data: data });
      })
      .catch((error) => {
        response.send({ status: error, data: error });
      });
  } catch (error) {}
}); 

