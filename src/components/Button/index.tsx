import React from 'react';
import { Container, ButtonText } from './styles';

interface Props {
    label: string;
    onAction?: any;
}

const Button: React.FC<Props> = ({ label, onAction }) => (
    <Container>
        <ButtonText onPress={() => (onAction ? onAction() : null)}>
            {label}
        </ButtonText>
    </Container>
);

export default Button;
