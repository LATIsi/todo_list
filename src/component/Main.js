import React from 'react';
import '../style/Background_style.css';

function Main({ children }) {

  return (
    <div>

    <div className="main_ground">{children}</div>
    </div>);
}

export default Main;