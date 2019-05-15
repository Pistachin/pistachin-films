
import { SHOW_CONTENT } from '../constants/action-types'

const initialState = {
	visibleContent: false,
	contentType: ''
}

const rootReducer = (state = initialState, action) => {
	if (action.type === SHOW_CONTENT) {
		console.log(action.payload.visibleContent);
		return Object.assign({}, state, {
			visibleContent: action.payload.visibleContent,
			contentType: action.payload.contentType
		})
	}
	return state
}

export default rootReducer
