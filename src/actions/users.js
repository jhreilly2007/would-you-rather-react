import { ASSOC_ANSWER_USER, ASSOC_QUESTION_USER, GET_ALL_USERS } from './types'
import { saveAnswer } from '../actions/questions';
import { _saveQuestionAnswer } from '../_DATA';

export function AssocAnswerWithUser(authUser, id, answer){
  return{
    type: ASSOC_ANSWER_USER, 
    authedUser: authUser,
    qid: id, 
    answer
  } 
}

export function AssocQuestionWithUser(question){
  return{
    type: ASSOC_QUESTION_USER, 
    question
  }
}
export function getAllUsers(users){
  return{
    type: GET_ALL_USERS, 
    users
  }
}

/**Handler functions*/
export function handleAssocAnswerWithUser(authedUser, qid, answer) {
  return dispatch => {
    return _saveQuestionAnswer({ authedUser, qid, answer})
    .then(
      () => {
        dispatch(AssocAnswerWithUser(authedUser, qid, answer));
        dispatch(saveAnswer(answer, qid));
      }
    )
  }
}