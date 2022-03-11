import { makeStyles } from '@mui/styles';
import { height, margin, padding } from '@mui/system';
export default makeStyles(
  (theme) => ({
    mainBarRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '55px',
      backgroundColor: 'white',
      boxShadow: '0px 10px 24px #D6D6D6',
      padding: '0px 15px'
    },

    rightElements: {
      '& img': {}
    }
  }),
  { name: 'MainBar' }
);
