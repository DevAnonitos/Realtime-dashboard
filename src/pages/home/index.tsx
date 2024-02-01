import React from 'react';
import { useCustom } from '@refinedev/core';

import { Col, Row } from 'antd';
import { DashboardTotalCountsQuery } from '@/graphql/types';

export const Home = () => {
  return (
    <>
      <div className='page-container'>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} xl={8} className='bg-red-400'>
            DashBoard
          </Col>
          <Col xs={24} sm={24} xl={8} className='bg-green-400'>
            Board
          </Col>
          <Col xs={24} sm={24} xl={8} className='bg-blue-400'>
            Train
          </Col>
        </Row>

        <Row gutter={[32, 32]} className='mt-8'>
          <Col xs={24} sm={24} xl={8} className='h-[460px] bg-slate-400'>
            Calendar
          </Col>
          <Col xs={24} sm={24} xl={16} className='h-[460px] bg-amber-400'>
          </Col>
        </Row>

        <Row gutter={[32, 32]}>
          <Col xl={24} className='bg-violet-400'>
            DashBoard
          </Col>
        </Row>
      </div>
    </>
  );
};

