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
      '& img': {
        padding: '0px 10px 0px 0px',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    searchBar: {
      '& input':{
        backgroundColor: '#F5F5F5',
        border: '0px',
        paddingLeft: '10px',
      },
      display: 'flex',
      border: '0px solid #6D6D6D',
      borderRadius: '25px',
      padding: '8px 55px 8px 20px',
      backgroundColor: '#F5F5F5',
    },
    Lb1: {
      fontFamily: 'Poppins',
      fontWeight: '600',
      padding: '0px 10px',
    },
    Avatar1: {
      maxWidth: 'auto',
      height: '40px',
      padding: '0px 10px 0px 0px',
    },

    
  }),
  { name: 'MainBar' }
);
