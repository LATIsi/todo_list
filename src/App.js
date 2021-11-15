//import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import './style/Background_style.css';
import './style/Line_style.css';
import List from './component/List';
import MainHead from './component/MainHead';
import TodoCreate from './component/Todocreate';
import { TodoUseContext } from './component/Context';
//, "homepage":"http://LATIsi.github.io/todo_list"

function App() {
  return (
   <>
   <TodoUseContext>
    <div className="bg1"/>
    <div className="bg2"/>
    <Main>
      <MainHead/>
      <List/>
      <TodoCreate/>
    </Main>
    </TodoUseContext>
   </>
  );
}

export default App;
