import React from 'react';
import { Popover, Button } from 'antd';
import { SettingOutlined } from "@ant-design/icons";

const CurrentUser = React.memo(() => {

  const content = (
    <>
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #d9d9d9",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <Button
            style={{ textAlign: "left" }}
            icon={<SettingOutlined />}
            type="text"
            block
            // onClick={() => {}}
          >
            Account settings
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <Popover 
        placement='bottomRight'  
        trigger="click" 
        content={content}
        overlayInnerStyle={{ padding: 0 }} 
        overlayStyle={{ zIndex: 999 }}
      >
        
      </Popover>
    </>
  );
});

export default CurrentUser;