import React from 'react';

function Overlay(): JSX.Element {
  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
      <h1 className="text-7xl font-bold text-white">Welcome to Stream</h1>
    </div>
  );
}

export default Overlay;