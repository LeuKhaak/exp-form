import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetStartYear,
  actionGetExperience,
  actionGetEndLine,
} from "src/store/actions/actionExperience";
import AdvForm from "./component";
import { selectEndLine } from "src/utils/SelectEndLine";

function AdvFormContainer() {
  const dispatch = useDispatch();

  const startYear = useSelector((state) => state.cards.startYear);
  const experience = useSelector((state) => state.cards.experience);
  const endLine = useSelector((state) => state.cards.endLine);

  const currentYear = new Date().getFullYear();

  const handleInputChange = (event) => {
    const exp =
      typeof +event.target.value === "number" &&
      event.target.value.length === 4 &&
      event.target.value <= currentYear
        ? currentYear - event.target.value
        : "";
    const end = selectEndLine(exp);
    dispatch(actionGetStartYear(event.target.value));
    dispatch(actionGetExperience(exp));
    dispatch(actionGetEndLine(end));
  };

  return (
    <AdvForm
      startYear={startYear}
      typeStartYear={handleInputChange}
      experience={experience}
      endLine={endLine}
    />
  );
}

export const container = AdvFormContainer;
