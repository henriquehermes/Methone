import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from '../../utils/FontResponsive';

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.white};
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.white};
    padding: 30px 16px 20px 16px;
`;

export const Header = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: ${RFValue(28)}px;
    font-family: 'Montserrat-Black';
    margin-bottom: 40px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: 'Montserrat-SemiBold';
    margin-bottom: 20px;
`;

export const ImageBackground = styled.Image`
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 100px;
    right: -50px;
`;
