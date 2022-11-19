import React, { useState } from "react";
import { GeneratedPassword } from "../generatedPassword";
import { StrenghtWidged } from "../strenghtWidget";
import { RangeInput } from "../rangeInput";
import { CheckboxInputs } from "../checkboxInputs";
import "./generatorPassword.scss";

export const GeneratorPassword = () => {
  const [range, setRange] = useState("5");
  const [checkbox, setCheckbox] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false
  });

  console.log(range);
  console.log(checkbox);

  return (
    <>
      <h1>Password Generator</h1>
      <GeneratedPassword />
      <section className="options-container">
        <form>
          <RangeInput range={range} setRange={setRange} />
          <CheckboxInputs checkbox={checkbox} setCheckbox={setCheckbox} />
        </form>
        <StrenghtWidged />
        <button type="submit">
          generate<i className="bi bi-arrow-right-short"></i>
        </button>
      </section>
    </>
  );
};
