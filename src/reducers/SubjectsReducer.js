import {
  SELECT_SUBJECT,
  UNSELECT_SUBJECT,
} from '../actions/Subject/SubjectActionTypes';

const INITIAL_STATE = {
  selectedSubjects: [],
  allSubjects: ['Matematica', 'Fisica', 'Sistemas operativos', 'Economia'],
};

const SubjectsReducer = (state = INITIAL_STATE, action) => {
  const {selectedSubjects, allSubjects} = state;
  let subjectName, newState;

  switch (action.type) {
    case SELECT_SUBJECT:
      subjectName = action.payload;
      allSubjects.splice(allSubjects.indexOf(subjectName), 1);

      newState = {
        selectedSubjects: [...selectedSubjects, subjectName],
        allSubjects: [...allSubjects],
      };

      return newState;
    case UNSELECT_SUBJECT:
      subjectName = action.payload;
      selectedSubjects.splice(selectedSubjects.indexOf(subjectName), 1);

      newState = {
        selectedSubjects: [...selectedSubjects],
        allSubjects: [...allSubjects, subjectName],
      };

      return newState;
    default:
      return state;
  }
};

export default SubjectsReducer;
