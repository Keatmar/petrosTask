import { makeStyles } from '@mui/styles';
import { height, margin, padding } from '@mui/system';
export default makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      minHeight: 60,
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      height: '5%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    rightElements: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '& img': {
        marginRight: '1rem',
        cursor: 'pointer',
        width: '34px',
        height: '34px'
      }
    }
  }),
  { name: 'MainBar' }
);
