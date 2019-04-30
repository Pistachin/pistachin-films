
import { SHOW_CONTENT } from '../constants/action-types'

const initialState = {
	visibleContent: false,
	contentType: ''
}

const rootReducer = (state = initialState, action) => {
	if (action.type === SHOW_CONTENT) {
		return Object.assign({}, state, {
			visibleContent: !state.visibleContent,
			contentType: action.payload.contentType
		})
	}
	return state
}

export default rootReducer
