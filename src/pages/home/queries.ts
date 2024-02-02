import gql from "graphql-tag";

export const DASHBOARD_TOTAL_COUNT_QUERY = gql `
  query DashboardTotalCounts {
    companies {
      totalCount
    }
    contacts {
      totalCount
    }
    deals {
      totalCount
    }
  };
`;
