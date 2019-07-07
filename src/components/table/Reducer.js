import { SHOW_ALL_UNITS, SHOW_ONE_UNIT } from "./Action"

export function unitsReducer(state = [], action) {
	switch (action.type) {
		case SHOW_ALL_UNITS:
			return [...action.payload]
		default:
			return state
	}
}

export function oneUnitReducer(state = {}, action) {
	switch (action.type) {
		case SHOW_ONE_UNIT:
			return { ...action.payload }
		default:
			return state
	}
}
