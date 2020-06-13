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

    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true})

        axios({
            method: 'post',
            url: "http://localhost:8080/api/users/login",
            data: {
                email: this.state.email.toString(),
                password: this.state.password.toString()
            }
        }).then(res => {
            console.log(res.data);
            localStorage.setItem('user-email', res.data.userEmail);
            this.setState({
                isLoading: false,
                email: '',
                password: ''
            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Successfully Login!.`,
                //html: `Store manager ID: ( ${result.data._id} )`,
                showConfirmButton: false,
                timer: 2000
            }).then(r =>{
                this.setState({
                    redirect: "/"
                })
            })
        }).catch(err =>{
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
                <div id="formContent">

                    <h2> Sign In </h2><br/><br/>
                    <p className="login-text">
                            <span className="fa-stack fa-lg">
                              <i className="fa fa-lock fa-stack-1x"></i>
                            </span>
                    </p><br/><br/>
                    <form onSubmit={this.onSubmitHandle}>
                        <input name="email" onChange={this.onChangeHandle} type="email" className="login-username" required={true}
                               placeholder="Email" value={this.state.email}/>
                        <input name="password" onChange={this.onChangeHandle} type="password" className="login-password" required={true}
                               placeholder="Password" value={this.state.password}/>

                        <input type="submit" name="Login" value="Login" className="login-submit" style={{marginTop: "10%"}}/>

                    </form>
                    <a href="/register" style={{marginBottom:20}}>Don't have an account? Sign Up</a>

                </div>
            </div>
        );
    }
}