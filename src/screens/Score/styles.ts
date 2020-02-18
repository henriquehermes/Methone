import styled, { css } from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from '../../utils/FontResponsive';

const defaultIcon = css`
    width: 22px;
    height: 22px;
    margin-right: 10px;
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

export const Header = styled.View``;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: 'Montserrat-SemiBold';
`;

export const Description = styled.Text`
    font-size: ${RFValue(28)}px;
    font-family: 'Montserrat-Black';
`;

export const Like = styled.Image`
    ${defaultIcon};
`;

export const Dislike = styled.Image`
    ${defaultIcon};
`;

export const Questions = styled.FlatList.attrs({
    bounces: false,
})``;

export const Question = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: 'Montserrat-Regular';
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const Body = styled.View`
    flex: 1;
    padding: 15px 0px;
`;

export const OverlayContent = styled.View`
    background-color: rgba(0, 0, 0, 0.85);
    flex: 1;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`;

export const OverlayHeader = styled.View`
    align-items: center;
    text-align: center;
`;

export const OverlayTitle = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: 'Montserrat-Regular';
    color: ${props => props.theme.ghostwhite};
`;

export const OverlayDescription = styled.Text`
    font-size: ${RFValue(45)}px;
    font-family: 'Montserrat-SemiBold';
    color: ${props => props.theme.ghostwhite};
`;

export const HideOverlay = styled(Animatable.View).attrs({
    animation: 'fadeOut',
    delay: 2000,
})`
    flex: 1;
    position: absolute;
    z-index: 999;
    height: 100%;
    width: 100%;
`;
