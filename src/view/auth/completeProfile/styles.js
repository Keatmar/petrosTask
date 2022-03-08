import { makeStyles } from '@mui/styles';

export default makeStyles(
  (theme) => ({
    btnBack: {
      position: 'absolute',
      width: '5%',
      height: '10%',
      left: '2%',
      top: '2%',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E0E5ED',
      boxSizing: 'border-box',
      color: '#686E7C',
      borderRadius: 8,
      cursor: 'pointer',
      '@media (max-width: 1050px)': {
        display: 'flex !important',
        flexDirection: 'row !important',
        alignItems: 'center !important',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start !important',
        height: '45px',
        width: '83px',
        '& svg': {
          width: '25%'
        },
        '& label': {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '14px !important',
          lineHeight: '17px !important'
        }
      },
      '& svg': {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      '& label': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: '15px'
      }
    },

    block: {
      width: '80%',
      marginLeft: '10%'
    },

    stepsWrapper: {
      width: '20%',
      marginRight: '2%',
      '& ul': {
        display: 'flex',
        listStyleType: 'none',
        '& li': {
          width: '100%',
          height: 6,
          marginRight: 6,
          background: '#dcdff3',
          borderRadius: 30,
          transition: 'width 0.3s ease-in-out, background 0.3s ease-in-out'
        }
      },
      '@media (max-width: 1500px)': {
        width: '25%'
      },
      '@media (max-width: 1250px)': {
        width: '30%'
      },
      '@media (max-width: 850px)': {
        width: '50%'
      },
      '@media (max-width: 700px)': {
        width: '60%'
      }
    },

    activeStep: {
      backgroundColor: '#9fadff !important'
    },

    title: {
      position: 'static',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 26,
      lineHeight: '31px',
      color: '#171A1F',
      marginBottom: 0
    },

    subtitle: {
      height: '8%',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '19px',
      color: '#686E7C',
      marginTop: 18,
      '@media (max-width: 768px)': {
        width: '394px !important'
      }
    },

    centerPage: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column'
    },

    completeProfileImg: {
      width: '40%',
      '@media (max-width: 1050px)': {
        marginLeft: '9%'
      }
    },

    centerElements: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    submitBtn: {
      height: '10%',
      width: '20%',
      height: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 20,
      paddingLeft: 20,
      marginRight: '2%'
    },

    secondBtn: {
      height: '10%',
      width: '19%',
      height: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 20,
      paddingLeft: 20,
      marginRight: '5%'
    },

    doubleBtn: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '@media (max-width: 1250px)': {
        width: '100% !important',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& button': {
        '@media (max-width: 1250px)': {
          width: '50% !important',
          marginRight: 0,
          marginLeft: 0
        },
        '@media (max-width: 750px)': {
          width: '80% !important',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }
    },

    message: {
      width: '44%',
      marginRight: '2%',
      '@media (max-width: 1250px)': {
        width: '50% !important',
        marginLeft: '2%'
      },
      '@media (max-width: 750px)': {
        width: '80% !important'
      }
    },

    resendCodeMessage: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: 15,
      lineHeight: '14.52px',
      color: '#686E7C',
      '& b': {
        marginRight: 5,
        color: 'black'
      }
    }
  }),
  { name: 'CompleteProfile' }
);
