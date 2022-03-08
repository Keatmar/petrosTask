import { makeStyles } from '@mui/styles';
import { unset } from 'lodash';

export default makeStyles(
  (theme) => ({
    forgotPasswordLink: {
      textDecoration: 'none',
      position: 'absolute',
      marginRight: '-8%',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: '17px',
      textAlign: 'right',
      color: '#396fd4',
      marginBottom: 14,
      top: 0,
      right: 0,
      '&:hover': {
        color: '#7da8f9'
      }
    }
  }),
  { name: 'Login' }
);
