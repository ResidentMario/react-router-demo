// const App = () => 'Hello World!';

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import React, { Component } from 'react';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const NoMatch = () => <h1>404</h1>;

// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default App;
