import React from 'react';
import { Popover, Button } from 'antd';
import { SettingOutlined } from "@ant-design/icons";
import CustomAvatar from '../../custom-avatar';
import Text from '../../text';

import { useGetIdentity } from '@refinedev/core';
import type { User } from '@/graphql/schema.types';
import AccountSetting from '../account-settings';

const CurrentUser = React.memo(() => {

  const [opened, setOpened] = React.useState(false);
  const { data: user } = useGetIdentity<User>();

  const content = (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text strong style={{ padding: "12px 20px" }}>
          {user?.name}
        </Text>
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
            onClick={() => setOpened(true)}
          >
            Account settings
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Popover
        placement='bottomRight'
        trigger="click"
        content={content}
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar
          name={user?.name}
          src={user?.avatarUrl}
          size="default"
          style={{ cursor: "pointer" }}
        />
        {user && (
          <>
            <AccountSetting
              opened={opened}
              setOpened={setOpened}
              userId={user.id}
            />
          </>
        )}
      </Popover>
    </>
  );
});

export default CurrentUser;