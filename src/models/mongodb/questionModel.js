// surveyModel.js

import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
  surveyID: {
    type: Number,
    unique: true,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },
  surveyCreator: {
    type: String,
    required: true,
  },
  surveyCategory: {
    type: String,
    required: true,
  },
  surveyTag: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  choice: {
    type: {
      a: String,
      b: String,
      c: String,
      d: String,
    },
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  timeToAnswer: {
    type: Number,
    required: true,
  },
  validTill: {
    type: Date,
    required: true,
  },
});

const SurveyModel = mongoose.model("question", surveySchema);

export default SurveyModel;
