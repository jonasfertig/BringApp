import React from "react"
import './scss/style.scss'
import Index from "./pages/index.js"
import ShopAvailableDeliveries from "./components/Shop/shopAvailableDeliveries";
import HttpService from "./services/HttpService";
// import Login from './pages/login.js'
import "./scss/style.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import UserService from './services/UserService.js'

export default function App() {
  
  return (
    <Router>
        <Switch>
        { <Route path="/shop">
            <ShopAvailableDeliveries />
          </Route>
          /*<Route path="/profile">
            <Profile />
          </Route> */}
          <Route path="/">
            <Index />
          </Route>
        </Switch>
    </Router>
  );
}
UserService.initKeycloak(App)
HttpService.configure();
