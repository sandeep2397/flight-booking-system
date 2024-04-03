import { Announcement, CheckCircle, Hail } from '@mui/icons-material';
import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  flightData: Array<any>;
}

const AlignItemsList: FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const { flightData } = props;
  return (
    <List sx={{ width: '100%', maxWidth: '75%', bgcolor: 'background.paper' }}>
      {flightData && flightData?.length === 0 && (
        <div>No Records to display</div>
      )}
      {flightData &&
        flightData?.map((info: any) => {
          return (
            <>
              <ListItem style={{ maxHeight: '50px' }} alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    alt={'S'}
                    sx={{ bgcolor: '#ab47bc', width: 32, height: 32 }}
                    src='/static/images/avatar/2.jpg'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link
                      underline='hover'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      color='primary'
                      fontSize={'14px'}
                      onClick={() => {
                        navigate(`/flightDetails/${info?.id}`);
                      }}
                    >
                      {' '}
                      {info?.flightNumber}{' '}
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        {' '}
                      </div>
                      <Typography
                        sx={{ display: 'inline', fontWeight: 'bold' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {`Airline : ${info?.airline}`}
                      </Typography>

                      <Typography
                        sx={{ display: 'inline', fontWeight: 'normal' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {`Origin : ${info?.origin}`}
                      </Typography>
                      <Typography
                        sx={{ display: 'inline', fontWeight: 'normal' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {`Destination : ${info?.destination}`}
                      </Typography>
                      <Typography
                        sx={{ display: 'inline', fontWeight: 'normal' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {`Departure : ${new Date(
                          info?.departureTime
                        ).toDateString()}`}
                      </Typography>
                      <Typography
                        sx={{ display: 'inline', fontWeight: 'normal' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {`Status : ${info?.status}`}
                        {info?.status === 'On Time' ? (
                          <CheckCircle style={{ color: '#4caf50' }} />
                        ) : info?.status === 'Boarding' ? (
                          <Hail style={{ color: '#7b1fa2' }} />
                        ) : (
                          <Announcement style={{ color: '#d32f2f' }} />
                        )}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </>
          );
        })}
    </List>
  );
};

export default AlignItemsList;
