import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="app">
      Hello Portfolio. You empty!
      <Topbar />
      <div className="sections">
        <Intro />
      </div>
    </div>
  );
}

export default App;
