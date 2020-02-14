import axios from 'axios';

const API_URL =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

const api = axios.create({
    baseURL: API_URL,
});

export default api;
