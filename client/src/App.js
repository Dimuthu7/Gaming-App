import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/home/home";
import Login from "./components/userLogin/Login";
import Register from "./components/userRegistration/Register";
import NavBar from "./components/navBar/NavBar";
import Store from "./components/store/Store"
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/register" component={Register} exact/>
                        <Route path="/store" component={Store} exact/>
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </div>

        );
    }
}
export default App;
