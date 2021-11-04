import React from 'react';
import '../style/Background_style.css';
import '../style/Line_style.css';

function MainHead() {
  return (
    <div className="header">
      <h1>2019년 7월 10일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>       
      <hr className="Line1"/>
      <hr className="Line2"/>    
      </div>
  );
}

export default MainHead;