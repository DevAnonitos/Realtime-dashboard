import React from 'react';
import dayjs from 'dayjs';
import { useList } from '@refinedev/core';

import { GetFieldsFromList } from '@refinedev/nestjs-query';

import { CalendarOutlined } from '@ant-design/icons';
import {
  Badge,
  Card,
  List,
  Skeleton as AntdSkeleton,
} from 'antd';

import Text from '@/components/text';

const CalendarUpcomingEvents = () => {
  return (
    <>
      <Card
        style={{ height: "100%" }}
        headStyle={{ padding: "8px 16px" }}
        bodyStyle={{ padding: "0 1rem" }}
        title={
          <div className='flex items-center gap-2'>
            <CalendarOutlined />
            <Text size='sm' style={{ marginLeft: ".7rem" }}>

            </Text>
          </div>
        }
      >

      </Card>
    </>
  );
};

export default CalendarUpcomingEvents;
