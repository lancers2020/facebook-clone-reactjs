import React from 'react';
import { createUseStyles } from 'react-jss';

//the card should have properties to be
//passed such as: input, button

function Card({ padding, contents, margin, border, color, width, height }) {
  const useStyles = createUseStyles({
    wrapper: {
      boxShadow: '0 1px 2px lightgrey',
      border: border,
      borderRadius: '12px',
      backgroundColor: '#fff',
      margin: margin,
      color: color,
      width: width,
      height: height,
      padding: padding,
    },
  });
  const classes = useStyles();
  return <div className={classes.wrapper}>{contents}</div>;
}
export default Card;
