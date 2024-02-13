import api from "./api";

const API_URL = `${process.env.BASE_URL}/api/question`;

interface QuestionParams {
  postedBy: string;
  today: Date;
  day: number;
  month: number;
}

interface AnswerParams {
  answer: string;
  postedAt: Date;
  postedBy: string;
  image?: string; // Optional parameter
}

const getTodayQuestion = async (params: QuestionParams) => {
  try {
    let res = await api.post(API_URL + "getTodayQuestion", params);
    return res;
  } catch (e: any) {
    let errorMessage = e.response.data.message;
    return Promise.reject(new Error(errorMessage));
  }
};

const getQuestion = async (params: QuestionParams) => {
  try {
    const res = await api.post(API_URL + "/getQuestion", params);
    return res;
  } catch (e: any) {
    const errorMessage = e.response?.data.message || e.message;
    return Promise.reject(new Error(errorMessage));
  }
};

const getDefaultQuestion = async () => {
  try {
    const res = await api.post(API_URL + "/getDefaultQuestion");
    return res;
  } catch (e: any) {
    const errorMessage = e.response?.data.message || e.message;
    return Promise.reject(new Error(errorMessage));
  }
};

const saveAnswer = async (params: AnswerParams) => {
  try {
    const res = await api.post(API_URL + "/saveAnswer", params);
    return res;
  } catch (e: any) {
    const errorMessage = e.response?.data.message || e.message;
    return Promise.reject(new Error(errorMessage));
  }
};

export default {
  getTodayQuestion,
  saveAnswer,
  getDefaultQuestion,
  getQuestion,
};
