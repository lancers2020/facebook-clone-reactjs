import React from 'react';

function ButtonTest({ className, label, iconLeft }) {
  return (
    <div className={className}>
      <div style={{ marginRight: 10 }}>{iconLeft}</div>
      {label}
    </div>
  );
}

export default ButtonTest;
