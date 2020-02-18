import React, { useState } from 'react';

import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Modal from 'react-native-modal';

import {
    Container,
    Title,
    SafeArea,
    Description,
    Header,
    ImageBackground,
    ModalBody,
} from './styles';

import { ONBOARDING_STRINGS, ERROR_EXCEPTION_STRINGS } from '../../language';
import { setIsLoading } from '../../store/reducers/general/actions';
import { setQuestions } from '../../store/reducers/questions/actions';

import CustomButton from '../../components/Button';
import Images from '../../../assets/images';
import getQuestions from '../../services/Onboarding';

const Onboarding: React.FC = ({ navigation }: any) => {
    const dispatch = useDispatch();

    const [error, setError] = useState(null);

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
            setError(true);
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    function handleModal() {
        setError(null);
        goToQuestions();
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
            <Modal isVisible={!!error}>
                <ModalBody>
                    <Title>{ERROR_EXCEPTION_STRINGS.title}</Title>
                    <Description>
                        {ERROR_EXCEPTION_STRINGS.description}
                    </Description>
                    <CustomButton
                        label={ERROR_EXCEPTION_STRINGS.buttonPrimary}
                        onAction={handleModal}
                    />
                </ModalBody>
            </Modal>
        </SafeArea>
    );
};

export default Onboarding;
