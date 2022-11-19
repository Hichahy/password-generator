import "./checkInputs.scss";

type TChecbox = {
  [key: string]: boolean;
};

interface IProps {
  checkbox: TChecbox;
  setCheckbox: (checked: TChecbox) => void;
}

export const CheckboxInputs = ({ checkbox, setCheckbox }: IProps) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckbox({
      ...checkbox,
      [e.target.name]: (e.target.checked = !checkbox[e.target.name])
    });
  };

  return (
    <>
      <label className="b-contain">
        <span>Include Uppercase Letters</span>
        <input
          type="checkbox"
          name="uppercase"
          checked={checkbox.uppercase}
          onChange={handleCheckbox}
        />
        <div className="b-input"></div>
      </label>
      <label className="b-contain">
        <span>Include Lower Letters</span>
        <input
          type="checkbox"
          name="lowercase"
          checked={checkbox.lowercase}
          onChange={handleCheckbox}
        />
        <div className="b-input"></div>
      </label>
      <label className="b-contain">
        <span>Include Numbers</span>
        <input
          type="checkbox"
          name="number"
          checked={checkbox.number}
          onChange={handleCheckbox}
        />
        <div className="b-input"></div>
      </label>
      <label className="b-contain">
        <span>Include Symbols</span>
        <input
          type="checkbox"
          name="symbol"
          checked={checkbox.symbol}
          onChange={handleCheckbox}
        />
        <div className="b-input"></div>
      </label>
    </>
  );
};
