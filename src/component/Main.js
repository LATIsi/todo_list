import React from 'react';
import '../style/Background_style.css';

function Main({ children }) {
console.log('TodoItem Here');
  return (
  <div className="main_ground">
  { children }
  </div>);
}

export default Main;