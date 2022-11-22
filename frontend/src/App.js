import User from './pages/User';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Adduser from './pages/Adduser';
import EditUser from './pages/EditUser';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (sessionData) => {
    
    sessionStorage.setItem("user", JSON.stringify(sessionData));
    setIsLoggedIn(true);
  }

  const logoutHandler = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    setIsLoggedIn(false)
  }

  useEffect(() => {
    let sessiondata = sessionStorage.getItem('user');
    if(sessiondata){
      setIsLoggedIn(true);  
    }
  }, [])
  
  return (
    <div>
      {/* <Sidebar /> */}
      
      <Routes>
        <Route path='/' element={isLoggedIn? <User logoutHandler={logoutHandler} />: <Login setlogginState={loginHandler} />} />
        <Route path='/add' element={<Adduser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
