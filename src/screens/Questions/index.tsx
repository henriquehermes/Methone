import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import QuestionStep from './QuestionStep';
import QuestionComponent from './QuestionComponent';

import { Steps } from '../../utils/Constants';
import { stepPosition, setScore } from '../../store/reducers/questions/actions';

interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
}
interface Questions {
    list: Array<Question>;
    position: number;
}

interface RootState {
    questions: Questions;
}

const ListQuestions = (state: RootState) => state.questions.list;
const PositionQuestions = (state: RootState) => state.questions.position;

const QuestionsController = ({ navigation }: any) => {
    const [currentStep, setCurrentStep] = useState(1);

    const list = useSelector(ListQuestions);
    const position = useSelector(PositionQuestions);

    const dispatch = useDispatch();

    function nextStep(action) {
        const step = list[currentStep];
        if (list[currentStep].correct_answer.includes[action]) {
            dispatch(
                setScore({
                    question: step.question,
                    isCorrect: true,
                }),
            );
        } else {
            dispatch(
                setScore({
                    question: step.question,
                    isCorrect: false,
                }),
            );
        }

        if (currentStep === 10) {
            return goToScore();
        } else {
            dispatch(stepPosition(currentStep + 1));
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

    const steps = {
        [Steps.Question_1]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
        [Steps.Question_2]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
        [Steps.Question_3]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
        [Steps.Question_4]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
        [Steps.Question_5]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
        [Steps.Question_6]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
        [Steps.Question_7]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
        [Steps.Question_8]: (
            <QuestionStep
                data={list[currentStep]}
                nextStep={nextStep}
                position={position}
            />
        ),
    };

    return <QuestionComponent steps={steps} currentStep={currentStep} />;
};

export default QuestionsController;
