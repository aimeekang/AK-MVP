import styled from 'styled-components';

// OVERALL APP
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 150px;
  margin-right: 150px;
  height: 100%;
  gap: 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

export const DashboardContainer = styled.div`
  width: 30%;
`;

export const TContainer = styled.div`
  width: 70%;
  flex-direction: column;
  /* gap: 2.0rem; */
`;

// DASHBOARD COMPONENT
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  justify-items: center;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  .user {
    font-size: 200%;
    font-weight: bold;
  }

  img {
    max-width: 50%;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    padding: 0.5em;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: #FFFFFF;
  padding: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  .stat-category {
    margin-bottom: 3rem;
  }

  .stat-header {
    font-size: 1.17em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }

  .stat-numbers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-size: 150%;
  }

  .stat-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
`;

// TICKS COMPONENT
export const TicksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: #FFFFFF;

  .ticks-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20%;
    justify-content: space-between;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const TickListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 0;
`;

export const TickTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  .tick-tile-top {
    display: grid;
    align-items: center;
    grid-template-columns: 6fr 1fr;
  }

  .route-name {
    font-size: 115%;
    font-weight: bold;
  }

  .tick-tile-buttons {
    justify-self: end;
  }

  .route-info {
    display: grid;
    grid-template-columns: 2.5fr 0.8fr 3fr;
    font-size: 115%
  }

  .user-route-info {
    display: grid;
    grid-template-columns: 0.8fr 0.9fr 4.5fr;
    font-size: 85%
  }
`;

// TRENDS COMPONENT
export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: #FFFFFF;

  .trends-header {
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
