import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1B2431',
      paper: '#273142',
    },
    primary: {
      main: '#4880FF',
    },
    secondary: {
      main: '#313D4F',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CBD5E0',
    },
  },

  typography: {
    fontFamily: '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#4880FF',
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '95%',
          borderRadius: '12px',
          padding: '16px',
          marginTop: '10px',
          marginBottom: '50px',
          backgroundColor: '#313D4F', // Secondary main color
        },
      },
    },
  },
});

export default theme;