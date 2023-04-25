import styled from 'styled-components';
import { FaRegEdit, FaEdit } from 'react-icons/fa';
import { BsTrash, BsTrashFill } from 'react-icons/bs';

// OVERALL APP
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 80px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #FFFFFF;
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  font-size: 250%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div`
  margin-left: 275px;
  margin-top: 0.5rem;
  color: #fb4e05;
  font-family: 'Shrikhand', cursive;
`;

export const ContentContainer = styled.div`
  display: flex;
  margin-left: 200px;
  margin-right: 200px;
`;

export const DashboardContainer = styled.div`
  width: 20%;
`;

export const TContainer = styled.div`
  width: 80%;
  flex-direction: column;
`;

// DASHBOARD COMPONENT
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  padding-bottom: 2rem;
  justify-items: center;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  .user {
    font-size: 200%;
    font-weight: bold;
  }

  .user-location {
    font-size: 100%;
  }

  img {
    max-width: 50%;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    padding: 5px;
    margin: 1em;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;

// FRIENDS COMOPONENT
export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  .friends-header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .climbers {
    display: flex;
    flex-direction: column;
  }

  .climber-photo {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 20px;
    margin-right: 15px;
    margin-top: 2.5px;
    margin-bottom: 20px;
  }

  img {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    justify-content: space-between;
    padding: 2px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: #FFFFFF;
  padding: 1rem;
  padding-left: 2.75em;
  padding-right: 2.75em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  .stats-header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .stat-category {
    margin-bottom: 50px;
  }

  .stat-header {
    font-size: 1.17em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .stat-numbers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-size: 120%;
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
  padding-bottom: 0.8rem;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  .ticks-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20%;
    justify-content: space-between;
    padding: 2rem;
    padding-bottom: 0;
    margin-bottom: 0.5rem;
  }
`;

export const TickListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 0;


  .tick-list-footer {
    margin: 1rem;
  }
`;

export const TickListItems = styled.div`
  height: 450px; /* set a fixed height */
  overflow: auto; /* enable the scrollbar */
`;

export const TickButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  color: white;
  font: inherit;
  background-color: #fb4e05;
  width: 120px;
  padding: 6px 15px;
  border-radius: 5px;

  &:hover{
    background-color: #dc3c04;
  }
`;

export const TickTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  .tick-tile-top {
    display: grid;
    align-items: center;
    grid-template-columns: 8fr 1fr;
    margin-bottom: 0.25rem;
  }

  .route-name {
    font-weight: 550;
  }

  .route-grade {
    width: 60px;
  }

  .tick-tile-buttons {
    justify-self: end;
    color: #fb4e05;
  }

  .route-info {
    display: grid;
    grid-template-columns: 1.5fr 0.5fr 3fr;
    font-size: 115%
  }

  .user-route-info {
    display: grid;
    grid-template-columns: 0.8fr 0.9fr 4.5fr;
    font-size: 85%
  }
`;

export const OutlinedEditIcon = styled(FaRegEdit)`
  font-size: 20px;
  padding: 0.15em;
`;

export const FilledEditIcon = styled(FaEdit)`
  font-size: 20px;
  padding: 0.15em;
`;

export const OutlinedTrashIcon = styled(BsTrash)`
  font-size: 20px;
  padding: 0.15em;
`;

export const FilledTrashIcon = styled(BsTrashFill)`
  font-size: 20px;
  padding: 0.15em;
`;

// EDIT TICK COMPONENT
export const FormHeader = styled.h2`
  margin: 0;
  margin-bottom: 4px;
`;

export const RadioOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubRadioOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const FormContents = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
  width: 200px;
  min-height: 150px;
`;

export const NotesDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  color: white;
  font: inherit;
  background-color: #fb4e05;
  padding: 8px 20px;
  border-radius: 5px;

  &:hover{
    background-color: #dc3c04;
  }

  &:disabled {
    background-color: #eeac8e;
  }
`;

// TRENDS COMPONENT
export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

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

export const GradesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
