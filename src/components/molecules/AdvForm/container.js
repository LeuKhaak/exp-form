import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetStartYear,
  actionGetExperience,
  actionGetEndLine,
} from "src/store/actions/actionExperience";
import AdvForm from "./component";

function AdvFormContainer() {
  const dispatch = useDispatch();

  const startYear = useSelector((state) => state.cards.startYear);
  const experience = useSelector((state) => state.cards.experience);
  const endLine = useSelector((state) => state.cards.endLine);

  const currentYear = new Date().getFullYear();

  const selectEndLine = (exp) => {
    const lastNumber = exp % 10;
    switch (true) {
      case exp === 1 || (lastNumber === 1 && exp !== 11):
        return "год";
      case exp < 5 || (exp > 20 && lastNumber > 1 && lastNumber < 5):
        return "года";
      default:
        return "лет";
    }
  };

  const typeStartYear = (event) => {
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
      typeStartYear={typeStartYear}
      experience={experience}
      endLine={endLine}
    />
  );
}

export const container = AdvFormContainer;
