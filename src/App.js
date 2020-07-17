import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './views/Feed';
import CategoryList from './components/CategoryList';
import CompanyList from './components/CompanyList';
import Profile from './views/Profile';

function App() {
  return (
    <div className="App">
      Route
      <Navbar/>
      <div className="empty-block"></div>
      <div className="feed-row">
      <CategoryList/>
      <Feed />
      {/* <Profile/> */}
      <CompanyList/>
      </div>
    </div>
  );
}

export default App;
