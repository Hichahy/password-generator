import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./generatedPassword.scss";

interface IProps {
  password: string;
}

export const GeneratedPassword = ({ password }: IProps) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(password);
    } else {
      return document.execCommand("copy", true, password);
    }
  }

  const handleCopyClick = () => {
    if (password) {
      toast("copied", {
        icon: "🤙",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
        }
      });
    }
    copyTextToClipboard()
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="gen-password">
      <p id="myInput">{password}</p>
      <i
        onClick={handleCopyClick}
        className={`${
          isCopied && password ? "bi bi-check" : "bi bi-clipboard"
        }`}
      ></i>
    </section>
  );
};
