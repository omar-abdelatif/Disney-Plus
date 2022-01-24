import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Detail from './components/Detail'
import Login from './components/Login'
import MoviesList from './components/MoviesList';



function App() {
  return (
    <div className="App" >
      <Router>
        <Header />
        {/* <Switch> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:MovieName">
            <Detail />
          </Route>
          <Route path="/movies">
            <MoviesList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        {/* </Switch> */}
      </Router>
    </ div >
  );
}

export default App;
