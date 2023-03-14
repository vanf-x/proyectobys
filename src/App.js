import "./App.css";
import Provider from "./components/context/Provider";
import Publico from "./components/context/router/Publico";

function App() {
  return (
    <Provider>
      <Publico />
    </Provider>
  );
}

export default App;
