import { SET_ACTIVE_COST_FILTER, SET_COST_FILTER } from "./Action"

export const initialCostState = [
	{ name: "Wood", maxValue: 0, isActive: false },
	{ name: "Food", maxValue: 0, isActive: false },
	{ name: "Gold", maxValue: 0, isActive: false }
]

export function costFilterReducer(state = initialCostState, action) {
	switch (action.type) {
		case SET_COST_FILTER:
			return state.map(st => {
				if (st.name === action.payload.name) {
					return {
						...st,
						maxValue: action.payload.maxValue
					}
				} else {
					return { ...st }
				}
			})
		case SET_ACTIVE_COST_FILTER:
			return state.map(st => {
				if (st.name === action.payload.name) {
					return {
						...st,
						isActive: !st.isActive
					}
				} else {
					return { ...st }
				}
			})
		default:
			return state
	}
}
