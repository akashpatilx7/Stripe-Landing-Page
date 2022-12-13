import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Submenu from "./components/Submenu/Submenu";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <>
      {/* NavBar */}
      <Navbar />
      {/* SideBar */}
      <Sidebar />
      {/* Hero */}
      <Hero />
      {/* SubMenu */}
      <Submenu />
    </>
  );
}

export default App;
