import Topnav from "./Components/Topnav/Topnav";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home";

import './app.css'

function App() {
  return (
    <div>
       
      <Topnav />
      <div class="container">
        <Sidebar />
        <Home />
      </div>
        
    </div>
  );
}

export default App;
