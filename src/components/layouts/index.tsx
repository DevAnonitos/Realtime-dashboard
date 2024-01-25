import React from 'react';
import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd';
import Header from './Header';
import Footer from './footer';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemedLayoutV2
        Header={Header}
        Footer={Footer}
        Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
      >
        {children}
      </ThemedLayoutV2>
    </> 
  );
};

export default Layout;