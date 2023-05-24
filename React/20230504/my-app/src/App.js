import logo from './logo.svg';
import './App.css';
import Menu from'./components/menu/Menu.jsx'
import NewMenu from "./components/newMenu/NewMenu.jsx";
import TripList from './components/tripList/TripList';


function TextArea() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        style={{backgroundColor: "blue"}}
      />
    </div>
  );   
}


function App() {
  // 주석입니다!
  /**
   * 주석!
   */

  const name = "라이캣!!";

  return (
    
    
    <div>
      <TripList/>
      <TextArea/>
      <NewMenu/>
      <Menu/>
      {/* {주석이에요!} */}
      {/** JSX 안의 주석! */}
      <input type="radio" checked={false}/>
      <h1 hello="hi">안녕 라이캣!!</h1>
      <h1>안녕 {name}!!</h1>
      <h2 style={{}}>하이</h2>
    </div>
  );
}

export default App;
