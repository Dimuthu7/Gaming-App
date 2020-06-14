import React, {Component} from 'react';
import './StoreStyle.css'

class Game extends Component {
    render() {
        const {gameName, userDescription, price, imgUrl} = this.props;
        return (
            <div className="col-md-6" id="GameBody">
                <div className="card text-white bg-dark" style={{margin:30, height:550}}>
                    <img src={require(`${imgUrl}`)} style={{height:350}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{gameName}</h5>
                        <p className="card-text">{userDescription}</p>
                        <p className="card-text">{price}</p>
                        {/*If user signIn, display BUY NOW button. Otherwise display signIn or register link*/}
                        {(localStorage.getItem('user-email')) ?
                            <button type="button" className="btn btn-outline-primary" style={{width:200}}>BUY NOW</button>
                            :<span style={{color:"#ADD8E6"}}><a href="/login" style={{marginBottom:20}}>SignIn</a> or <a href="/register" style={{marginBottom:20}}>Register</a></span>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;