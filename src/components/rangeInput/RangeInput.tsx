import "./rangeInput.scss";

interface IProps {
    range: string;
    setRange: (value: string) => void;
}

export const RangeInput = ({ range, setRange }: IProps) => {
    
    const handleRange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRange(e.target.value);
  };

  return (
    <div className="range-box">
      <label htmlFor="lenght-password">
        <span>Character Lenght</span>
        <span>{range}</span>
      </label>
      <input
        name="lenght-password"
        type="range"
        min="5"
        max="20"
        value={range}
        onChange={handleRange}
      />
    </div>
  );
};
