import {SELECT_SUBJECT, UNSELECT_SUBJECT} from './SubjectActionTypes';

export const selectSubject = subjectName => ({
  type: SELECT_SUBJECT,
  payload: subjectName,
});

export const unselectSubject = subjectName => ({
  type: UNSELECT_SUBJECT,
  payload: subjectName,
});
