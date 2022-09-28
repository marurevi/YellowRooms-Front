import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const RoomItem = (props) => {
  const { room } = props;

  const imageStyle = {
    height: '40%',
    paddingTop: '80%',
    width: '100%',
    objectFit: 'cover',
  };

  const cardStyle = {
    margin: '0 20px',
    width: '40vw',
    height: '80vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <NavLink
      className="link"
      to={`/Rooms/${room.id}`}
      key={room.id}
    >
      <Card style={cardStyle}>
        <CardMedia image={room.photo} title={room.name} style={imageStyle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            {room.name}
          </Typography>
          <Typography component="p" style={{ margin: '1rem 0 10rem 0' }}>{room.description}</Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
};

RoomItem.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default RoomItem;
