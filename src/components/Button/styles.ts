import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    background-color: ${props => props.theme.royalblue};
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-family: 'Montserrat-SemiBold';
    color: ${props => props.theme.white};
    width: 100%;
    text-align: center;
`;

export const Loader = styled.ActivityIndicator.attrs(props => ({
    color: props.theme.white,
}))``;
