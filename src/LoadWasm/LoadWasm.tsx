import React, { useEffect } from 'react';
import './wasm_exec.js';
import './wasmTypes.d.ts';
import './LoadWasm.css';

function getStaticAssetPath(filename: string): string {
  const publicUrl: string = process.env.PUBLIC_URL || '';

  if (publicUrl === '') {
    return filename
  }

  const assetDirectory = '/static/js/';
  return `${publicUrl}${assetDirectory}${filename}`;
}

async function loadWasm(): Promise<void> {
  const goWasm = new window.Go();
  const result = await WebAssembly.instantiateStreaming(
    fetch(getStaticAssetPath('main.wasm')),
    goWasm.importObject
  );
  goWasm.run(result.instance);
}

export const LoadWasm: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    loadWasm().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="LoadWasm">loading WebAssembly...</div>;
  } else {
    return <>{children}</>;
  }
};
