import { makeStyles } from '@mui/styles';

export default makeStyles(
  (theme) => ({
    codeInput: {
      display: 'flex !important',
      flexDirection: 'row',
      marginBottom: 20,
      justifyContent: 'center',
      width: '100%',
      '& input': {
        fontFamily: 'Inter',
        fontSize: 28,
        fontWeight: '600',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#171A1F',
        width: '5%',
        height: 50,
        paddingLeft: 4,
        marginRight: '2%',
        paddingRight: 3,
        paddingBottom: 1,
        paddingTop: 1,
        borderRadius: 6,
        border: '1px solid #dbdbdb',
        '@media (max-width: 750px)': {
          width: '10%'
        },
        '&:focus': {
          borderColor: '#40a9ff'
        },
        '&:active': {
          borderColor: '#40a9ff'
        },
        '&:hover': {
          borderColor: '#40a9ff'
        }
      }
    }
  }),
  { name: 'CodeInput' }
);
