const express = require("express");
const UR = express.Router();
const UserModal = require("../Modals/UserSchema");
UR.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, password, age, prefession, username } =
      req.body;
    const findUser = await UserModal.findOne({ username });
    console.log(findUser);
    if (findUser == null) {
      const send = await UserModal.create({
        firstname,
        lastname,
        password,
        age,
        prefession,
        username,
      });
      if (send) {
        res.json({ msg: send });
      } else {
        res.json({ msg: "Not added" });
      }
    } else {
      res.json({ msg: "User Already Exists" });
    }
  } catch (error) {
    res.json({ msg: "SMO" });
  }
});
UR.post("/login", async (req, res) => {
    try {
      const { password,username } =  req.body;

      const findUser = await UserModal.findOne({ username });
      if (findUser !== null) {
        if (findUser.password == password) {
          res.json({ msg: findUser });
        } else {
          res.json({ msg: "Email or password is wrong" });
        }
      } else {
        res.json({ msg: "User not found" });
      }
    } catch (error) {
        console.log(error);
      res.json({ msg: "SMO" });
    }
});
UR.post("/cart",async(req,res)=>{
    try {
        const {id,name,image,price,quantity} = req.body
        const user = await UserModal.findById(id)
        if(user){
            const add = await UserModal.updateMany({_id: id},{$push:{cart:{name,image,price,quantity}}}) 
            console.log(add);
            res.json({msg:"Added"})
        }else{
            res.json({msg:"User not found"})
        }
    } catch (error) {
        console.log(error);
        res.json({msg:"SMO"})
    }
})
module.exports = UR;
