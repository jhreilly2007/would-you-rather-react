    import { getAllUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { _getUsers, _getQuestions } from "../_DATA";

function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getQuestions(questions));
      dispatch(getAllUsers(users));
    });
  };
}