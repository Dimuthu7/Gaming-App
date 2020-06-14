import React, {Component} from 'react';
import axios from 'axios';
import SiteLoading from "../siteloading/SiteLoading";
import Game from "./Game";
import './StoreStyle.css'

class Store extends Component {
    state = {
        redirect: '',
        isLoading: false,
        data: []
    };

    componentDidMount() {
        this.fetchData();
    }

    //Get all games from db
    fetchData = () => {
        axios.get("http://localhost:8080/api/game/")
            .then(res => {
                //console.log(res.data)
                this.setState({
                    data: res.data
                })
            })
            .catch(err => {
                alert('Server Error')
            })
    }

    render() {
        if (!this.state.data) {
            return <SiteLoading />
        }
        return (
            <div className="row m-5" id="StoreBody">
                {this.state.data.map((game, index) => {
                    return <Game key = {index}
                                 gameName = {game.gameName}
                                 userDescription = {game.userDescription}
                                 price = {game.price}
                                 imgUrl = {game.imgUrl}
                    />;
                })}
            </div>
        );
    }
}

export default Store;