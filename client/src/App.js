import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Register/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Register />
    </div>
  );
}

export default App;
