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
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: '14px',
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
      boxSizing: 'border-box',
      top: '5.5%',
      left: '84.5%',
      padding: '1%',
      backgroundColor: 'white',
      border: '1px solid #E0E5ED',
      borderRadius: '8px',
      height: '22%',
      width: '15%',
    },

    Label2: {
      fontFamily: 'Inter',
      fontWeight: '800',
      fontSize: '20px',
      marginBottom: '12px',
      color: '#363535',
    },

   info: {
     display: 'grid',
     gridTemplateColumns: '20% auto',
     columnGap: '3px'
   },

   Avatar2: {
     height: '48px',
     alignSelf: 'center',
   },

   infoDetails: {
    display: 'grid',
    gridTemplateRow: '50%',
   },

  Label3: {
    alignSelf: 'end',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '5px',
    color: '#363535',
  },

   seeProfile: {
     alignSelf: 'start',
     fontFamily: 'Inter',
     fontSize: '13px',
     color: '#686E7C',
     textDecorationLine: 'none',
     '&:hover': {
      textDecoration: 'underline',
     }
   },

   informationLink: {
    '& a':{
      textDecoration: 'none',
      fontFamily: 'Inter',
      fontSize: '15px',
      fontWeight: '600',
      color: '#171A1F',
      cursor: 'pointer !important',
      height: '22px',
      '&:hover': {
        backgroundColor: '#F5F7F8',
        
      }
    },
     display: 'flex',
     height: '90px',
     flexDirection: 'column',
     justifyContent: 'space-between',
   },

  grammi: {
    width: '100%',
  }

  
  
  }),
  { name: 'MainBar' }
);
