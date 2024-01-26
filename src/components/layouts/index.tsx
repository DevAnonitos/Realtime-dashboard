import React from 'react';
import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemedLayoutV2
        Header={Header}
        Footer={Footer}
        Title={(titleProps) => {
          return <ThemedTitleV2 {...titleProps} text="DevAnonitos"  />;
        }}
      >
        {children}
      </ThemedLayoutV2>
    </> 
  );
};

export default Layout;