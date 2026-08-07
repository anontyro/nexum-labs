import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#9900ff', contrastText: '#ffffff' },
    secondary: { main: '#0D9488', contrastText: '#062522' },
    background: {
      default: '#141416',
      paper: '#1f1f21',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    // Roboto: MUI/body default. Space Grotesk: display headlines (the "flair" font).
    // JetBrains Mono: buttons, labels, code-style accents (punk/technical touches).
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    button: {
      fontFamily: '"JetBrains Mono", monospace',
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 0.2,
    },
    overline: {
      fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: 1,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 4, padding: '10px 20px' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1f1f21',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: '#1f1f21', backgroundImage: 'none' },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'filled' },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#1f1f21',
          borderRadius: 6,
          '&:before, &:after': { display: 'none' },
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: 'rgba(255,255,255,0.12)' } },
    },
  },
});

export default defaultTheme;
