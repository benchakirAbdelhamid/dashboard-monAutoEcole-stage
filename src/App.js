import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Nabvar from "./components/Navbars/Nabvar";
import Condidats from "./pages/Condidates";
import Abonemments from "./pages/Abonemments";
import ProfilePage from "./pages/ProfilePage";
import Caisse from "./pages/Caisse";
import Formations from "./pages/Formations";
import Articles from "./pages/Articles";
import Support from "./pages/Support";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import "./App.css";

function App() {
  return (
    <Router>
      <SideBar>
        <Nabvar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/condidats" element={<Condidats />} />
          <Route path="/abonemments" element={<Abonemments />} />
          <Route path="/caisse" element={<Caisse />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/support" element={<Support />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
