import React, { ReactElement } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormikTest from './pages/FormikTest';
import RHFTest from './pages/RHFTest';
import Home from './pages/Home';

function App(): ReactElement {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'lightgrey', overflow: 'scroll' }}>
      <Router>
        <nav>
          <ul style={{ margin: 0, display: 'flex' }}>
            <li style={{ listStyle: 'none', margin: 10 }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ listStyle: 'none', margin: 10 }}>
              <Link to="/FormikTest">FormikTest</Link>
            </li>
            <li style={{ listStyle: 'none', margin: 10 }}>
              <Link to="/RHFTest">RHFTest</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/FormikTest">
            <FormikTest />
          </Route>
          <Route path="/RHFTest">
            <RHFTest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
