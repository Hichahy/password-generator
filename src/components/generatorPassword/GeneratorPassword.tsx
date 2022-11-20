import React, { useState } from "react";
import { GeneratedPassword } from "../generatedPassword";
import { StrenghtWidged } from "../strenghtWidget";
import { RangeInput } from "../rangeInput";
import { CheckboxInputs } from "../checkboxInputs";
import toast, { Toaster } from "react-hot-toast";
import "./generatorPassword.scss";

export const GeneratorPassword = () => {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState("5");
  const [checkbox, setCheckbox] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false
  });

  const numbers = "0123456789";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

  const handleGeneratePassword = (e: any) => {
    if (
      !checkbox.uppercase &&
      !checkbox.lowercase &&
      !checkbox.number &&
      !checkbox.symbol
    ) {
      toast("first check at least one checkbox", {
        icon: "🥊",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
        }
      });
    }
    let characterList = "";

    if (checkbox.lowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (checkbox.uppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (checkbox.number) {
      characterList = characterList + numbers;
    }

    if (checkbox.symbol) {
      characterList = characterList + symbols;
    }

    setPassword(createPassword(characterList));
  };

  const createPassword = (characterList: string) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < +range; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  return (
    <>
      <h1>Password Generator</h1>
      <GeneratedPassword password={password} />
      <section className="options-container">
        <form>
          <RangeInput range={range} setRange={setRange} />
          <CheckboxInputs checkbox={checkbox} setCheckbox={setCheckbox} />
        </form>
        <StrenghtWidged checkbox={checkbox} />
        <button onClick={handleGeneratePassword}>
          Generate<i className="bi bi-arrow-right-short"></i>
        </button>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
