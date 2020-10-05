import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './views/Feed';
import CategoryList from './components/CategoryList';
import CompanyList from './components/CompanyList';
import Profile from './views/Profile';
import {BrowserRouter as Router , Switch , Route}  from 'react-router-dom';
import Company from './views/Company';
import Category from './views/Category';
import Advert from './views/Advert';
import Login from './views/login';
import ResetPassword from './views/resetPassword';
import ForgotPassword from './views/forgotPassword';
import { ProtectedRoute } from './protected';



function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/setPassword/:token" component={ResetPassword}/>
      <Route exact path="/forgotPassword" component={ForgotPassword}/>
        <Navbar/>

        <div className="empty-block"></div>
        <Switch>
        <div className="feed-row">
          <CategoryList/>
            <ProtectedRoute exact path="/" component={Feed}/>
            <Route exact path="/profile" component={Profile}/>
            <ProtectedRoute exact path="/company/:id" component={Company}/>
            <ProtectedRoute exact path="/category/:id" component={Category}/>
            <ProtectedRoute exact path="/advert/:id" component={Advert}/>
          <CompanyList/>
        </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
