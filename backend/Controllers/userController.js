const userModel = require("../Models/userModel");
const bcrypt = require('bcrypt');

exports.signup = async(req,res)=>{
try{
  let (email,pwd,fullName) = req.body;
  let emailCon = await userModel.findOne({email:email});
  if(emailCon){
    return res.status(400).json({
        success:false,
        msg:"Email already exist"
    })
  }
  bcrypt.genSalt (12, function(err, salt) {
    bcrypt.hash(pwd, salt,async function(err, hash) {

      let user = await userModel.create({
        email:eamil,
        pwd:hash,
        fullName:fullName
      })
        // Store hash in your password DB.
    });

    return res.status(200).json({
      success:true,
      msg:"User Created Successfully",
    });
});

}
catch(error){
    res.status(500).json({
        success: false,
        msg: error.message,
});

}

};