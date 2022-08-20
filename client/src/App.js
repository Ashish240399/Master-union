import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Payment from "./components/Payment/Payment";
import Login from "./components/Register/Login";
import Register from "./components/Register/Register";
import AddDetails from "./components/StudentProfile/AddDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-details" element={<AddDetails />} />
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
