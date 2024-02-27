import React from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import GlobalStyles from "./Styles/GlobalStyles";


function App() {
    return (
      <div className="App">
          <GlobalStyles />
          <LandingPage />
      </div>
    );
  }
  
  export default App;