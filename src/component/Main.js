import React from 'react';
import '../style/Background_style.css';

function Main({ children }) {

  return (
  <div className="main_ground">
  { children }
  </div>);
}

export default Main;