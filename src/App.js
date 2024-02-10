import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<>
            <Header />
            <Checkout />
          </>} />
          <Route path='/' element={<>
            <Header />
            <Home />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
