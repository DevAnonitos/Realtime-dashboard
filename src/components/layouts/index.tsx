import React from 'react';
import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: React.PropsWithChildren) => {

  const memoHeader = React.memo(Header);
  const memoFooter = React.memo(Footer);

  return (
    <>
      <ThemedLayoutV2
        Header={memoHeader}
        Footer={memoFooter}
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