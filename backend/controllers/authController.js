import User from "../models/userModels.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";


//LogIn controller
export const loginUser =  async (req,res)=>{
  try{

    const {username,password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcryptjs.compare(password,user?.password || "" );

    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid Username or Password"})
    } 

    generateToken(user._id,res);

    res.status(200).json({
        _id:user._id,
        fullName:user.fullName,
        username:user.username,
        profilepic:user.profilepic
    })

  }
  catch(error){
    console.log("Error in login controller",error.message)
    res.status(500).json({error:"Internal server error"})
}
}


//Logout controller
export const logoutUser =(req,res)=>{
   try{
    res.cookie("jwt","",{maxAge : 0});
    res.status(200).json({message:"Logout successfully"})
   }
   catch(error){
    console.log("Error in logout controller",error.message)
    res.status(500).json({error:"Internal server error"})
}
}



//SignUp controller
export const signupUser = async (req, res) => {
  try {
      const { fullName, username, password, confirmPassword, gender } = req.body;

      if (password !== confirmPassword) {
          return res.status(400).json({ error: "Password doesn't match" });
      }

      const user = await User.findOne({ username });

      if (user) {
          return res.status(400).json({ error: "User already exists" });
      }

      // Hash password here
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      // Profile picture based on gender
      const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

      const newUser = new User({
          fullName,
          username,
          password: hashedPassword,
          gender,
          profilepic: gender === "male" ? boyProfile : girlProfile
      });

      if (newUser) {
          // Generate JWT Token
          generateToken(newUser._id, res);
          await newUser.save();

          return res.status(201).json({
              _id: newUser._id,
              fullName: newUser.fullName,
              username: newUser.username,
              profilepic: newUser.profilepic
          });
      } else {
          return res.status(400).json({ error: "Invalid user data" });
      }
  } catch (error) {
      console.log("Error in signup controller", error.message);
      return res.status(500).json({ error: "Internal server error" });
  }
};
