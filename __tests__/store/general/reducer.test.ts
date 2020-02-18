import reducer from "../../../src/store/reducers/general/reducer";
import * as types from "../../../src/store/reducers/general/types";

const isLoading = true;

describe("general reducer", () => {
	it("should handle SET_LOADING", () => {
		expect(
			reducer(undefined, {
				type: types.SET_LOADING,
				isLoading,
			}),
		).toEqual({
			isLoading: true,
		});
	});
});
