import React from 'react';
import { NumberInput } from './NumberInput/NumberInput.tsx';
import './App.css';

export const App = () => {
  const [firstNumberValue, setFirstNumberValue] = React.useState(0);
  const [secondNumberValue, setSecondNumberValue] = React.useState(0);

  const handleSumNumbers = () => {
    alert(
      `Result from WebAssembly: ${window.myGolangFunction(
        firstNumberValue,
        secondNumberValue
      )}`
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <NumberInput
          value={firstNumberValue}
          setValue={setFirstNumberValue}
          label={'First number'}
        />
        <NumberInput
          value={secondNumberValue}
          setValue={setSecondNumberValue}
          label={'Second number'}
        />
        <button onClick={handleSumNumbers}>
          Click here to "Add" numbers with WebAssembly
        </button>
      </header>
    </div>
  );
};
