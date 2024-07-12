import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* 
      <Hero /> */}
    </>
  );
}

export default App;
