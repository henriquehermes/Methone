import React from 'react';

import {
    Container,
    Title,
    SafeArea,
    Description,
    Header,
    ImageBackground,
} from './styles';
import { ONBOARDING_STRINGS } from '../../language/en-US';
import CustomButton from '../../components/Button';

import Images from '../../../assets/images';

const Onboarding: React.FC = ({ navigation }: any) => {
    function goToQuestions() {
        return navigation.navigate('Questions');
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
