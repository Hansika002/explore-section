import React, { createContext, useReducer} from 'react';
import Navbar from './component/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/screens/Home';
import Profile from './component/screens/Profile';
import { reducer, initialState } from './reducer/userReducer';

export const UserContext = createContext();

const Routing = () => {

  return(
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
    </Switch>
  );
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
