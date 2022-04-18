import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import CheckOut from './component/CheckOut/CheckOut';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navigation from './component/Navigation/Navigation';
import NotFound from './component/NotFound/NotFound';
import RequireAuth from './component/RequireAuth/RequireAuth';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       <Route path="/checkout" element={
         <RequireAuth>
           <CheckOut></CheckOut>
         </RequireAuth>
       }></Route>
       <Route path="/signup" element={<SignUp></SignUp>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
