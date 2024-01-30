import React from 'react';
import {Avatar as AntdAvatar, AvatarProps } from 'antd';

type Props = AvatarProps & {
  name?: string;
};

const CustomAvatar = React.memo(({ name="", style, ...rest }: Props) => {
  return (
    <>
      <AntdAvatar
        alt={'Dev'}
        size="large"
        style={{
          backgroundColor: "#87d068",
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {name}
      </AntdAvatar>
    </>
  );
});


export default CustomAvatar;
