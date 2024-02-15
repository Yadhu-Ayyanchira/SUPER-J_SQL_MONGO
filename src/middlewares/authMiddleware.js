import jwt from "jsonwebtoken";
import db from "../models/sql/index.js";
const { User } = db.models;

export const userAuth = async (req, res, next) => {
  console.log("token is",req.headers.authorization);
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization?.split(" ")[1];
      jwt.verify(token, process.env.JWTKEY_SECRET, async (err, decoded) => {
        if (err) {
          return res
            .status(403)
            .send({ status: false, message: "Token expired" });
        } else {
          const user = await User.findOne({ where: { id: decoded.userId } });
          if (!user) {
            return res
              .status(403)
              .json({ status: false, message: "User not authorized" });
          } else {
            console.log("Autherized!!!!!!!!!!!!!!!!!!!11");
            req.headers.userId = decoded.userId;
            req.headers.number = decoded.number;
            next();
          }
        }
      });
    } else {
      return res
        .status(403)
        .json({ status: false, message: "User not authorized" });
    }
  } catch (error) {
    console.error("Error in Authentication:", error);
    next(error);
  }
};
