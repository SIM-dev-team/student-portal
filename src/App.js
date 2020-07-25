import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './views/Feed';
import CategoryList from './components/CategoryList';
import CompanyList from './components/CompanyList';
import Profile from './views/Profile';
import {BrowserRouter as Router , Switch , Route}  from 'react-router-dom';
import Company from './views/Company';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <div className="empty-block"></div>

        <div className="feed-row">
          <CategoryList/>

          <Switch>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/company/:id" component={Company}/>
            
          </Switch>

          <CompanyList/>
        </div>
      </Router>
    </div>
  );
}

export default App;
