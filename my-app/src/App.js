import React from 'react';
import Footer from './main/Footer.js';
import css from './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Programming" component={Dev} />
          <Route path="/Design" component={Home} />
          <Route path="/Photography" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
