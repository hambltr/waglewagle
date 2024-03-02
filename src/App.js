import './App.css';
import './normalize.css';
// import { Button, Container, Navbar, Form, FormControl } from 'react-bootstrap';
import Navbar from './component/nav_top.js';
import Welcome from './component/welcome.js';
import Welcome2 from './component/welcome2.js';
import Category from './component/category.js';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Welcome/>
      <Welcome2/>
      <Category/>
    </div>
  );
}

export default App;
