import reservationsReducer from '../redux/Reservations/Reservations';

test('Reservations reducer gets all the data', () => {
  const GET_RESERVATIONS = 'RESERVATIONS';
  const listOfReservations = [];
  const reducer = reservationsReducer(listOfReservations, {
    type: GET_RESERVATIONS,
    payload: [
      {
        id: 1, user_id: 1, room_id: 1, start_date: '15/06/30', end_date: '15/06/31', city: 'Miami',
      },
      {
        id: 2, user_id: 1, room_id: 2, start_date: '15/06/31', end_date: '15/06/32', city: 'Rio de Janeiro',
      },
    ],
  });

  expect(reducer).toStrictEqual([
    {
      id: 1, user_id: 1, room_id: 1, start_date: '15/06/30', end_date: '15/06/31', city: 'Miami',
    },
    {
      id: 2, user_id: 1, room_id: 2, start_date: '15/06/31', end_date: '15/06/32', city: 'Rio de Janeiro',
    },
  ]);
});
