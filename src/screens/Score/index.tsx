import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    Title,
    SafeArea,
    Description,
    Header,
    Questions,
    Row,
    Like,
    Dislike,
    Question,
    Body,
} from './styles';
import { SCORE_STRINGS } from '../../language';
import CustomButton from '../../components/Button';
import { playAgain } from '../../store/reducers/questions/actions';

import Images from '../../../assets/images';

interface Question {
    question: string;
    isCorrect: boolean;
}

interface Score {
    scoreList: Question[];
    score: number;
}

interface RootState {
    questions: Score;
}

const Score: React.FC = ({ navigation }: any) => {
    const dispatch = useDispatch();

    const scoreList = useSelector(
        (state: RootState) => state.questions.scoreList,
    );
    const score = useSelector((state: RootState) => state.questions.score);

    function goToQuestions() {
        dispatch(playAgain());

        return navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Questions' }],
            }),
        );
    }

    return (
        <SafeArea>
            <Container>
                <Header>
                    <Title>{SCORE_STRINGS.title}</Title>
                    <Description>{score}/10</Description>
                </Header>
                <Body>
                    <Questions
                        data={scoreList}
                        keyExtractor={item => item?.question}
                        renderItem={({ item, index }) => (
                            <Row key={index}>
                                {item?.isCorrect ? (
                                    <Like source={Images.likeIcon} />
                                ) : (
                                    <Dislike source={Images.dislikeIcon} />
                                )}
                                <Question>{item?.question}</Question>
                            </Row>
                        )}
                    />
                </Body>
                <CustomButton
                    onAction={goToQuestions}
                    label={SCORE_STRINGS.buttonPrimary}
                />
            </Container>
        </SafeArea>
    );
};

export default Score;
