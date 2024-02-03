import React from 'react';
import { useCustom } from '@refinedev/core';

import { Col, Row } from 'antd';
import { DashboardTotalCountsQuery } from '@/graphql/types';
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "./queries";

import CalendarUpcomingEvents from './components/upcoming-events';

export const Home = () => {

  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>(
    {
      url: "",
      method: "get",
      meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY, },
    }
  );

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
          <Col xs={24} sm={24} xl={8} className='h-[460px]'>
            <CalendarUpcomingEvents />
          </Col>
          <Col xs={24} sm={24} xl={16} className='h-[460px] bg-amber-400'>
            DashBoarDeals
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

