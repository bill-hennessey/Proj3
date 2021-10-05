import {BrowserRouter as Router, Route } from 'react-router-dom';

import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';


function App() {
  return (
    <>
      <Router>
        {/* LOGIN ROUTE */}
        <Route exact path="/login">
          <SignIn />
        </Route>
        {/* SIGNUP ROUTE */}
        <Route exact path="/signup">
          <SignUp />
        </Route>

      </Router>
      
    </>
  );
}

export default App;
