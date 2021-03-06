import React, {Component} from "react";
import './LoginStyle.css';
import SiteLoading from '../siteloading/SiteLoading';
import axios from 'axios';
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";


export default class Login extends Component{
    state = {
        redirect: '',
        isLoading: false,
        email: '',
        password: ''
    };

    //Handle change event for all input field in login form
    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Handle submit button click event
    onSubmitHandle = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true})
        //Send post request to API and check whether user name and password correct or not.
        axios({
            method: 'post',
            url: "http://localhost:8080/api/users/login",
            data: {
                email: this.state.email.toString(),
                password: this.state.password.toString()
            }
        }).then(res => {
            //console.log(res.data);
            localStorage.setItem('user-email', res.data.userEmail);
            localStorage.setItem('user-name', res.data.userName);
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })
/*            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Successfully Login!.`,
                showConfirmButton: false,
                timer: 2000
            });*/
            this.props.history.push('/store');
            window.location.reload();

        }).catch(err =>{  //Handle error
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })
            if(err.response.status === 404){
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: err.response.data
                });
            }
        })

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        if (this.state.isLoading) {
            return <SiteLoading />
        }
        return(
            <div className="wrapper fadeInDown" style={{marginTop: "4%"}}>
                <div id="loginBody">

                    <h2> Sign In </h2><br/><br/>
                    <p className="login-text">
                            <span className="fa-stack fa-lg">
                              <i className="fa fa-lock fa-stack-1x"></i>
                            </span>
                    </p><br/><br/>
                    <form onSubmit={this.onSubmitHandle}>
                        <input name="email" onChange={this.onChangeHandle} type="email" className="login-username" required={true}
                               placeholder="Email" value={this.state.email} id="email"/>
                        <input name="password" onChange={this.onChangeHandle} type="password" className="login-password" required={true}
                               placeholder="Password" value={this.state.password} id="password"/>

                        <input type="submit" name="Login" value="Login" className="login-submit" style={{marginTop: "10%"}}/>

                    </form>
                    <a href="/register" style={{marginBottom:20}}>Don't have an account? Sign Up</a>

                </div>
            </div>

        );
    }
}