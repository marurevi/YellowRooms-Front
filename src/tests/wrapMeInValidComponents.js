import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';

const wrapper = (ele) => (
  <BrowserRouter>
    <Provider store={store}>{ele}</Provider>
    ;
  </BrowserRouter>
);

export default wrapper;
