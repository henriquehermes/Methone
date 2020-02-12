import React from 'react';

import {
    Container,
    Title,
    SafeArea,
    Description,
    Header,
} from './styles';
import { ONBOARDING_STRINGS } from '../../language/en-US';
import CustomButton from '../../components/Button';

import Images from '../../../assets/images';

const Questions: React.FC<> = () => (
    <SafeArea>
        <Container>
            <Header>
                <Title>{ONBOARDING_STRINGS.title}</Title>
                <Description>{ONBOARDING_STRINGS.description}</Description>
            </Header>
        </Container>
    </SafeArea>
);

export default Questions;
