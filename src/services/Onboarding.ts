import API from '../config/api';
import Model from '../models/Questions';

const GET_QUESTIONS = 'api.php?amount=10&difficulty=hard&type=boolean';

export default async function getQuestions() {
    const response = await API.get(GET_QUESTIONS);
    const { questions } = new Model(response.data);

    return questions;
}
