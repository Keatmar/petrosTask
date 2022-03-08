import { makeStyles } from '@mui/styles';

export default makeStyles(
  (theme) => ({
    subtitle: {
      position: 'static',
      '& p': {
        width: 480,
        position: 'static',
        fontWeight: '500'
      }
    },

    subtitle1: {
      paddingTop: 50
    },

    subtitle2: {
      paddingTop: 20
    },

    authBlockDataHalf: {
      width: 200
    },

    authForgotPassword: {
      textDecoration: 'none',
      position: 'absolute',
      top: 0,
      marginRight: '-8%',
      right: 0,
      color: '#396fd4',
      '&:hover': {
        color: '#7da8f9'
      }
    },

    authCodeInput: {
      display: 'flex !important',
      flexDirection: 'row',
      marginBottom: 20,
      '& input': {
        fontSize: 28,
        textAlign: 'center',
        color: '#000000a6',
        width: 50,
        height: 50,
        paddingLeft: 4,
        paddingRight: 3,
        fontFamily: 'Inter Semibold, sans-serif',
        paddingBottom: 1,
        paddingTop: 1,
        borderRadius: 6,
        border: '1px solid #dbdbdb',
        '&:focus': {
          borderColor: '#40a9ff'
        },
        '&:active': {
          borderColor: '#40a9ff'
        },
        '&:hover': {
          borderColor: '#40a9ff'
        }
      }
    },

    authCodeVerificationCode: {
      justifyContent: 'center',
      display: 'flex'
    },

    authCodeVerificationBtn: {
      alignItems: 'flex-start',
      appearance: 'button',
      backgroundColor: '#415bf6',
      border: 'none',
      borderRadius: 6,
      color: '#fff',
      cursor: 'pointer',
      fontFamily: 'Inter Semibold, sans-serif',
      fontSize: 14,
      fontWeight: 'bolder',
      height: 44,
      paddingRight: 37,
      paddingLeft: 37,
      marginTop: 4,
      '-webkit-transition': 'background 0.3s ease-in-out',
      '-o-transition': 'background 0.3s ease-in-out',
      transition: 'background 0.3s ease-in-out',
      '&:hover': {
        background: '#5668d7'
      },
      '@media (max-width: 580px)': {
        width: '100%'
      }
    },

    doubleRow: {
      display: '-webkit-box',
      display: '-ms-flexbox',
      display: 'flex',
      '-webkit-box-pack': 'justify',
      '-ms-flex-pack': 'justify',
      justifyContent: 'space-between'
    }
  }),
  { name: 'ForgotPassword' }
);
