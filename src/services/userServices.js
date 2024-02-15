import db from "../models/sql/index.js";
const { User, Token } = db.models;
import axios from "axios";

//CREATE NEW USER
const createUser = async (data) => {
  const apiUrl = "http://65.2.135.170:5050/api/createchilddid?app=AM";
  const response = await axios.get(apiUrl);
  console.log("did data is",response.data);
    const s = await User.create({
      id: response.data.did,
      number: data.number,
      existingUser: data.isNewUser ? false : true
    });
    return s;
};

export default {
    createUser
}