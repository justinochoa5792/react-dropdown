import { useState } from "react";
import "./App.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "vaniall", label: "Vanilla" },
  { value: "strawberry", label: "Strawberry" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "400px",
    borderRadius: "8px",
    boxShadow: "none",
    textAlign: "left",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "grey",
    backgroundColor: state.isSelected ? "lightgrey" : "white",
  }),
  menu: (provided) => ({
    ...provided,
    width: "400px",
  }),
};

function App() {
  const [optionPicked, setOptionPicked] = useState("");
  return (
    <div className="App">
      <h1>React Dropdown</h1>
      <span>Option picked by user: {optionPicked.label}</span>
      <Select
        options={options}
        styles={customStyles}
        onChange={(option) => setOptionPicked(option)}
      />
    </div>
  );
}

export default App;
