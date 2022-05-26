import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";


function App() {
  return (
    <div>
    <Navbar />
      <div className="container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
