import { Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import AlignItemsList from './TabularList';
import SearchAppBar from './Topbar';

interface Props {
  data?: any;
  handleClose?: any;
}

const FlightBooking: FC<Props> = (props: Props) => {
  const [counter, setCounter] = useState(10);
  const [flightList, setFlightList] = useState([]);

  useEffect(() => {
    let interval: any = null;

    if (!interval) {
      interval = setInterval(() => {
        fetch('https://flight-status-mock.core.travelopia.cloud/flights', {})
          .then(async (resp) => {
            const respBody = await resp.json();
            if (respBody) {
              setFlightList(respBody);
              console.log('ddd', respBody);
            } else {
              setFlightList([]);
            }
          })
          .catch((err) => {
            throw new Error(err);
          });
      }, 2000);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className='App'>
      <SearchAppBar />
      <Typography
        variant='h4'
        fontWeight={'bold'}
        style={{
          margin: '18px',
          marginBottom: '10px',
          wordSpacing: '2',
          textAlign: 'left',
        }}
      >
        List of Flights
      </Typography>
      <AlignItemsList flightData={flightList} />
    </div>
  );
};

export default FlightBooking;
