import DEFAULT from '../types';

export const setQuestions = questions => ({
    type: DEFAULT.SET_QUESTIONS,
    questions,
});

export const stepPosition = position => ({
    type: DEFAULT.SET_STEP_POSITION,
    position,
});

export const setScoreList = scoreList => ({
    type: DEFAULT.SET_SCORE_LIST,
    scoreList,
});

export const setScore = score => ({
    type: DEFAULT.SET_SCORE,
    score,
});

export const playAgain = () => ({
    type: DEFAULT.PLAY_AGAIN,
});
