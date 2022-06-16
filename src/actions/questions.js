import { GET_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from './types'
import { _saveQuestion } from '../_DATA'
import { AssocQuestionWithUser } from '../actions/users'

export function getQuestions(questions){
  return{
    type: GET_QUESTIONS, 
    questions
  }
}

function addQuestion(question){
  return{
    type: ADD_QUESTION, 
    question
  }
}

export function saveAnswer(answer, qid){
  return{
    type: SAVE_ANSWER, 
    answer,
    qid
  }
}

/**Handler functions*/
export function handleAddQuestion(answer1, answer2, author) {
  return dispatch => {
    return _saveQuestion({ author:author, optionOneText:answer1, optionTwoText:answer2})
    .then(
      question => {
        dispatch(addQuestion(question))
        dispatch(AssocQuestionWithUser(question))
      }
    )
  }
}