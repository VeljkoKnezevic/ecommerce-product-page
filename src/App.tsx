import { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import LightboxComponent from "./components/LightboxComponent";
import SliderComponent from "./components/SliderComponent";
import "./styles/styles.scss";

const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const images = [
    { src: "/images/image-product-1.jpg" },
    { src: "/images/image-product-2.jpg" },
    { src: "/images/image-product-3.jpg" },
    { src: "/images/image-product-4.jpg" },
  ];

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      {hamburgerClicked ? <div id="bg" /> : ""}
      {hamburgerClicked ? <div id="bg-menu" /> : ""}
      <Header
        hamburgerClicked={hamburgerClicked}
        setHamburgerClicked={setHamburgerClicked}
      />
      <main className="main">
        {width > 1030 ? (
          <LightboxComponent images={images} />
        ) : (
          <SliderComponent images={images} />
        )}
        <Content />
      </main>
    </>
  );
};

export default App;
