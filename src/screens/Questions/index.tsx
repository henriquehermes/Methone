import React from 'react';
import { CommonActions } from '@react-navigation/native';

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
} from './styles';
import { QUESTIONS_STRINGS } from '../../language';
import Images from '../../../assets/images';

const Questions: React.FC = ({ navigation }: any) => {
    function goToScore() {
        return navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Score' }],
            }),
        );
    }

    return (
        <SafeArea>
            <Container>
                <Header>
                    <Title>Entertainement</Title>
                    <Description>Video Games</Description>
                    <QuestionNumber>
                        {QUESTIONS_STRINGS.description}1{QUESTIONS_STRINGS.of}10
                    </QuestionNumber>
                </Header>
                <Body>
                    <Box>
                        <StepLevel />
                        <Content>
                            <Question>
                                Unturned originally started as a Roblox game.
                            </Question>
                        </Content>
                    </Box>
                </Body>
                <Footer>
                    <Button onPress={goToScore}>
                        <Like source={Images.likeIcon} />
                    </Button>
                    <Button>
                        <Dislike source={Images.dislikeIcon} />
                    </Button>
                </Footer>
            </Container>
        </SafeArea>
    );
};

export default Questions;
