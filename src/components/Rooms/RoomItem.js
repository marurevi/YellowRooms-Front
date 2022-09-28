import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { TiSocialFacebook } from 'react-icons/ti';
import { RiTwitterFill } from 'react-icons/ri';
import { SiInstagram } from 'react-icons/si';

const RoomItem = (props) => {
  const { room } = props;

  const imageStyle = {
    height: '40%',
    paddingTop: '60%',
    width: '100%',
    objectFit: 'cover',
  };

  const cardStyle = {
    margin: '0 20px',
    width: '40vw',
    display: 'flex',
    justifyContent: 'flex-start',
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
          <Typography component="p" style={{ margin: '2rem 0' }}>{room.description}</Typography>
          <ul className="social-media-icons">
            <li><TiSocialFacebook /></li>
            <li><RiTwitterFill /></li>
            <li><SiInstagram /></li>
          </ul>
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
