import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '리스트1',
    done: true
  },
  {
    id: 2,
    text: '리스트2',
    done: true
  },
  {
    id: 3,
    text: '리스트3',
    done: false
  },
  {
    id: 4,
    text: '리스트4',
    done: false
  },
  {
    id: 5,
    text: '리스트5',
    done: false
  },
  {
    id: 6,
    text: '리스트6',
    done: false
  }
  
];

const TodoState = createContext();
const TodoDispatch = createContext();
const TodoNextId = createContext();


 //initialState안의 항목들...-> List. map이나 concat이나 filter로 풀어줌!
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.List);
    case 'TOGGLE':
      return state.map(List =>
        List.id === action.id ? { ...List, done: !List.done } : List
      );
    case 'REMOVE':
      return state.filter(List => List.id !== action.id);
    default:
      throw new Error(`액션타입이 없음: ${action.type}`);
  }
}

export function TodoUseContext({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(7); //리스트 다음의 배열...
  
// app에서 감싸고나서
// 그 안의 컴퍼넌트들을 적용하기 위해, 맨 안에 children을 넣어줌

  return (
    <TodoState.Provider value={state}>
    <TodoDispatch.Provider value={dispatch}>
      <TodoNextId.Provider value={nextId}>
        {children}   
      </TodoNextId.Provider>
    </TodoDispatch.Provider>
    </TodoState.Provider>
  );
}


//1. 만약 useTodoState,dispatch,nextID가
//APP.js에서 요소들이 TodoUseContext 로 감싸져있지 않다면 에러를 발생시키도록 if문 처리
//2. 외부에서 호출하는건 먼저 app에서 TodoUseContext로 감쌌으니
//이 밑의 useTodo~의 이름을 가진 useContext들을 원하는곳에 호출가능.
export function useTodoState() {
  const context = useContext(TodoState);
  if (!context) {
    throw new Error('TodoUseContext를 찾지 못했습니다.');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatch);
  if (!context) {
    throw new Error('TodoUseContext를 찾지 못했습니다.');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextId);
  if (!context) {
    throw new Error('TodoUseContext를 찾지 못했습니다.');
  }
  return context;
}