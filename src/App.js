import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from '@emotion/react';
// import './App.css';

import ArticlePage from './components/ArticlePage';
import NewArticle from './components/NewArticle';
import Home from './pages/Home';
import Header from './components/Navbar';

function App() {
  return (
    <div>
     <Header/>
     <div>
     <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/create-article' component={NewArticle} />
      <Route exact path='/article-page' component={ArticlePage} />
    </Router>
     </div>
    </div>
  );
}

export default App;
