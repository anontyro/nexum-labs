'use client';

import { ThemeProvider, THEME_ID } from '@mui/material/styles';
import defaultTheme from "@/app/theme/themes/defaultTheme";
import { CssBaseline } from '@mui/material';

type MuiProviderProps = {
  children: React.ReactNode;
}

const MuiProvider: React.FC<MuiProviderProps> = ({children}) => {
  return (
    <ThemeProvider theme={{
      [THEME_ID]: defaultTheme
    }}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
};

export default MuiProvider;
