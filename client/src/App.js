import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Album } from "./components/Album/Album";
import {BottomNav} from "./components/BottomNav/BottomNav";
import { AboutUs } from "./pages/AboutUs"


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        {/* LOGIN ROUTE */}
        <Route exact path="/">
          <Album />
          </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        {/* SIGNUP ROUTE */}
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
          </Route>
        <BottomNav />
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
