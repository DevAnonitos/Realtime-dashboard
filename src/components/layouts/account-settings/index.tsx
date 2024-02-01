import React from 'react';
import { SaveButton, useForm } from '@refinedev/antd';
import { HttpError } from "@refinedev/core";
import { CloseOutlined } from '@ant-design/icons';
import { GetFields, GetVariables } from '@refinedev/nestjs-query';

import {
  UpdateUserMutation,
  UpdateUserMutationVariables
} from '@/graphql/types';

import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  Spin
} from 'antd';

import Text from '@/components/text';

import { getNameInitials } from '@/utilities';
import CustomAvatar from '@/components/custom-avatar';

type AccountSettingProps = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  userId: string;
};

const AccountSetting = ({ opened, setOpened, userId }: AccountSettingProps) => {

  const closeModal = () => {
    setOpened(false);
  };


  return (
    <>
      <Drawer
        onClose={closeModal}
        open={opened}
        width={756}
        styles={{
          body: { background: "#f5f5f5", padding: 0 },
          header: { display: "none" },
        }}
      >
        <div className='flex items-center justify-between p-4 bg-slate-200 border-b-2'>
          <Text strong>
            Account Setting
          </Text>
          <Button
            type='text'
            icon={<CloseOutlined />}
            onClick={() => closeModal()}
          />
        </div>
        <div className='p-4'>
          <Card className='rounded-xl'>
            <Form layout='vertical'>
              <CustomAvatar
                shape='square'
                className='w-[96px] h-[96px] mb-6'
              />
              <Form.Item label="Name" name="name">
                <Input placeholder="name" type="text" autoFocus />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input placeholder="email" type="text" autoFocus />
              </Form.Item>
              <Form.Item label="Job title" name="jobtitle">
                <Input placeholder="JobTitle" type="text" autoFocus />
              </Form.Item>
              <Form.Item label="Phone" name="phone">
                <Input placeholder="Timezone" type="text" autoFocus />
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Drawer>
    </>
  );
};

export default AccountSetting;
