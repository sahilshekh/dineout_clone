// import Home from './components/Home/Home';
import Subnavbar from "./components/Subnavbar/Subnavbar";
import { AllRoutes } from "./Routes/Routes";
import { Popup } from "./components/Popup/Popup";

function App() {
  return (
    <div className="App">
      <Popup />
      <AllRoutes />
    </div>
  );
}

export default App;
