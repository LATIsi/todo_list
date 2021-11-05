import React from 'react';
import '../style/Background_style.css';
import List from './List';
import MainHead from './MainHead';
import TodoCreate from './Todocreate';

function Main() {

  return ( <div className="main_ground">
  <MainHead/>
  <List/>
  <TodoCreate />
  </div>);
}

export default Main;