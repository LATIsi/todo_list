import React from 'react';
import '../style/Background_style.css';
import '../style/Line_style.css';
import { useTodoState } from './Context';

function MainHead() {
  const todos = useTodoState();
  const undoneCount = todos.filter(todo => !todo.done);
  
  console.log(todos); //context에 있는 배열들을 불러옴
  console.log(undoneCount); //context에 있는 배열을 filter로 done이 아닌 애들을 넣어줌

  const today = new Date();
  const dateymd = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const daystr = today.toLocaleDateString('ko-KR', { weekday: 'long' });


  return (
    <div className="header">
      <div  className="dayand">
          <div className="ymd">{dateymd}</div>
          <div className="day">{daystr}</div>
      </div>
      <div className="tasks-left">할 일 {undoneCount.length} 개 남음</div>       
      <hr className="Line1"/>
      <hr className="Line2"/>    
      </div>
  );
}

export default MainHead;