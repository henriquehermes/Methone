import * as actions from "../../../src/store/reducers/general/actions";
import * as types from "../../../src/store/reducers/general/types";

describe("actions", () => {
	it("should create an action to set loading true", () => {
		const isLoading = true;
		const expectedAction = {
			type: types.SET_LOADING,
			isLoading,
		};
		expect(actions.setIsLoading(isLoading)).toEqual(expectedAction);
	});
});
