import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

function Button({
  label,
  onClick,
  fontSize,
  width,
  backgroundColor = '#1877f2',
}) {
  const UseStyles = createUseStyles({
    container: {
      backgroundColor: backgroundColor,
      padding: '8px 20px 8px 20px',
      color: 'white',
      borderRadius: '6px',
      fontSize: fontSize,
      fontWeight: '700',
      fontFamily: 'Helvetica, Arial, sansSerif',
      lineHeight: '48px',
      justifyContent: 'center',
      //   textAlign: 'center',
      verticalAlign: 'middle',
      width: width,
      margin: '0 auto',
      cursor: 'pointer',
    },
  });
  const classes = UseStyles();
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  return (
    //use ternary operator in later events where it checks
    //if the user will be redirected to
    //homepage, or to registration page.
    <div className={classes.container} onClick={onClick}>
      <Link style={navStyle} to='/homepage'>
        {label}
      </Link>
    </div>
  );
}

export default Button;
