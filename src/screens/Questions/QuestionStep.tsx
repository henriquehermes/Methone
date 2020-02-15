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

interface Data {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
}

interface Props {
    data: Data;
    nextStep: (action: boolean) => void;
    position: number;
}

const QuestionStep: React.FC<Props> = ({ data, nextStep, position }) => {
    console.log(data);

    return (
        <SafeArea>
            <Container>
                <Header>
                    <Title>{data.category.split(':')[0]}</Title>
                    {data.category.split(':')[1] && (
                        <Description>
                            {data.category.split(':')[1].trim()}
                        </Description>
                    )}
                </Header>
                <Body>
                    <Box>
                        <StepLevel />
                        <Content>
                            <QuestionLevel>{data.difficulty}</QuestionLevel>
                            <Question>{data.question}</Question>
                        </Content>
                    </Box>
                    <QuestionNumber>
                        {QUESTIONS_STRINGS.description}
                        {position}
                        {QUESTIONS_STRINGS.of}10
                    </QuestionNumber>
                </Body>
                <Footer>
                    <Button onPress={() => nextStep(true)}>
                        <Like source={Images.likeIcon} />
                    </Button>
                    <Button onPress={() => nextStep(false)}>
                        <Dislike source={Images.dislikeIcon} />
                    </Button>
                </Footer>
            </Container>
        </SafeArea>
    );
};

export default QuestionStep;
