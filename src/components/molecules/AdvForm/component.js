import React from "react";
import * as styles from "./styles.module.scss";

function AdvForm({ startYear, typeStartYear, experience, endLine }) {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <form className={styles.form}>
          <label className={styles.field}>
            <span>Год начала работы:</span>
            <input
              type="text"
              placeholder="Введите год в формате ГГГГ"
              value={startYear}
              onChange={typeStartYear}
            />
          </label>
          <label className={styles.field}>
            <span>Стаж:</span>
            <input
              type="text"
              placeholder={experience + " " + (experience ? endLine : "")} // the value can be used in the placeholder or automatically entered in the field (see code below)

              //value={experience + " " + (experience ? endLine : "")}
              //readOnly
            />
          </label>
        </form>
      </div>
    </section>
  );
}

export default AdvForm;
