		import { ASSOC_QUESTION_USER, ASSOC_ANSWER_USER, GET_ALL_USERS  } from '../actions/types'

export default function authUser(state = {}, action){
	switch(action.type){
		case GET_ALL_USERS:
			return {
				...state, 
				...action.users
			}
		case ASSOC_QUESTION_USER:
			return {
				...state, 
				[action.question.author]: {
					...state[action.question.author], 
					questions: state[action.question.author].questions.concat([action.question.id]) 
				}
			}
		case ASSOC_ANSWER_USER:
			return {
				...state, 
				[action.authedUser]: {
					...state[action.authedUser], 
					answers:{
						...state[action.authedUser].answers, 
						[action.qid]:action.answer 
					}
				}
			}
		default:
			return state
	}
}