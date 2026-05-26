import { useState } from "react";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  useTheme(); // Bahala sa Dark Mode system
  
  // Ang tagabantay kung anong page ang aktibo
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen">
       {/* Ipinapasa natin ang view at setView sa Navbar */}
       <Navbar setView={setView} currentView={view} />
       
       {/* Kung "home", ipakita ang Home page. Kung hindi, ipakita ang About page */}
       {view === "home" ? <Home /> : <About />}
    </div>
  );
}

export default App;