import {GET_QUESTIONS, ADD_QUESTION , SAVE_ANSWER } from '../actions/types'

function Questions(state = [], action){
	/** pass in current state as well as action
	 * first time function is called it will be empty
	 * This is a Reducer function as it it taking in a state
	 * and action and returns a new state. A Reducer must be a 
	 * pure function*/
	switch(action.type){
		case GET_QUESTIONS:
			return {
				...state, 
				...action.questions
			}
		case ADD_QUESTION:
		const {question} = action;
			return {
				...state, 
				[question.id]: question
			}
		case SAVE_ANSWER:
		const {answer, qid, authedUser } = action;
		/**merged object: update the complete property on whatever id
		 * creates a new object and merges properties onto new object except the 
		 * objects that are complete
		 * Change the value of the complete property on whatever id is passed in*/
			return {
				...state, 
				[qid]:{
					...state[qid], 
					[answer]:{
						...state[qid][answer], 
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};
		default:
			return state
	}
}

export default Questions;