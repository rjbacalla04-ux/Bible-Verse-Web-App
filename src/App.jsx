// App.js
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  // Ginagamit lang natin ito para maipasa sa Navbar ang state ng icon
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
       <Home />
    </div>
  );
}

export default App;