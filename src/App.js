import "./App.css";
import { Provider } from "react-redux";
import Booking from "./components/Booking";
import Header from "./components/Header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Booking />
    </Provider>
  );
}

export default App;
