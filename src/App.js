import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';
import Layout from './Layout';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Route>
    </Routes>


  );
}

export default App;

