import { makeStyles } from '@mui/styles';
import { height, margin, padding } from '@mui/system';
export default makeStyles(
  (theme) => ({
    mainBarRoot: {
      display: 'flex',
      position: 'relative',
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
        cursor: 'pointer',
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
        outline: 'none',
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
      height: '40px',
      padding: '0px 10px 0px 0px',
      cursor: 'default !important',
    },
   
    information: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '50px',
      right: '15px',
      padding: '20px',
      backgroundColor: 'white',
      border: '0.5px solid #D6D6D6',
      borderRadius: '5px',
      width: '270px',

    },

    Label2: {
      fontFamily: 'Arial',
      fontWeight: '800',
      fontSize: '24px',
      marginBottom: '12px',
      color: '#363535',
    },

   info: {
     display: 'grid',
     gridTemplateColumns: '25% auto',
     columnGap: '8px'
   },

   Avatar2: {
     height: '60px',
     alignSelf: 'center',
   },

   infoDetails: {
    display: 'grid',
    gridTemplateRow: '50%',
   },

  Label3: {
    alignSelf: 'end',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#363535',
  },

   seeProfile: {
     alignSelf: 'start',
     fontFamily: 'Arial',
     textDecorationLine: 'none',
   },

   informationLink: {
    '& a':{
      textDecoration: 'none',
      fontFamily: 'Poppins',
      fontSize: '18px',
      fontWeight: '600',
      color: '#5D5D5D',
    },
     display: 'flex',
     height: '100px',
     flexDirection: 'column',
     justifyContent: 'space-between',
   },
   
  }),
  { name: 'MainBar' }
);
