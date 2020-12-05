import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from "./components/Checkout/Checkout";
import Login from './components/Authentication/Login'
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./context/StateProvider";
import Payment from "./components/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders'
import SearchResults from "./components/Home/SearchResults";

const promise = loadStripe('pk_test_51Hu8QOLPEJ9VOYsydwMT4SoZUze23ZpEHreajSkAmTUypSJK2CSFeGImpK9qj1TqA7AaowczL20Nmo9wCDQMQfR500FgCzImTV')


function App() {
    const [{},dispatch]=useStateValue();

    useEffect(()=>{
        auth.onAuthStateChanged(authUser =>{
            if(authUser){
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            }else{
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })
    },[])

  return (
      <Router>
          <div className="app">
              <Switch>
                  <Route path="/login">
                      <Login/>
                  </Route>
                  <Route path="/orders">
                      <Header/>
                      <Orders/>
                  </Route>
                  <Route path="/search">
                      <Header/>
                      <SearchResults/>
                  </Route>
                  <Route path="/checkout">
                      <Header/>
                     <Checkout/>
                  </Route>
                  <Route path="/payment">
                      <Header/>
                      <Elements stripe={promise}>
                          <Payment/>
                      </Elements>
                  </Route>
                  <Route path="/">
                      <Header/>
                      <Home/>
                  </Route>

              </Switch>
          </div>
      </Router>

  );
}

export default App;
