import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './login/login'
import Register from './signup/signup'
import Addfilm from './index/addFilm/add'

import { Route, BrowserRouter } from "react-router-dom";
import Index from './index/Index';
import Favorite from './index/favorite/favoritelist';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/index" component={Index} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/add" component={Addfilm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
