import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import Button from "../../../src/components/Button";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
	general: {
		isLoading: false,
	},
});

const storeLoader = mockStore({
	general: {
		isLoading: true,
	},
});

interface Props {
    label: string;
    onAction?: any;
}

const newWrapper = ({ label, onAction }: Props) => (
	<Provider store={store}>
		<Button label={label} onAction={onAction} />
	</Provider>
);

const wrapperLoader = ({ label, onAction }: Props) => (
	<Provider store={storeLoader}>
		<Button label={label} onAction={onAction} />
	</Provider>
);

const goToQuestions = jest.fn()

describe("components - Button", () => {
	it("renders correctly", () => {
		const tree = renderer.create(newWrapper({ label: "Label", onAction: goToQuestions })).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders with loading true", () => {
		const tree = renderer.create(wrapperLoader({ label: "Label", onAction: {} })).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
