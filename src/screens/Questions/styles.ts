import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from '../../utils/FontResponsive';

const defaultShadow = css`
    background-color: ${props => props.theme.white};
    shadow-color: ${props => props.theme.black};
    shadow-offset: {width: 0px, height: 1px};
    shadow-opacity: 0.15;
    shadow-radius: 3.84;
    elevation: 1;
`;

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.ghostwhite};
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.ghostwhite};
    padding: 30px 16px 20px 16px;
`;

export const Header = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: 'Montserrat-SemiBold';
`;

export const Description = styled.Text`
    font-size: ${RFValue(28)}px;
    font-family: 'Montserrat-Black';
`;

export const QuestionNumber = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: 'Montserrat-Regular';
    margin-top: 15px;
`;

export const Body = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.View`
    ${defaultShadow};
    border-radius: 6px;
    height: 100%;
    width: 100%;
`;

export const Footer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    ${defaultShadow};
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
`;

export const Question = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: 'Montserrat-Regular';
`;

export const Like = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Dislike = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Content = styled.View`
    padding: 20px 15px;
`;

export const StepLevel = styled.View`
    background-color: ${props => props.theme.royalblue};
    height: 7px;
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

export const QuestionLevel = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: 'Montserrat-SemiBold';
    color: red;
    margin-bottom: 5px;
`;
