//import logo from './logo.svg';
import './App.css';
import './style/Background_style.css';
import MainHead from './component/MainHead';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <div className="bg1"></div>
      <div className="bg2"></div>
      <Main>
        <MainHead></MainHead>
      </Main>
    </div>
  );
}

export default App;
