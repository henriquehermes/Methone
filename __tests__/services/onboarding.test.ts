import axios from 'axios';
import getQuestions from '../../src/services/Onboarding';

jest.mock('axios');

const mockedQuestions = {
    data: {
        response_code: 0,
        results: [
            {
                category: 'Entertainment: Video Games',
                type: 'boolean',
                difficulty: 'hard',
                question: 'Unturned originally started as a Roblox game.',
                correct_answer: 'True',
                incorrect_answers: ['False'],
            },
        ],
    },
};

const mockedQuestionReceived = [
    {
        category: 'Entertainment',
        correct_answer: 'True',
        difficulty: 'hard',
        incorrect_answers: ['False'],
        question: 'Unturned originally started as a Roblox game.',
        subcategory: 'Video Games',
        type: 'boolean',
    },
];

describe('services', () => {
    it('should return getQuestions', async () => {
        axios.get = jest.fn().mockResolvedValue(mockedQuestions);

        const response = await getQuestions();

        expect(response).toEqual(mockedQuestionReceived);
    });
});
