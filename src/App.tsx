import React from 'react';
import { NumberInput } from './NumberInput/NumberInput';
import './App.css';
import { ReactLogoSVG } from './ReactLogoSVG';
import WasmShortLogo from './wasm-short-logo.png'



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
      <header className='Logos-Wrapper'>
        <ReactLogoSVG />
        <div style={{ fontSize: '40px' }}>+</div>
        <img height={100} src={WasmShortLogo} alt="Wasm logo" />
      </header>
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
    </div>
  );
};
