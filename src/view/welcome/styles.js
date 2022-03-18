import { makeStyles } from '@mui/styles';

export default makeStyles(
  (theme) => ({
    wrapper: {
      width: '100%',
      fontFamily: "'Inter Regular', sans-serif",
      fontSize: 14,
      border: 0,
      boxSizing: 'border-box',
      fontFeatureSettings: 'tnum',
      margin: 0,
      padding: 0,
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    root: {
      paddingTop: 0,
      position: 'relative',
      fontFamily: "'Inter Regular', sans-serif",
      fontSize: 14,
      color: '#171a1f',
      background: '#f5f7f8 !important'
    },

    pageHeader: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      'z-index': 5,
      display: '-webkit-box',
      display: '-ms-flexbox',
      display: 'flex',
      '-webkit-box-align': 'center',
      '-ms-flex-align': 'center',
      '-ms-grid-row-align': 'center',
      'align-items': 'center',
      '-webkit-box-align': 'center',
      '-ms-flex-align': 'center',
      '-webkit-box-pack': 'justify',
      '-ms-flex-pack': 'justify',
      '-moz-box-align': 'center',
      '-webkit-tap-highlight-color': 'rgba(0 ,0 ,0 ,0)',
      justifyContent: 'space-between',
      padding: '15px 50px',
      marginRight: 'auto',
      marginLeft: 'auto',
      backgroundImage: 'none',
      background: 'transparent',
      '& .logo': {
        width: '153px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        boxSizing: 'border-box'
      },
      '& .links': {
        display: '-webkit-box',
        display: '-ms-flexbox',
        marginLeft: 'auto',
        appearance: 'none',
        border: 0,
        display: 'flex',
        padding: 0,
        listStyleImage: 'none',
        listStyleType: 'none',
        listStylePosition: 'outside',
        marginBlockStart: 0,
        marginBlockEnd: 0,
        '-webkit-font-smoothing': 'antialiased',
        '@media (max-width: 1200px)': {
          display: 'none'
        },
        '& li': {
          appearance: 'none',
          border: 0,
          lineHeight: '35px',
          marginLeft: 34,
          fontFamily: "'Inter Medium', sans-serif",
          fontSize: 15,
          display: 'list-item',
          color: '#5c5e6c',
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            '&:hover, &:active': {
              color: '#000000',
              '-webkit-transition': 'color 0.3s ease-in-out',
              '-o-transition': 'color 0.3s ease-in-out'
            }
          }
        }
      },

      '& .lastElementWelcome': {
        position: 'relative',
        'z-index': 6,
        display: 'inline-block',
        paddingRight: 14,
        paddingLeft: 14,
        lineHeight: '36px',
        color: '#fff !important',
        background: '#171a1f',
        borderRadius: 6,
        cursor: 'pointer',
        '&:hover': {
          color: '#fff !important'
        }
      }
    },

    burgerMenuToggle: {
      display: 'none',
      fontVariantNumeric: 'tabular-nums',
      '@media (max-width: 1200px)': {
        display: 'inline-block',
        appearance: 'button',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Inter Regular', sans-serif",
        fontFeatureSettings: 'tnum',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        padding: 0,
        textSizeAdjust: '100%',
        touchAction: 'manipulation',
        '-webkit-font-smoothing': 'antialiased',
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
      }
    },

    burgerMenu: {
      display: 'none',
      position: 'absolute',
      top: 80,
      left: 0,
      width: '100%',
      height: '100vh',
      background: '#fff',
      padding: '5rem 55px',
      transition: 'all 0.3s cubic-bezier(1, 0, 0, 1)',
      '-webkit-font-smoothing': 'antialiased',
      '@media (max-width:991px)': {
        top: '68px',
        padding: '5rem 5%'
      },
      '& ul': {
        listStyleImage: 'disc',
        margin: 0,
        padding: 0,
        textSizeAdjust: '100%',
        '& li': {
          fontFamily: "'Inter Bold', sans-serif",
          fontSize: 22,
          lineHeight: '1.5',
          listStylePosition: 'outside',
          listStyleType: 'none',
          marginBottom: '1rem',
          '& a': {
            color: 'black',
            textDecorationLine: 'none',
            touchAction: 'manipulation',
            transitionDelay: '0s',
            transitionDuration: '0.3s',
            transitionProperty: 'color',
            transitionTimingFunction: 'ease',
            fontWeight: '700',
            '&:active': {
              color: '#096dd9',
              outine: 0
            },
            '&:hover': {
              color: '#40a9ff',
              outline: 0
            }
          }
        }
      }
    },

    welcome: {
      display: '-webkit-box',
      display: '-ms-flexbox',
      display: 'flex',
      '-webkit-box-align': 'center',
      '-ms-flex-align': 'center',
      alignItems: 'center',
      '-webkit-box-pack': 'center',
      '-ms-flex-pack': 'center',
      justifyContent: 'center',
      height: '100%',
      '@media (max-width: 1200px)': {
        '-ms-flex-direction': 'column',
        flexDirection: 'column',
        padding: '0 2rem',
        '-webkit-font-smoothing': 'antialiased',
        '-webkit-tap-highlight-color': 'rgba(0, 0 ,0 ,0)'
      }
    },

    welcomeInfo: {
      position: 'relative',
      width: 500,
      color: '#ffffff',
      textSizeAdjust: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '83px',
      '@media (max-width: 1200px)': {
        width: '100%',
        marginBottom: '3%',
        marginTop: '2%',
        padding: 0,
        paddingRight: '2.5rem',
        flex: '0 0 57%',
        paddingTop: '7rem',
        paddingBottom: '1rem',
        display: 'flex',
        display: '-ms-flexbox',
        '-ms-flex-direction': 'column',
        flexDirection: 'column',
        '-ms-flex-align': 'start',
        alignItems: 'flex-start',
        '-ms-flex-pack': 'justify',
        justifyContent: 'space-between',
        '-webkit-font-smoothing': 'antialiased',
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
      },
      '& h1': {
        boxSizing: 'border-box',
        fontWeight: '700',
        lineHeight: '70px',
        margin: 0,
        paddingRight: 20,
        paddingLeft: 20,
        top: 26,
        fontFamily: "'Inter Bold', sans-serif",
        fontSize: 60,
        color: '#000000',
        '& span': {
          boxSizing: 'border-box',
          color: '#415bf6'
        },
        '& em': {
          boxSizing: 'border-box',
          fontStyle: 'normal',
          color: '#ffffff'
        }
      },
      '& p': {
        marginTop: 26,
        fontSize: '22px',
        lineHeight: '32px',
        marginBlockEnd: 0
      },
      '& a': {
        display: 'inline-block',
        color: 'inherit',
        textDecorationLine: 'none',
        width: 168,
        lineHeight: '64px',
        marginTop: 30,
        fontFamily: "'Inter Medium', sans-serif",
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 6,
        border: '1px solid #ffffff',
        transition: 'all 0.3s ease-in-out',
        '@media (max-width: 1200px)': {
          fontSize: '18px',
          lineHeight: '55px'
        },
        '&:after': {
          position: 'absolute',
          bottom: -40,
          left: -50,
          'z-index': -1,
          display: 'block',
          width: 539,
          height: 306,
          background: '#3862cf',
          content: '',
          '-webkit-transition': 'background 0.3s ease-in-out',
          '-o-transition': 'background 0.3s ease-in-out',
          transition: 'background 0.3s ease-in-out'
        },
        '&:hover': {
          background: '#171a1f',
          border: '1px solid #171a1f'
        }
      }
    },

    welcomeBox: {
      backgroundColor: '#3862cf',
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 35,
      lineHeight: '72px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      '& h1': {
        paddingLeft: 0
      },
      '& p': {},
      '& a': {}
    },

    welcomeImages: {
      width: '41.25vw',
      height: '100vh',
      display: '-webkit-box',
      display: '-ms-flexbox',
      display: 'flex',
      '-webkit-box-pack': 'justify',
      '-ms-flex-pack': 'justify',
      justifyContent: 'space-between',
      '-webkit-box-align': 'start',
      '-ms-flex-align': 'start',
      alignItems: 'flex-start',
      marginLeft: 100,
      overflow: 'hidden',
      '@media (max-width: 1200px)': {
        '-ms-flex': '0 0 40%',
        flex: '0 0 40%',
        width: '100%',
        margin: 0,
        textSizeAdjust: '100%',
        '-webkit-font-smoothing': 'antialiased',
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
      }
    },

    welcomeCol: {
      width: '30.3%',
      '& img': {
        width: '100%',
        '&:not(:first-child)': {
          marginTop: 30
        }
      }
    },

    welcomeColLeft: {
      '-webkit-animation': '$toTop 60s linear infinite running',
      animation: '$toTop 60s linear infinite running',
      '-webkit-transform': 'translateY(30px)',
      '-ms-transform': 'translateY(30px)',
      transform: 'translateY(30px)'
    },

    welcomeColRight: {
      '-webkit-animation': '$toTop 60s linear infinite running',
      animation: '$toTop 60s linear infinite running',
      '-webkit-transform': 'translateY(30px)',
      '-ms-transform': 'translateY(30px)',
      transform: 'translateY(30px)'
    },

    welcomeColCenter: {
      '-webkit-transform': 'translateY(-155px)',
      '-ms-transform': 'translateY(-155px)',
      transform: 'translateY(-155px)',
      '-webkit-animation': '$toBottom 60s linear infinite running ',
      animation: '$toBottom 60s linear infinite running'
    },

    '@keyframes toTop': {
      '0%': {
        '-webkit-transform': 'translateY(0)',
        transform: 'translateY(0)'
      },
      '100%': {
        '-webkit-transform': 'translateY(-5827px)',
        transform: 'translateY(-5827px)'
      }
    },

    '@keyframes toBottom': {
      '0%': {
        '-webkit-transform': 'translateY(-4549px)',
        transform: 'translateY(-4549px)'
      },
      '100%': {
        '-webkit-transform': 'translateY(0)',
        transform: 'translateY(0)'
      }
    }
  }),
  { name: 'Welcome' }
);
