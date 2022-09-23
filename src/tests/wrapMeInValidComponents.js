import { Provider } from "react-redux";
import store from "../Redux/store";
import { BrowserRouter } from "react-router-dom";

const wrapper = (ele) => (
  <BrowserRouter>
    <Provider store={store}>{ele}</Provider>;
  </BrowserRouter>
);

export default wrapper;
