import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import User from './components/User'

function App() {

  const param = 1900;
  const isAuth = false;
  return (
    <div className="App">
      <NavBar title="TeachCar" />
      <h1>{param}</h1>
      <p>
        {isAuth ? <div>Kayıtlı</div> : <div><User name="Berkay" departman="Yazılım" /></div>}
      </p>
      <h4 style={{ color: "blue", fontSize: "25px" }}>InlineCss</h4>
      <div className='App-header'>
        Kamil KAPLAN
        <p>Ali</p>
        <div>Veli</div>
      </div>
    </div>
  );
}

export default App;


