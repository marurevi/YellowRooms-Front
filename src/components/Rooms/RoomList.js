import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RoomItem from './RoomItem';

const RoomList = (props) => {
  const { rooms } = props;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      className="carousel-container"
      infinite
      centerMode
    >
      {rooms.map(({ attributes: room }) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </Carousel>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    attributes: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default RoomList;
