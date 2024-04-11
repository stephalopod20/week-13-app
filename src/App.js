
import './App.css';

import Navbar from './components/Nav/Nav';
import LoginForm from './components/Login/Login';
//the component that replaces the div id="root"


function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
