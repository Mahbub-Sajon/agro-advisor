import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import CheckOut from './component/CheckOut/CheckOut';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navigation from './component/Navigation/Navigation';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
       <Route path="/signup" element={<SignUp></SignUp>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/about" element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
