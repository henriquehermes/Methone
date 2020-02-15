import API from '../config/api';

const GET_QUESTIONS = 'api.php?amount=10&difficulty=hard&type=boolean';

export default async function getQuestions() {
    // await new Promise(resolve => setTimeout(resolve, 1000)); // Fake Delay API

    const response = await API.get(GET_QUESTIONS);
    return response.data;
}
