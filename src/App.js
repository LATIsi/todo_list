//import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import MainHead from './component/MainHead';
import './style/Background_style.css';


function App() {
  return (
    <div className="App">
    <div className="bg1"/>
    <div className="bg2"/>
      <Main>
        <MainHead></MainHead>
      </Main>
    </div>
  );
}

export default App;
