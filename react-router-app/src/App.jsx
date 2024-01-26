import './App.css';
import {Route, Routes, Navigate, Link} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import SendMail from './components/sendmail';


function App() {
  return(
    <div>
      <h3>React Router App</h3>
      <nav>
        <Link to="/home">Home</Link>&nbsp;
        <Link to="/about">About</Link><br/>
        <Link to="/sendmail">Send Mail</Link><br/>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sendmail" element={<SendMail info= {{name:"john", email:"john@abc.com"}} />} />
      </Routes>
    </div>
  )
}

export default App
