import React from 'react';
import { CommonActions } from '@react-navigation/native';

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

import Images from '../../../assets/images';

const Score: React.FC = ({ navigation }: any) => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            question: 'Unturned originally started as a Roblox game.',
            isAnswerCorrect: false,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            question: 'Second Item',
            isAnswerCorrect: true,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            question: 'Third Item',
            isAnswerCorrect: false,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            question: 'Unturned originally started as a Roblox game.',
            isAnswerCorrect: true,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            question: 'Second Item',
            isAnswerCorrect: false,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            question: 'Third Item',
            isAnswerCorrect: false,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            question: 'Unturned originally started as a Roblox game.',
            isAnswerCorrect: false,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            question: 'Second Item',
            isAnswerCorrect: false,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            question: 'Third Item',
            isAnswerCorrect: false,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            question: 'Third Item',
            isAnswerCorrect: true,
        },
    ];

    function goToQuestions() {
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
                    <Description>3/10</Description>
                </Header>
                <Body>
                    <Questions
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Row>
                                {item.isAnswerCorrect ? (
                                    <Like source={Images.likeIcon} />
                                ) : (
                                    <Dislike source={Images.dislikeIcon} />
                                )}
                                <Question>{item.question}</Question>
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
