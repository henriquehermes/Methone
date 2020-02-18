import React from 'react';

import {
    Container,
    Title,
    SafeArea,
    Description,
    Header,
    QuestionNumber,
    Body,
    Box,
    Footer,
    Button,
    Question,
    Like,
    Dislike,
    StepLevel,
    Content,
    QuestionLevel,
} from './styles';
import { QUESTIONS_STRINGS } from '../../language';
import Images from '../../../assets/images';
import { TYPE_ANSWER } from '../../utils/Constants';

interface Data {
    category: string;
    subcategory?: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
}

interface Props {
    data: Data;
    nextStep: (action: string) => void;
    position: number;
}

const QuestionStep: React.FC<Props> = ({ data, nextStep, position }) => {
    return (
        <SafeArea>
            <Container>
                <Header>
                    <Title>{data?.category}</Title>
                    <Description>{data?.subcategory}</Description>
                </Header>
                <Body>
                    <Box>
                        <StepLevel />
                        <Content>
                            <QuestionLevel>{data?.difficulty}</QuestionLevel>
                            <Question>{data?.question}</Question>
                        </Content>
                    </Box>
                    <QuestionNumber>
                        {QUESTIONS_STRINGS.description}
                        {position}
                        {QUESTIONS_STRINGS.of}10
                    </QuestionNumber>
                </Body>
                <Footer>
                    <Button onPress={() => nextStep(TYPE_ANSWER.correct)}>
                        <Like source={Images.likeIcon} />
                    </Button>
                    <Button onPress={() => nextStep(TYPE_ANSWER.incorrect)}>
                        <Dislike source={Images.dislikeIcon} />
                    </Button>
                </Footer>
            </Container>
        </SafeArea>
    );
};

export default QuestionStep;
