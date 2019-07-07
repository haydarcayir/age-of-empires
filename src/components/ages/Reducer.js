import { SET_AGE_FILTER } from "./Action"

export const initialAgeState = [
	{ filter: "All", isActive: true },
	{ filter: "Dark", isActive: false },
	{ filter: "Feudal", isActive: false },
	{ filter: "Castle", isActive: false },
	{ filter: "Imperial", isActive: false }
]

export function ageFilterReducer(state = initialAgeState, action) {
	switch (action.type) {
		case SET_AGE_FILTER:
			return state.map(st => {
				if (st.filter === action.payload.filter) {
					return {
						...st,
						isActive: !st.isActive
					}
				} else {
					return {
						...st,
						isActive: false
					}
				}
			})
		default:
			return state
	}
}
