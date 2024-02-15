import express from "express";
import { errorHandler } from "../middlewares/errorHandler.js";
import questionController from "../controllers/questionController.js";
import { userAuth } from "../middlewares/authMiddleware.js";

const questionRoute = express.Router();

questionRoute.get('/get-all-questions', userAuth, questionController.getAllQuestions)
questionRoute.get('/get-questions-by-category', userAuth, questionController.getQuestionsByCategory)
questionRoute.get('/get-questions-by-tag', userAuth, questionController.getQuestionsByTag)
questionRoute.post('/create-question', userAuth, questionController.createQuestionnaire)
questionRoute.delete('/delete-question/:id', userAuth, questionController.deleteQuestionnaire)
questionRoute.put('/update-question/:id', userAuth, questionController.updateQuestionById);

questionRoute.use(errorHandler);

export default questionRoute;
