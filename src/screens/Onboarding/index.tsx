import React from 'react';

import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
    Container,
    Title,
    SafeArea,
    Description,
    Header,
    ImageBackground,
} from './styles';

import { ONBOARDING_STRINGS } from '../../language';
import { setIsLoading } from '../../store/reducers/general/actions';
import { setQuestions } from '../../store/reducers/questions/actions';

import CustomButton from '../../components/Button';
import Images from '../../../assets/images';
import getQuestions from '../../services/Onboarding';

const Onboarding: React.FC = ({ navigation }: any) => {
    const dispatch = useDispatch();

    async function goToQuestions() {
        try {
            dispatch(setIsLoading(true));

            const response = await getQuestions();

            dispatch(setQuestions(response));

            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Questions' }],
                }),
            );
        } catch (e) {
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    return (
        <SafeArea>
            <Container>
                <Header>
                    <Title>{ONBOARDING_STRINGS.title}</Title>
                    <Description>{ONBOARDING_STRINGS.description}</Description>
                </Header>
                <ImageBackground
                    source={Images.onboardingBackground}
                    resizeMode="contain"
                />
                <CustomButton
                    label={ONBOARDING_STRINGS.buttonPrimary}
                    onAction={goToQuestions}
                />
            </Container>
        </SafeArea>
    );
};

export default Onboarding;
