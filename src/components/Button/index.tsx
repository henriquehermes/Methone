import React from "react";
import { Container, ButtonText } from "./styles";

interface Props {
	label: string,
}

const Button: React.FC<Props> = ({ label }) => (
	<Container>
		<ButtonText>{label}</ButtonText>
	</Container>
);

export default Button;
