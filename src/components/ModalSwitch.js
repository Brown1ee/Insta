import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import ModalImg from "./ModalImg";

const ModalSwitch = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<ProfilePage />} />
        <Route path="/image/:id" children={<ModalImg />} />
      </Switch>
      {background && <Route path="/image/:id" children={<ModalImg />} />}
    </div>
  );
};

export default ModalSwitch;
