import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { MainRouter } from "./components/router/MainRouter";
import { useState } from "react";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app" style={{display : "flex",}} >
      {isSidebarOpen && <Sidebar />}
      <div style={{ width : "100%"}} >
        <div><Navbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}/></div>
        <MainRouter/>
      </div>
    </div>
  );
}

export default App;
