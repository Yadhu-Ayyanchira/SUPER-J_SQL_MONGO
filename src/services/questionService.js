import SurveyModel from "../models/mongodb/questionModel.js";

//CREATE A QUESTIONNAIRE
const createQuestionnaire = async (data) => {
  const newQuestionnaire = await SurveyModel.create(data);
  console.log("new questionnaire is",newQuestionnaire);
  return newQuestionnaire;
}

//DELETE A QUESTION BY ID
const deleteQuestionnaire = async (id) => {
  const deletedQuestionnaire = await SurveyModel.findByIdAndDelete(id);
      if (!deletedQuestionnaire) {
        console.log("Questionnaire not found");
        throw new Error(`Questionnaire with ID not found`);
      }
  console.log("new questionnaire is", deletedQuestionnaire);
  return deletedQuestionnaire;
};

//UPDATE QUESTION BY ID
const updateQuestionById = async (id, updatedData) => {
    const updatedQuestion = await SurveyModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    if (!updatedQuestion) {
      throw new Error(`Question with ID not found`);
    }
    console.log("Updated question:", updatedQuestion);
    return updatedQuestion;
};

//GET ALL QUESTIONS
const getAllQuestions = async () => {
    const data = await SurveyModel.find()
    return data
}

//GET QUESTIONNAIRE BY CATEGORY(reward/coupon)
const getQuestionsByCategory = async (category) => {
  const data = await SurveyModel.find({ surveyCategory: category });
  console.log("Questions with surveyCategory 'coupon':", data);
  return data;  
}

//GET QUESTIONNAIRE BY TAGS (Food/Travel/etc)
const getQuestionsByTag = async (tag) => {
  const data = await SurveyModel.find({ surveyTag: tag });
  console.log("Questions with given tag:", data);
  return data;
};

export default {
  getAllQuestions,
  getQuestionsByCategory,
  getQuestionsByTag,
  createQuestionnaire,
  deleteQuestionnaire,
  updateQuestionById
};
