import React from 'react';
import CurrentUser from './current-user';
import { Layout, Space, theme } from 'antd';

const { useToken } = theme;

const Header = React.memo(() => {

  const { token } = useToken();

  const headerStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    position: "sticky",
    top: "0px",
    zIndex: 999,
    borderBottom: "1px solid #ddd",
  };

  return (
    <>
      <Layout.Header style={headerStyle}>
        <Space align='center' size="middle">
          <CurrentUser />
        </Space>
      </Layout.Header>
    </>
  );
});

export default Header;