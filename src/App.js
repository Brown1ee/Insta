import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ModalSwitch from "./components/ModalSwitch";

const App = () => {
  return (
    <div>
      <Router>
        <ModalSwitch />
      </Router>
    </div>
  );
};

export default App;
