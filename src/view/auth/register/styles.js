import { makeStyles } from '@mui/styles';
import { unset } from 'lodash';

export default makeStyles(
  (theme) => ({
    doubleRow: {
      display: '-webkit-box',
      display: '-ms-flexbox',
      display: 'flex',
      '-webkit-box-pack': 'justify',
      '-ms-flex-pack': 'justify',
      justifyContent: 'space-between',

      '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'unset'
      }
    },

    doubleRowElement: {
      width: '45% !important',
      '@media (max-width: 768px)': {
        width: '100% !important'
      }
    },

    leftElement: {
      left: 9,
      '@media (max-width: 768px)': {
        left: 0
      }
    },

    terms: {
      width: '100%',
      marginTop: 0,
      color: '#686e7c',
      marginBottom: 10,
      display: 'inline-block',
      '& a': {
        color: '#396fd4',
        outline: 'none',
        fontFamily: 'Inter Medium, sans-serif',
        textDecorationLine: 'none',
        '&:hover': {
          color: '#7da8f9'
        }
      },
      '& input': {
        backgroundColor: '#fff',
        border: '1px solid #d9d9d9',
        color: 'rgba(0,0,0,0.65)',
        fontFamily: 'Inter Regular, sans-serif',
        cursor: 'pointer',
        position: 'relative',
        verticalAlign: 'middle',
        fontSize: 14,
        width: 14,
        height: 14,
        marginTop: 2,
        marginRight: 10,
        bottom: '0.15rem'
      }
    },

    subtitle: {
      width: '413px !important'
    }
  }),
  { name: 'Register' }
);
