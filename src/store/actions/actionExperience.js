import {
  START_YEAR,
  EXPERIENCE,
  END_LINE,
} from "../actionTypes/actionTypesNames";

export function actionGetStartYear(value) {
  return { type: START_YEAR, startYear: value };
}

export function actionGetExperience(value) {
  return { type: EXPERIENCE, experience: value };
}

export function actionGetEndLine(value) {
  return { type: END_LINE, endLine: value };
}
