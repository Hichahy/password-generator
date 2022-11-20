import React, { useState, useEffect } from "react";
import "./strenghtWidget.scss";

type TChecbox = {
  [key: string]: boolean;
};

interface IProps {
  checkbox: TChecbox;
}

export const StrenghtWidged = ({ checkbox }: IProps) => {
  const [safetyLvlPoints, setSafetyLvlPoints] = useState<any>(null);
  const [safetyLvl, setSafetyLvl] = useState("Low");

  const handleAddSafetyPoints = () => {
    let points = 0;
    
    if (checkbox.uppercase) {
      points += 1;
    } else if (checkbox.uppercase) {
      points -= 1;
    }
    if (checkbox.lowercase) {
      points += 1;
    } else if (checkbox.lowercase) {
      points -= 1;
    }
    if (checkbox.number) {
      points += 1;
    } else if (checkbox.number) {
      points -= 1;
    }
    if (checkbox.symbol) {
      points += 1;
    } else if (checkbox.symbol) {
      points -= 1;
    }
    setSafetyLvlPoints(points);
  };

  const handleSafetyLvl = () => {
    if (safetyLvlPoints < 2) {
      setSafetyLvl("Low");
    } else if (safetyLvlPoints < 4) {
      setSafetyLvl("Medium");
    } else if (safetyLvlPoints === 4) {
      setSafetyLvl("Strong");
    }
  };

  useEffect(() => {
    handleAddSafetyPoints();
    handleSafetyLvl();
  });

  return (
    <section className="widget-container">
      <div>
        <p>strenght</p>
        <label className="tile-box">
          {safetyLvl}
          <span className={`${safetyLvlPoints < 1 ? "" : "lvl1"}`}></span>
          <span className={`${safetyLvlPoints < 2 ? "" : "lvl2"}`}></span>
          <span className={`${safetyLvlPoints < 3 ? "" : "lvl3"}`}></span>
          <span className={`${safetyLvlPoints < 4 ? "" : "lvl4"}`}></span>
        </label>
      </div>
    </section>
  );
};
