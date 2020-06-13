import React, {Component} from 'react';
import Logo from './login.svg';
import './homeStyle.css';

class Home extends Component {


    render() {
        return (
          <div className="row" id="body">
                <div className="col-md-8" >
                    <img src={Logo} className="LogoImg"></img>
                </div>
                <div className="col-md-4">
                    <div id="MainText">Enter the Battle</div>
                    <h4>The GG Games Store is a curated digital storefront for PC and Mac, designed with both players and creators in mind.</h4>
                </div>
            </div>


        );
    }
}

export default Home;