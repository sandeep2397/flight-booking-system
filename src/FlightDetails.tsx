import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  data?: any;
  handleClose?: any;
}

const FlightBookingDetails: FC<Props> = (props: Props) => {
  const [flightDetails, setFlightDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://flight-status-mock.core.travelopia.cloud/flights/${params?.id}`,
      {}
    )
      .then(async (resp) => {
        const respBody = await resp.json();
        if (respBody) {
          setFlightDetails(respBody);
          console.log('ddd', respBody);
        } else {
          setFlightDetails([]);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div className='App'>
      <p> Details of ${params.id}</p>
    </div>
  );
};

export default FlightBookingDetails;
