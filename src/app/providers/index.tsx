'use client';

import MuiProvider from "./mui-theme";

type ProvidersProps = {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return (
    <MuiProvider>
      {children}
    </MuiProvider>
  )
};

export default Providers;
