import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { InMemoryCache, useQuery, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Album } from "./components/Album/Album";
import { BottomNav } from "./components/BottomNav/BottomNav";

import { AboutUs } from "./pages/AboutUs";
import { Account } from "./pages/Account";
import { Movie } from "./pages/Movie";
import { Favorites } from "./pages/Favorites";
// import { Comment } from "./pages/Comment"

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

//Adding comment to force push

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// const client = new ApolloClient({
//   uri: 'https://localhost:3002',
//   cache: new InMemoryCache()
// });

// client
//   .query({
//     query: gql`
//     query user($userId: String!) {
//     user(userId: $userId) {
//       _id
//       firstName
//       lastName
//       email
//       }
//     }
//   }
// `
//   })
//   .then(result => console.log(result));

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
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
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/movies">
            <Movie />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          {/* <Route exact path="/comment/:movieTitle">
          <Comment />
        </Route> */}
          <BottomNav />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
