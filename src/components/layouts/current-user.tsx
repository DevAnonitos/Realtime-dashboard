import React from 'react';
import { Popover, Button } from 'antd';

const CurrentUser = () => {
  return (
    <>
      <Popover 
        placement='bottomRight'  
        trigger="click" 
        overlayInnerStyle={{ padding: 0 }} 
        overlayStyle={{ zIndex: 999 }}
      >
        TestCase
      </Popover>
    </>
  );
};

export default CurrentUser;