import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticlePage from "./components/ArticlePages/ArticlePage";
import NewArticle from "./components/NewArticle/NewArticle";
import Home from "./pages/Home";
import Store from "./Store";
import Header from "./components/Navbar";

function App() {
  return (
    <Store>
      <Header />
      <div style={{ marginTop: "5vh" }}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-article" component={NewArticle} />
          <Route path="/article-page/:id" component={ArticlePage} />
        </Router>
      </div>
    </Store>
  );
}

export default App;
