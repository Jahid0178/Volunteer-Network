import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Donation from "./components/Donation/Donation";
import Events from "./components/Events/Events";
import Blog from "./components/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import LogIn from "./components/LogIn/LogIn";
import AuthProvider from "./contexts/AuthProvider";
import AddEvents from "./components/AddEvents/AddEvents";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/donation">
              <Donation></Donation>
            </Route>
            <Route path="/events">
              <Events></Events>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/addEvent">
              <AddEvents></AddEvents>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
