import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { MainRouter } from "./components/router/MainRouter";


function App() {
  return (
    <div className="app" style={{display : "flex",}} >
      <Sidebar/>
      <div style={{ width : "100%"}} >
        <div><Navbar/></div>
        <MainRouter/>
      </div>
    </div>
  );
}

export default App;
