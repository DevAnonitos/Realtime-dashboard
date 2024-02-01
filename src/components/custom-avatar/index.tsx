import React from 'react';
import {Avatar as AntdAvatar, AvatarProps } from 'antd';
import { getNameInitials, getRandomColorString } from '@/utilities';

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
          backgroundColor: rest?.src ? "transparent" : getRandomColorString(name),
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          ...style,
        }}
        {...rest}
      >
        {getNameInitials(name || "")}
      </AntdAvatar>
    </>
  );
});


export default CustomAvatar;
