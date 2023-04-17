import { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import LightboxComponent from "./components/LightboxComponent";
import SliderComponent from "./components/SliderComponent";
import "./styles/styles.scss";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {isMobile ? <LightboxComponent /> : <SliderComponent />}
        <Content />
      </main>
    </>
  );
};

export default App;
