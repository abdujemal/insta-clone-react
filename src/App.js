import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './View/pages/Home/Home';
import Post from './View/pages/Post/post';
import Register from './View/pages/Register/register';
import Login from './View/pages/Login/Login';
import Profile from './View/pages/Profile/profile';
import P404 from './View/pages/404/404';
import { useGlobalContext } from './View/controller/MyContext';

const RequireAuth = ({ children }) => {
  const { user } = useGlobalContext()
  return user ? children : <Navigate to="/login" replace />;
};

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='*' element={<RequireAuth><P404/></RequireAuth>}/>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/p/:id' element={<RequireAuth><Post/></RequireAuth>} />
        <Route path='/user/:profileName' element={<RequireAuth><Profile/></RequireAuth>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
