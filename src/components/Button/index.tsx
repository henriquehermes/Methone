import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ButtonText, Loader } from './styles';

interface Props {
    label: string;
    onAction?: any;
}

interface General {
    isLoading: boolean;
}

interface RootState {
    general: General;
}

const selectIsLoading = (state: RootState) => state.general.isLoading;

const Button: React.FC<Props> = ({ label, onAction }) => {
    const isLoading = useSelector(selectIsLoading);

    return (
        <Container
            disabled={isLoading}
            onPress={() => (onAction ? onAction() : null)}
        >
            {isLoading ? <Loader /> : <ButtonText>{label}</ButtonText>}
        </Container>
    );
};

export default Button;
