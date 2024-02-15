import db from "../models/sql/index.js";
import userServices from "./userServices.js";
import jwt from "jsonwebtoken";
const { User, Token } = db.models;

const sendOtp = async (data, next) => {
  try {
    const s = await User.create({
      id: "2",
      number: "9744011366",
      password: "123456",
    });
    return s;
  } catch (error) {
    console.error("Error in createUser service:", error);
    next(error);
  }
};

//SAVE OTP TO TOKEN TABLE
const saveToken = async (otp, number) => {
  let token = await Token.findOne({
    where: { number },
  });
  if (!token) {
    token = await Token.create({
      number: number,
      otp: otp,
    });
  } else {
    token.otp = otp;
    token.updatedAt = new Date();
    await token.save();
  }
  return { message: "Otp Saved" };
};

//VERIFY THE ENTERED OTP
const verifyOtp = async (number, otp) => {
  const otpData = await Token.findOne({
    where: { number: number },
  });
  let isNewUser = false;
  if (otpData && otpData.otp == otp) {
    await Token.destroy({
      where: { number: number },
    });
    let user = await User.findOne({
      where: { number },
    });
    if (!user) {
      //IF NEW USER
      console.log("new user");
      isNewUser = true
      user = await userServices.createUser({ number, isNewUser });
      return {message:'New user verified', data:user};
    } else {
      //FOR EXISTING USER
      console.log("existing user");
      const userData = await User.update(
        {
          existingUser: isNewUser ? "false" : "true",
        },
        { where: { number } }
      );
      return {message:'existing user verified', data:userData};
    }
  } else {
    throw new Error("Invalid Otp");
  }
};

//GENERATE JWT FOR AUTH
const generateJWT = async (number) => {
      const user = await User.findOne({
        where: { number:number },
      });
      const token = jwt.sign(
        { userId: user.id, role: "user", number: user.number },
        process.env.JWTKEY_SECRET,
        {
          expiresIn: 10 * 24 * 60 * 60 * 1000,
        }
      );

      return token
}

export default {
  sendOtp,
  saveToken,
  verifyOtp,
  generateJWT,
  
};
