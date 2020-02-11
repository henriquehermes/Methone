import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
`;

export const Container = styled.View`
	flex: 1;
	background-color: ${props => props.theme.ghostwhite};
	padding: 50px 16px 20px 16px;
`;

export const Header = styled.View`
	flex: 1;
`;

export const Title = styled.Text`
	font-size: 30px;
	font-family: "Montserrat-Black";
	margin-bottom: 20px;
`;

export const Description = styled.Text`
	font-size: 20px;
	font-family: "Montserrat-SemiBold";
	margin-bottom: 20px;
`;
