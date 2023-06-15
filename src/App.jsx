import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div className="d-flex">
      <Menu></Menu>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
