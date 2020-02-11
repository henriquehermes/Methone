import React from "react";

import { Container, Title, SafeArea, Description, Header } from "./styles";
import { ONBOARDING_STRINGS } from "../../language/en-US";
import CustomButton from "../../components/Button"

const Onboarding: React.FC<> = () => (
	<SafeArea>
		<Container>
            <Header>
			<Title>{ONBOARDING_STRINGS.title}</Title>
            <Description>{ONBOARDING_STRINGS.description}</Description>
            </Header>
            <CustomButton label={ONBOARDING_STRINGS.buttonPrimary}/>
		</Container>
	</SafeArea>
);

export default Onboarding;
