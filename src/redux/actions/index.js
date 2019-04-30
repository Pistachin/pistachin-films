import { SHOW_CONTENT } from '../constants/action-types'

export const showContent = (payload) => {
	return { type: SHOW_CONTENT, payload }
}