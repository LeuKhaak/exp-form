import React from "react";
import * as styles from "./styles.module.scss";
import AdvForm from "src/components/molecules/AdvForm";
function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>MAIN PAGE</div>
        <AdvForm />
      </div>
    </div>
  );
}

export default Main;
