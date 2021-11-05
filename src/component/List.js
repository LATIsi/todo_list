import React from 'react';
import '../style/Background_style.css';
import TodoItem from './TodoItem';


function List() {
  return (
      <div className="list">
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
      </div>
  );
}

export default List;