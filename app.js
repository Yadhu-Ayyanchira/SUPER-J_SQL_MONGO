import express from "express";
import dotenv from "dotenv";
import authRoute from "./src/routes/authRoutes.js";
import db from "./src/models/sql/index.js";
import connectToMongo from "./src/config/mongodbConfig.js";
import questionRoute from "./src/routes/questionRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/auth", authRoute);
app.use("/question", questionRoute);

// DB CONNECTION
(async () => {
  try {
    await connectToMongo();

    for (const modelName of Object.keys(db.models)) {
      await db.models[modelName].sync();
      console.log(`Model '${modelName}' synced successfully`);
    }

    console.log("All models synced successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server is running @ ${port}`));
