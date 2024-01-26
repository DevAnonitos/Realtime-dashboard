import React from 'react';
import type { AvatarProps } from 'antd';

type Props = AvatarProps & {
  name: string;
};

const CustomAvatar = React.memo(() => {
  return (
    <div>CustomAvatar</div>
  );
});


export default CustomAvatar;