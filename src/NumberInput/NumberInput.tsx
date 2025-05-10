import React from 'react';

export const NumberInput: React.FC<{
  value: number;
  setValue: (number: number) => void;
  label: string;
}> = ({ value, setValue, label }) => {
  return (
    <label style={{ display: 'flex', gap: '8px' }}>
      {label}
      <input
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(+e.target.value);
        }}
        type="number"
      />
    </label>
  );
};
