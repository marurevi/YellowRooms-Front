import React from 'react';
import PropTypes from 'prop-types';

const Reservation = (props) => {
  const {
    userId, roomId, startDate, endDate, city,
  } = props;

  return (
    <div className="reservation">
      <p>
        user id:
        {' '}
        {userId}
      </p>
      <p>
        room id:
        {' '}
        {roomId}
      </p>
      <p>
        start date:
        {' '}
        {startDate}
      </p>
      <p>
        end date:
        {' '}
        {endDate}
      </p>
      <p>
        city:
        {' '}
        {city}
      </p>
    </div>
  );
};

export default Reservation;

Reservation.propTypes = {
  userId: PropTypes.number,
  roomId: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  city: PropTypes.string,
};

Reservation.defaultProps = {
  userId: '0',
  roomId: '0',
  startDate: '12/12/2000',
  endDate: '12/12/2001',
  city: 'city',
};
