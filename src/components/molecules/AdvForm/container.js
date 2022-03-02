import React from "react";
import { connect } from "react-redux";
import {
  actionGetStartYear,
  actionGetExperience,
  actionGetEndLine,
} from "src/store/actions/actionExperience";
import AdvForm from "./component";
import { selectEndLine } from "src/utils/SelectEndLine";

function AdvFormContainer(props) {
  const currentYear = new Date().getFullYear();

  const handleInputChange = (event) => {
    const exp =
      typeof +event.target.value === "number" &&
      event.target.value.length === 4 &&
      event.target.value <= currentYear
        ? currentYear - event.target.value
        : "";
    const end = selectEndLine(exp);
    props.getStartYear(event.target.value);
    props.getExperience(exp);
    props.getEndLine(end);
  };

  return (
    <AdvForm
      startYear={props.startYear}
      typeStartYear={handleInputChange}
      experience={props.experience}
      endLine={props.endLine}
    />
  );
}

const mapStateToProps = function (state) {
  return {
    startYear: state.experience.startYear,
    experience: state.experience.experience,
    endLine: state.experience.endLine,
  };
};

const mapDispatchToProps = {
  getStartYear: actionGetStartYear,
  getExperience: actionGetExperience,
  getEndLine: actionGetEndLine,
};

export const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvFormContainer);
