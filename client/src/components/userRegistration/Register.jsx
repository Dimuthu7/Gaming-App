import React, {Component} from "react";
import './RegisterStyle.css';
import SiteLoading from '../siteloading/SiteLoading';
import axios from 'axios';
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

export default class Login extends Component{
    state = {
        redirect: '',
        isLoading: false,
        name: '',
        address: '',
        email: '',
        mobile:'',
        password: '',
        validate: false,
    };


    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.fnValidateRegister();
        if(this.state.validate){
            this.setState({ isLoading: true})
            axios({
                method: 'post',
                url: "http://localhost:8080/api/users/register",
                data: {
                    username: this.state.name.toString(),
                    address: this.state.address.toString(),
                    email: this.state.email.toString(),
                    mobile: this.state.mobile.toString(),
                    password: this.state.password.toString()
                }
            }).then(res => {
                this.setState({
                    isLoading: false,
                    email: '',
                })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Successfully SignUp!.`,
                    html: `Your ID: ( ${res.data._id} )`,
                    showConfirmButton: false,
                    timer: 2000
                }).then(r =>{
                    this.setState({
                        redirect: "/login"
                    })
                })
            }).catch(err =>{
                this.setState({
                    isLoading: false,
                    name: '',
                    address: '',
                    email: '',
                    mobile:'',
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

    }

    //validate add user
    fnValidateRegister = () => {
        let mobileNo = document.getElementById('mobileNo').value;
        if (mobileNo.length === 10) {
            this.setState({
                validate: true,
                isLoading: false
            });
        }
        else{
            this.setState({
                validate: false,
                isLoading: false,
            });
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid phone number!',
            })
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        if (this.state.isLoading) {
            return <SiteLoading />
        }
        return(

            <div className="wrapper fadeInDown">

                <div id="formContent" >

                    <h2> Sign Up </h2><br/><br/>
                    <p className="login-text">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-user-plus"></i>
                            </span>
                    </p>
                    <form onSubmit={this.onSubmitHandler}>
                        <input name="name" onChange={this.onChangeHandle} type="text" className="login-username" required={true}
                               placeholder="Name" value={this.state.name}/>
                        <input name="address" onChange={this.onChangeHandle} type="text" className="login-username" required={true}
                               placeholder="Address" value={this.state.address}/>
                        <input name="email" onChange={this.onChangeHandle} type="email" className="login-username" required={true}
                               placeholder="Email" value={this.state.email}/>
                        <input name="mobile" onChange={this.onChangeHandle} type="number" className="login-username" required={true}
                               placeholder="Mobile Number" value={this.state.mobile} id="mobileNo"/>
                        <input name="password" onChange={this.onChangeHandle} type="password" className="login-password" required={true}
                               placeholder="Password" value={this.state.password}/>

                        <input type="submit" name="Login" value="Register" className="login-submit" style={{marginTop: "10%"}}/>
                        <br/>
                        <a href="/login" style={{marginBottom:10}}> Sign In</a>
                    </form>

                </div>
            </div>
        );
    }
}