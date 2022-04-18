import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import CheckOut from './Pages/Shared/CheckOut/CheckOut';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login> </Login>}>Login</Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}>Login</Route>
        <Route path='/register' element={<Register></Register>}>Login</Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
