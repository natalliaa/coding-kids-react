import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import Books from './pages/Books';
import About from './pages/About';
import Error from './pages/Error';
import BookDetails from './pages/BookDetails';


//navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/coding-kids-react">
          <Books />
        </Route>
        <Route path="/coding-kids-react/about">
          <About />
        </Route>
        <Route path="/coding-kids-react/book/:id">
          <BookDetails />
        </Route>
        <Route path="/coding-kids-react/*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
