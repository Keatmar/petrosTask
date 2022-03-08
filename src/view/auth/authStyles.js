import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    webkitBoxAlign: 'center',
    msFlexAlign: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 0,
    minHeight: 663,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#171a1f',
    fontFamily: 'Inter Regular, sans-serif',
    lineHeight: 1.5,
    'text-size-adjust': '100%'
  },

  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    '@media (max-width: 580px)': {
      width: '100%'
    }
  },

  blockData: {
    width: '100%',
    position: 'relative',
    marginBottom: 15,
    fontFamily: 'Inter',
    lineHeight: '21px',
    '& input': {
      boxSizing: 'content-box',
      fontFamily: 'Inter',
      fontSize: 14,
      width: '100%',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 4,
      paddingBottom: 4,
      position: 'relative',
      color: '#171a1f',
      lineHeight: '17px',
      height: 35,
      borderRadius: 6,
      border: '1px solid #dadfe2',
      '&::placeholder': {
        color: '#b7afaf'
      },
      '&:focus': {
        borderColor: '#415BF6'
      },
      '&:hover': {
        borderColor: '#415BF6'
      }
    }
  },

  blockForm: {
    width: 420,
    marginTop: 70,
    '@media (max-width: 1050px)': {
      top: 40,
      width: 360
    },
    '@media (max-width: 580px)': {
      width: 'auto',
      top: 40
    }
  },

  leftPic: {
    padding: 10,
    height: '95%',
    overflow: 'hidden',
    display: 'flex',
    width: '50%',
    borderRadius: 10,
    display: 'flex',
    '@media (max-width: 1250px)': {
      display: 'none'
    },
    '& img': {
      width: 550,
      objectFit: 'cover'
    }
  },

  smallImg: {
    position: 'absolute',
    left: '1%',
    top: '4%',
    color: '#415BF6',
    '& img': {
      width: 40,
      minWidth: 40,
      minHeight: 40,
      height: 40
    }
  },

  authLink: {
    position: 'absolute',
    width: 300,
    height: 17,
    right: 52,
    top: 54,
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: '17px',
    color: '#686E7C',
    textAlign: 'right',
    '& a': {
      fontFamily: 'Inter',
      color: '#396fd4',
      textDecoration: 'none',
      fontWeight: 'bold',
      '&:hover': {
        color: '#7da8f9'
      }
    },
    '@media (max-width: 1050px)': {
      display: 'none'
    }
  },

  authLinkRes: {
    display: 'none',
    width: 300,
    height: 17,
    fontFamily: 'Inter',
    fontSize: '14px !important',
    fontStyle: 'normal',
    lineHeight: '17px',
    color: '#686E7C',
    '& a': {
      fontFamily: 'Inter',
      color: '#396fd4',
      textDecoration: 'none',
      fontWeight: 'bold',
      '&:hover': {
        color: '#7da8f9'
      }
    },
    '@media (max-width: 1050px)': {
      display: 'block',
      textAlign: 'center'
    }
  },

  title: {
    position: 'relative',
    width: '100%',
    height: 31,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: '31px',
    color: '#171A1F',
    margin: 0
  },

  subtitle: {
    position: 'absolute',
    width: 333,
    height: 19,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '19px',
    color: '#686E7C',
    marginTop: 18,
    marginBottom: 0
  },

  submitBtn: {
    alignItems: 'flex-start',
    appearance: 'button',
    backgroundColor: '#415bf6',
    border: 'none',
    borderRadius: 6,
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'Inter',
    width: 179,
    fontWeight: 600,
    lineHeight: '17px',
    fontSize: 14,
    height: 44,
    marginTop: 4,
    left: 670,
    textAlign: 'center',
    top: 525,
    '&:hover': {
      background: '#5668d7'
    },
    '& span': {
      '& svg': {
        fontSize: 24
      }
    },
    '@media (max-width: 1050px)': {
      width: '110% !important'
    }
  },

  submitBtnDisable: {
    alignItems: 'flex-start',
    appearance: 'button',
    backgroundColor: '#5668d7',
    border: 'none',
    borderRadius: 6,
    color: '#fff',
    cursor: 'not-allowed',
    fontFamily: 'Inter',
    width: 179,
    fontWeight: 600,
    lineHeight: '17px',
    fontSize: 14,
    height: 44,
    marginTop: 4,
    left: 670,
    textAlign: 'center',
    top: 525,
    '& span': {
      '& svg': {
        fontSize: 24
      }
    },
    '@media (max-width: 1050px)': {
      width: '110% !important'
    }
  },

  secondBtn: {
    alignItems: 'flex-start',
    appearance: 'button',
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#F5F7F8',
    color: '#171A1F',
    cursor: 'pointer',
    fontFamily: 'Inter',
    width: 179,
    fontWeight: 600,
    lineHeight: '17px',
    fontSize: 14,
    height: 44,
    marginTop: 4,
    left: 670,
    textAlign: 'center',
    top: 525,
    '&:hover': {
      background: '#dfdfdf'
    },
    '& span': {
      '& svg': {
        fontSize: 24
      }
    },
    '@media (max-width: 1050px)': {
      width: '110% !important'
    }
  },

  secondBtnDisable: {
    alignItems: 'flex-start',
    appearance: 'button',
    border: 'none',
    borderRadius: 6,
    backgroundColor: '#dfdfdf',
    color: '#171A1F',
    cursor: 'not-allowed',
    fontFamily: 'Inter',
    width: 179,
    fontWeight: 600,
    lineHeight: '17px',
    fontSize: 14,
    height: 44,
    marginTop: 4,
    left: 670,
    textAlign: 'center',
    top: 525,
    '& span': {
      '& svg': {
        fontSize: 24
      }
    },
    '@media (max-width: 1050px)': {
      width: '110% !important'
    }
  },

  authLogo: {
    display: 'none',
    '@media (max-width: 1050px)': {
      display: 'block !important',
      marginBottom: '10% !important',
      height: 25,
      '& img': {
        height: '100%'
      }
    }
  },

  errorLabel: {
    color: '#ff4d4f !important',
    lineHeight: '21px !important'
  },

  errorInput: {
    borderColor: '#ff4d4f !important'
  },

  password: {
    display: 'flex',
    alignItems: 'center',
    width: '105%',
    '& span': {
      marginLeft: '-30px',
      position: 'sticky',
      color: '#686E7C',
      cursor: 'pointer'
    }
  },

  passwordError: {
    display: 'flex',
    alignItems: 'center',
    width: '105%',
    '& input': {
      borderColor: '#ff4d4f !important'
    },
    '& span': {
      marginLeft: '-30px',
      position: 'sticky',
      color: '#686E7C',
      cursor: 'pointer'
    }
  },

  label: {
    position: 'absolute',
    height: 17,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: '17px',
    color: '#686E7C',
    marginBottom: 13,
    color: '#686e7c',
    lineHeight: '40px',
    position: 'relative',
    '& a': {
      fontFamily: 'Inter',
      color: '#396fd4',
      textDecoration: 'none',
      fontWeight: 'bold',
      '&:hover': {
        color: '#7da8f9'
      }
    }
  },

  alertError: {
    boxSizing: 'border-box',
    margin: 0,
    marginBottom: 10,
    padding: 0,
    width: '109%',
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 14,
    lineHeight: '1.5715',
    listStyle: 'none',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '8px 15px',
    wordWrap: 'break-word',
    borderRadius: '2px',
    backgroundColor: '#fff2f0',
    border: '1px solid #ffccc7'
  },

  successMessage: {
    boxSizing: 'border-box',
    margin: 0,
    marginBottom: 10,
    padding: 0,
    width: '109%',
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 14,
    lineHeight: '1.5715',
    listStyle: 'none',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '8px 15px',
    wordWrap: 'break-word',
    borderRadius: '2px',
    backgroundColor: '#f6ffed',
    border: '1px solid #b7eb8f'
  }
}));
