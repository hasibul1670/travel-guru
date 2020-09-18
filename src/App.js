import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Home from './Component/Home/Home';
import Cox from './Component/Cox/Cox';
import Nomatch from './Component/Nomatch/Nomatch';
import Sreemangal from './Component/Sreemangal/Sreemangal';
import Sundarban from './Component/Sundarban/Sundarban';
import Login from './Component/Login/Login';
import Createacc from './Component/Createacc/Createacc';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Search from './Component/Search/Search';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const usercontex =createContext();



function App() {
  const [loguser,setloguser]=useState({});
  return (

    <usercontex.Provider value={[loguser,setloguser]}>





<Router>
  <Switch>
    <Route path="/home"> <Home /> </Route>
    <Route exact path="/"> <Home /> </Route>
    <Route path="/sreemangal"> <Sreemangal /></Route>
    <Route path="/sundarban"><Sundarban /> </Route>
    <Route path="/coxbazar"> <Cox /></Route>
    <Route path="/login"> <Login /> </Route>
    <Route path="/create-account"> <Createacc/> </Route>
    {/* <Route path ="/search"> <Search/> </Route> */}
    <PrivateRoute path="/search"> <Search /> </PrivateRoute>
    <Route path="*"><Nomatch></Nomatch> </Route>
    <Route path="/home">  </Route>
    <Route exact path="/"> <Home /> </Route>
  </Switch>
</Router>

</usercontex.Provider>
 
  );
}

export default App;
