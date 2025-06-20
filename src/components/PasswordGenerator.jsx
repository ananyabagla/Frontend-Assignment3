import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

const PasswordGenerator = () => {
  const [length, setLength] = useState(20);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numeric, setNumeric] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const generatePassword = () => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numeric) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div
      className={`p-6 rounded-2xl shadow-2xl transition-all duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } w-[450px] h-[550px]`}
    >
      {/* Toggle switch */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-mono">Generate a secure password</h2>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 ${
              darkMode ? "bg-green-400" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                darkMode ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Password display */}
      <div className="relative mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className={`w-full p-2 rounded font-mono ${
            darkMode
              ? "bg-gray-700 text-green-400"
              : "bg-gray-100 text-green-600"
          }`}
        />
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 text-xl"
        >
          <FiCopy />
        </button>
      </div>

      <hr className="border-gray-600 mb-4" />

      <h3 className="mb-2 font-mono text-lg">Customize your password</h3>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          <span>Uppercase</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          <span>Lowercase</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={numeric}
            onChange={() => setNumeric(!numeric)}
          />
          <span>Numeric</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          <span>Symbols</span>
        </label>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span>Password Length:</span>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="4"
            max="100"
            className="w-16 bg-gray-600 rounded p-1 text-center text-white"
          />
        </div>
        <input
          type="range"
          min="4"
          max="100"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded-xl font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default PasswordGenerator;
