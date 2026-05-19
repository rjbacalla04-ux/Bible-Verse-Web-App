// App.js or Layout.js
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const { darkMode, setDarkMode } = useTheme();
return (
  <div className={darkMode ? "dark" : ""}>
     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
     <Home />
  </div>
);
}
export default App