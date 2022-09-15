import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Girassol',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ].join(','),
      fontSize: 20,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    },
  });

  export default theme;