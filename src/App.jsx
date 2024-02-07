import "./App.css";

import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LeftText from "./views/LeftText";
import HomePage from "./pages/HomePage";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenuHandler = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <Header openMenu={openMenu} onClick={toggleMenuHandler} />
      <LeftText />
      {!openMenu && <HomePage />}
      <Footer />
    </>
  );
}

export default App;
