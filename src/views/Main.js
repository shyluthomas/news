import React from 'react';
import SideOne from "../components/main/SideOne";
import SideTwo from "../components/main/SideTwo";
import './main.scss'

const Main = () => {
  return (
    <div className="App">
          <SideOne/>
          <SideTwo/>
    </div>
  );
};

export default Main;
