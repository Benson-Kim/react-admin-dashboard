import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Sideba from './Components/Sidebar/Sideba';
import Homie from "./Pages/Home/Homie";
import Users from "./Pages/Users/Users";


function App() {
  return (
    <div>
    <Navbar />
      <div className="container">
        <Sideba />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homie />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
