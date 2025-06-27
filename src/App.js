import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home1 from './Home1';
import About1 from './About1';
import Contact from './Contact';
import Dashboard1 from './Dashboard1';




function App() {
  return (
    <div>
      <nav>
      
        <Link to="/">Home1</Link> &nbsp;
        <Link to="/about">About1</Link>&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;
        <Link to="/dashboard">Dashboard1</Link>
       


      </nav>
      <Routes>
        <Route path='/' element={<Home1 />}></Route>
        <Route path="/about" element={<About1 />} ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard/*" element={<Dashboard1 />}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>} />
      
      </Routes>
    </div>
  );
}

export default App;

/* /* <nav>
       <Link to="/">Home</Link> | 
       <Link to="/about">About</Link> | 
       <Link to="/user/101">User 101</Link> | 
       <Link to="/dashboard">Dashboard</Link>
     </nav>

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/user/:id" element={<User />} />
       <Route path="/dashboard/*" element={<Dashboard />} />
       <Route path="*" element={<h2>Page Not Found</h2>} />
     </Routes> */