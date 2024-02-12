import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51OiX5VSBPi0sxMFbRbsYS0a59dFUuzVlxxqF5nWNIleW2xOd1RswPIrvWdg5AaGK8Q8kQ42hKZCdeT7SeJlqTZFn00N5JOf3fy')

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
          <Route path='/orders' element={<>
            <Header />
            <Orders />
          </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<>
            <Header />
            <Checkout />
          </>} />
          <Route path='/payment' element={<>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
