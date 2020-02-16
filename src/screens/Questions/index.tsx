import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import QuestionStep from './QuestionStep';

import {
    stepPosition,
    setScore,
    setScoreList,
} from '../../store/reducers/questions/actions';

interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
}
interface Questions {
    list: Question[];
    position: number;
    score: number;
}

interface RootState {
    questions: Questions;
}

const QuestionsController: React.FC = ({ navigation }: any) => {
    const [currentStep, setCurrentStep] = useState(0);

    const list = useSelector((state: RootState) => state.questions.list);
    const position = useSelector(
        (state: RootState) => state.questions.position,
    );
    const score = useSelector((state: RootState) => state.questions.score);

    const dispatch = useDispatch();

    function nextStep(action) {
        const step = list[currentStep];
        const isCorrect = step.correct_answer === action;
        const numberScore = isCorrect ? score + 1 : score;

        const scoreItem = { question: step.question, isCorrect };

        dispatch(setScoreList(scoreItem));

        dispatch(setScore(numberScore));

        if (currentStep === 9) {
            return goToScore();
        } else {
            dispatch(stepPosition(position + 1));
            setCurrentStep(currentStep + 1);
        }
    }

    function goToScore() {
        return navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Score' }],
            }),
        );
    }

    return (
        <QuestionStep
            data={list[currentStep]}
            nextStep={nextStep}
            position={position}
        />
    );
};

export default QuestionsController;
