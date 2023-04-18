import { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import LightboxComponent from "./components/LightboxComponent";
import SliderComponent from "./components/SliderComponent";
import "./styles/styles.scss";

const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {width > 1030 ? <LightboxComponent /> : <SliderComponent />}
        <Content />
      </main>
    </>
  );
};

export default App;
