import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RoomItem from './RoomItem';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const RoomList = (props) => {
  const { rooms } = props;

  return (
    <Carousel
      responsive={responsive}
      className="carousel-container"
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      outerSpacing={0}
      autoPlayonDevice="mobile"
      removeArrowOnDeviceType={['tablet', 'mobile']}
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
