import React, { useState } from 'react';
import Button from './../components/Button';
import Input from './../components/Input';
import Card from './../components/Card';
import { createUseStyles } from 'react-jss';

function TempCard() {
  const tempUseStyles = createUseStyles({
    tempCard: {
      //   border: 'skyblue solid 5px',
      padding: '2%',
      paddingBottom: '4%',
    },
    buttons: {
      lineHeight: '10px',
      padding: '2%',
      textAlign: 'center',
    },
    input: {
      padding: '2%',
    },
    forgot: {
      textDecorationLine: 'none',
      color: '#1877f2',
      fontWeight: '500',
      fontFamily: 'Helvetica, Arial, sansSerif',
    },
    break: {
      borderBottom: 'lightgrey solid 2px',
      marginBottom: '35px',
    },
    h3: {
      margin: '6% 0% 7% 0%',
    },
  });
  const classes = tempUseStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };
  const inputPassword = e => {
    setPassword(e.target.value);
    console.log(password);
  };
  return (
    <div className={classes.tempCard}>
      <div>
        <div className={classes.input}>
          <Input
            placeholder='Email or Phone Number'
            onChange={inputEmail}
            value={email}
            isCurved={false}
            width='99%'
            lineHeight='60px'
            borderRadius='6px'
            margin='2px 0px 2px 20px'
            border='lightgrey solid 2px'
          />
        </div>
        <div className={classes.input}>
          <Input
            placeholder='Password'
            onChange={inputPassword}
            value={password}
            type='password'
            width='99%'
            lineHeight='60px'
            borderRadius='6px'
            margin='2px 0px 2px 20px'
            border='lightgrey solid 2px'
          />
        </div>
      </div>
      <div>
        <div className={classes.buttons}>
          <Button label='Login' fontSize='26px' />
          <h3 className={classes.h3}>
            <a className={classes.forgot} href='www.facebook.com'>
              Forgot Password?
            </a>
          </h3>
          <div className={classes.break}></div>
          <Button
            label='Create New Account'
            backgroundColor='#42B72A'
            width='43%'
            fontSize='22px'
          />
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  const useStyles = createUseStyles({
    wrapper1: {
      //   border: 'yellow solid 2px',
      float: 'right',
      width: '550px',
      marginTop: '12%',
      marginBottom: '10%',
      marginRight: '15%',
    },

    wrapper2: {
      //   border: 'red solid 2px',
      float: 'left',
      width: '550px',
      marginTop: '12%',
      marginLeft: '10%',
    },
    facebook: {
      fontSize: '75px',
      fontFamily: 'Helvetica, Arial, sansSerif',
      color: '#1877f2',
      fontWeight: '700',
      paddingTop: 'none',
      letterSpacing: 'none',
    },
    miniwrapper1: {
      //   border: 'violet solid 2px',
      width: 'auto',
      margin: '0px auto',
    },
    h3: {
      color: '#1c1e21',
      fontFamily: 'Helvetica, Arial, sansSerif',
      fontSize: '32px',
      fontWeight: '500',
      lineHeight: '38px',
      width: '550px',
    },
    wrapper3: {
      width: '75%',
      marginLeft: '20%',
    },
    createAPage1: {
      fontSize: '18px',
      fontWeight: '100',
      textDecoration: 'none',
      color: '#1c1e21',
      fontFamily: 'Helvetica, Arial, sansSerif',
      textAlign: 'center',
    },
    createAPage2: {
      fontSize: '18px',
      fontWeight: '700',
      textDecoration: 'none',
      color: '#1c1e21',
      fontFamily: 'Helvetica, Arial, sansSerif',
      textAlign: 'center',
    },
  });

  const classes = useStyles();
  //const cardContents = <Button label='Login' />;
  return (
    <div>
      <div className={classes.wrapper2}>
        <div className={classes.miniwrapper1}>
          <div className={classes.facebook}>facebook</div>
          <h3 className={classes.h3}>
            Connect with friends and the world around you on Facebook.
          </h3>
        </div>
      </div>
      <div className={classes.wrapper3}>
        <div className={classes.wrapper1}>
          <Card
            contents={TempCard()}
            margin={'0px auto'}
            border='lightgrey solid 3px'
          />
          <div className={classes.createAPageDiv}>
            <h5 className={classes.createAPage1}>
              <a className={classes.createAPage2} href='www.facebook.com'>
                <>Create a page </>
              </a>
              for a celebrity, band or business.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
