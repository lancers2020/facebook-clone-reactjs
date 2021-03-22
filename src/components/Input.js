import React from 'react';
import { createUseStyles } from 'react-jss';

function Input({
  placeholder,
  value,
  onChange,
  type = 'text',
  isCurved,
  width,
  lineHeight,
  borderRadius,
  margin,
  border,
  background,
  letterSpacing,
}) {
  const useStyles = createUseStyles({
    wrapper: {
      fontSize: '17px',
      width: width,
      border: border,
      borderRadius: borderRadius,
      lineHeight: lineHeight,
      background: background,
      height: '55px',
    },
    input: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      border: 'none',
      outline: 'none',
      fontSize: '20px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      margin: margin,
      background: 'none',
      letterSpacing: letterSpacing,
    },
    curved: {
      fontSize: '17px',
      width: '99%',
      border: 'lightgrey solid 2px',
      borderRadius: '50px',
      lineHeight: '70px',
    },
  });
  const classes = useStyles();
  return isCurved ? (
    <div className={classes.curved}>
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  ) : (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
