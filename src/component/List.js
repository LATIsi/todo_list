import React from 'react';
import '../style/Background_style.css';
import TodoItem from './TodoItem';
import { useTodoState } from './Context';

function List() {
  const todos = useTodoState();
  console.log('List Here');

  return (
      <div className="list">
         {todos.map(todo => (
              <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
            />
           ))}
      </div>
  );
}

export default List;