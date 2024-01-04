import logo from './logo.svg';
import './App.css';
import Login from './Components/Signup';
import Allroutes from './Allroutes/Allroutes';
import { io } from 'socket.io-client';

// const socket = io.connect("http://localhost:3001");


function App() {
  return (
    <div className="App">
     <Allroutes/>
    
    </div>
  );
}

export default App;
