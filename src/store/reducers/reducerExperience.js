import {
  START_YEAR,
  EXPERIENCE,
  END_LINE,
} from "../actionTypes/actionTypesNames";

const initialState = {
  startYear: "",
  experience: "",
  endLine: "лет",
};

function loadCards(state = initialState, action) {
  switch (action.type) {
    case START_YEAR:
      return {
        ...state,
        startYear: action.startYear,
      };
    case EXPERIENCE:
      return {
        ...state,
        experience: action.experience,
      };
    case END_LINE:
      return {
        ...state,
        endLine: action.endLine,
      };
    default:
      return state;
  }
}
export default loadCards;
