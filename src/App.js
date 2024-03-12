import { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        //Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //Logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
            <Routes>
              <Route path='/profile' element={<ProfileScreen/>}></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
