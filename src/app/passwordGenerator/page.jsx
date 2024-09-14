"use client";
import React, { useState } from "react";
import styles from "./password.module.css";

const passwordGenrator = () => {
  const [length, setLength] = useState(15);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }
  function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }
  function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function generatePassword() {
    const len = length > 30 ? 30 : length < 2 ? 2 : length;
    let passW = "";
    if (uppercase) {
      passW += getUppercase();
    }
    if (lowercase) {
      passW += getLowercase();
    }
    if (number) {
      passW += getNumber();
    }
    if (symbol) {
      passW += getSymbol();
    }
    for (let i = passW.length; i < len; i++) {
      const x = generateX();
      passW += x;
    }
    setPassword(passW);
  }

  function generateX() {
    const xs = [];
    if (uppercase) {
      xs.push(getUppercase());
    }
    if (lowercase) {
      xs.push(getLowercase());
    }
    if (number) {
      xs.push(getNumber());
    }
    if (symbol) {
      xs.push(getSymbol());
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
  }

  return (
    <div className="flex justify-center items-center bg-gray-800">
      <div className={styles.body}>
        <div className={styles.pwcontainer}>
          <div className={styles.pwheader}>
            <div className={styles.pw}>
              <span id="pw">
                {password.length > 0 ? password : "yourPassword"}
              </span>
              <button
                id="copy"
                onClick={() => {
                  navigator.clipboard.writeText(password),
                    alert("Password saved to Clipboard");
                }}
              >
                Copy
              </button>
            </div>
          </div>
          <div className={styles.pwbody}>
            <div className={styles.formcontrol}>
              <label htmlFor="len">Password Length</label>
              <input
                className={styles.numText}
                id="len"
                value={length}
                type="number"
                min="2"
                max="30"
                onChange={() => setLength(len.value)}
              />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor="upper">Contain Uppercase Letters</label>
              <input
                id="upper"
                type="checkbox"
                checked={uppercase}
                onChange={() => {
                  setUppercase(!uppercase);
                }}
              />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor="lower">Contain Lowercase Letters</label>
              <input
                id="lower"
                type="checkbox"
                checked={lowercase}
                onChange={() => {
                  setLowercase(!lowercase);
                }}
              />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor="number">Contain Numbers</label>
              <input
                id="number"
                type="checkbox"
                checked={number}
                onChange={() => {
                  setNumber(!number);
                }}
              />
            </div>
            <div className={styles.formcontrol}>
              <label htmlFor="symbol">Contain Symbols</label>
              <input
                id="symbol"
                type="checkbox"
                checked={symbol}
                onChange={() => {
                  setSymbol(!symbol);
                }}
              />
            </div>
            <button
              className={styles.generate}
              id="generate"
              onClick={() => generatePassword()}
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default passwordGenrator;
