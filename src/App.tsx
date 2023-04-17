import Content from "./components/Content";
import Header from "./components/Header";
import LightboxComponent from "./components/LightboxComponent";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <LightboxComponent />
        <Content />
      </main>
    </>
  );
};

export default App;
