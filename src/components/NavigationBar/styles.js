import { makeStyles } from '@mui/styles';
import { height, margin, padding } from '@mui/system';
export default makeStyles(
  (theme) => ({
    root: {
      width: '98%',
      backgroundColor: '#FFFFFF',
      position: 'fixed',
      height: 40,
      padding: '1%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    rightElements: {
      '& img': {
        marginRight: '10px',
        cursor: 'pointer'
      }
    }
  }),
  { name: 'MainBar' }
);
