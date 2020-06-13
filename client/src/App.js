import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/home/home";
import Login from "./components/userLogin/Login";
import Register from "./components/userRegistration/Register";
import NavBar from "./components/navBar/NavBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userAddress: "",
            userEmail: "",
            userMobile: "",
            userPassword: "",
            loginEmail: "",
            loginPassword: ""
        }
    }

    onChangeHandle = (e) => {
        alert(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <NavBar/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/register" component={Register} exact/>
                    </Switch>
                </BrowserRouter>
            </div>

        );
    }
}
export default App;
