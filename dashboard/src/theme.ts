import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul principal
      light: '#63a4ff', // Azul claro
      dark: '#004ba0', // Azul oscuro
      contrastText: '#ffffff', // Texto en contraste
    },
    secondary: {
      main: '#ff4081', // Rosa principal
      light: '#ff79b0', // Rosa claro
      dark: '#c60055', // Rosa oscuro
      contrastText: '#000000', // Texto en contraste
    },
    background: {
      default: '#f5f5f5', // Fondo predeterminado
      paper: '#ffffff', // Fondo de papel
    },
    text: {
      primary: '#212121', // Texto principal
      secondary: '#757575', // Texto secundario
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
    body2: {
      color: '#757575',
    },
  },
});

export default theme;