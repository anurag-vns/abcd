import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './page4/Home';
import About from './page4/About';
import Dashboard from './page4/Dashboard';
import Up from './page4/Up';



function App() {
  return (
<div>
  
    <nav>
        <Link to="/">Home</Link>|
        <Link to="/about">About</Link>|
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/up">Up</Link>
       
      </nav>
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/up" element={<Up/>}/>
        </Routes>  
    </div>
    


 );
}

export default App;








{/* <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
      </nav>
   
      <Routes>
        <Route path="/"> element={<Home />}/</Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
         <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
     */}