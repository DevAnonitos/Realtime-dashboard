import React from 'react';
import { Layout, Space, theme } from 'antd';

const { useToken } = theme;

const Footer = () => {

  const { token } = useToken();

  const footerStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    padding: "16px",
    textAlign: "center",
    borderTop: "1px solid #ddd",
  };

  return (
    <Layout.Footer style={footerStyle}>
      Footer
    </Layout.Footer>
  );
};

export default Footer;