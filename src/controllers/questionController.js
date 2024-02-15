import questionService from "../services/questionService.js";

//CREATE A QUESTIONNAIRE
const createQuestionnaire = async (req, res, next) => {
    try {
        const newQuestionnaire = await questionService.createQuestionnaire(req.body);
        return res.status(200).json({status: true, message: "Questionnaire created successfully", data: newQuestionnaire});
    } catch (error) {
        console.error("Error in creating questionnaire:", error);
        next(error);
    }
}

//DELETE QUESTIONNAIRE
const deleteQuestionnaire = async (req, res, next) => {
    try {
        const deletedQuestionnaire = await questionService.deleteQuestionnaire(req.params.id)
        if(!deletedQuestionnaire){
            return res.status(404).json({status:false, message:"No Questionnaire found"})
        }
        return res.status(200).json({status: true, message: "Question deleted successfully", data: deletedQuestionnaire});
    } catch (error) {
        console.error("Error in delete question:", error);
        next(error);
    }
}

//UPDATE QUESTION BY ID
const updateQuestionById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedQuestion = await questionService.updateQuestionById(id, updatedData);
    return res.status(200).json({status: true, message: "Question updated successfully", data: updatedQuestion,});
  } catch (error) {
    console.error("Error in updating question:", error);
    next(error);
  }
};

//GET ALL QUESTIONS
const getAllQuestions = async (req, res, next) => {
    try {
        const questions = await questionService.getAllQuestions();
        if(questions){
            return res.status(200).json({status: true, message: "Question fetch successfully", data: questions});
        }else{
           return res.status(200).json({status: false, message: "No questions found", data: questions});
        }
    } catch (error) {
        console.error("Error in get all questions:", error);
        next(error);
    }
}

const getQuestionsByCategory = async (req, res, next) => {
    try {
        const category = req.query.category
        const questions = await questionService.getQuestionsByCategory(category);
        if(questions.length==0){
            return res.status(400).json({status: false, message: 'No questions with this category', data: questions});
        }
            return res.status(200).json({status: true, message: "Question fetch by category successfully", data: questions});
    } catch (error) {
        console.error("Error in get questions by category:", error);
        next(error);
    }
}

const getQuestionsByTag = async (req, res, next) => {
    try {
        const tag = req.query.tag
        const questions = await questionService.getQuestionsByTag(tag);
        if(questions.length==0){
            return res.status(400).json({status: false, message: 'No questions with this tag', data: questions});
        }
        return res.status(200).json({status: true, message: "Question fetch by tag successfully", data: questions});
    } catch (error) {
        console.error("Error get questions by tag:", error);
        next(error);
    }
}




export default {
    getAllQuestions,
    getQuestionsByCategory,
    getQuestionsByTag,
    createQuestionnaire,
    deleteQuestionnaire,
    updateQuestionById

}