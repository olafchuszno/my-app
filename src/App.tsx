import React from 'react';
import { NumberInput } from './NumberInput/NumberInput';
import './App.css';
import { ReactLogoSVG } from './ReactLogoSVG';
import WasmShortLogo from './wasm-short-logo.png'

const addButtonStyles = {
  backgroundColor: '#654ef0',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
}

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
      <button style={addButtonStyles} onClick={handleSumNumbers}>
        Click here to "Add" numbers with WebAssembly
      </button>
      <strong className="tooltip-container">
        Where is the WebAssembly code coming from?
        <span className="tooltip-content">Check the Network Tab and look for main.wasm!</span>
      </strong>
    </div>
  );
};
