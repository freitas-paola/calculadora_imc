import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const weightNum = Number(weight);
  const heightNum = Number(height);
  const result = weightNum / (heightNum * heightNum);

  function displayIMC() {
    if (weightNum > 0 && heightNum > 0) {
      return <p>Seu IMC é: {Math.floor(result)}</p>;
    } else {
      return <p>Complete os campos.</p>;
    }
  }

  function displayInfo() {
    if (weightNum > 0 && heightNum > 0 && result < 18.5) {
      return <p className={styles.danger}>Você está abaixo do peso</p>;
    }
    if (weightNum > 0 && heightNum > 0 && result >= 18.5 && result <= 24.9) {
      return <p className={styles.info}>Você está com o peso normal</p>;
    }
    if (weightNum > 0 && heightNum > 0 && result >= 25 && result <= 29.9) {
      return <p className={styles.warn}>Você está com excesso de peso</p>;
    }
    if (weightNum > 0 && heightNum > 0 && result >= 30 && result <= 34.9) {
      return <p className={styles.danger}>Você está com obesidade classe I</p>;
    }
    if (weightNum > 0 && heightNum > 0 && result >= 35 && result <= 39.9) {
      return <p className={styles.danger}>Você está com obesidade classe II</p>;
    }
    if (weightNum > 0 && heightNum > 0 && result >= 40) {
      return (
        <p className={styles.danger}>Você está com obesidade classe III</p>
      );
    }
  }

  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="number"
          min={0}
          step=".01"
          placeholder="peso"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          min={0}
          step=".01"
          placeholder="altura"
          onChange={(e) => setHeight(e.target.value)}
        />
        {displayIMC()}
        {displayInfo()}
      </form>
    </>
  );
};

export default Form;
