import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import Login from "./pages/login/Login";
import HomePage from "./pages/Home/HomePage";
import { BannerHome } from "./pages/BannerHome/BannerHome";

function App() {
  return (
    <BannerHome />
    // <Login></Login>
    // <HomePage/>
  );
}

export default App;
