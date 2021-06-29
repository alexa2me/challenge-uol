import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Header />
      <MainContainer />
    </GlobalState>
  );
};

export default App;
