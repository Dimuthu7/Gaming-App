import React, {Component} from 'react';

class NavBar extends Component {
    onSignOutHandle = (e) => {
        localStorage.removeItem('user-name');
        localStorage.removeItem('user-email');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">GG Gaming</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/store">Store</a>
                        </li>
                    </ul>
                    {(localStorage.getItem('user-name')) !== null ?
                    <span className="navbar-text ml-auto" >
                        {localStorage.getItem('user-name')} | <a href="/login" onClick={this.onSignOutHandle}>SignOut</a>
                    </span>
                        :
                        <span className="navbar-text ml-auto">
                            <a href="/login">SignIn</a> | <a href="/register">SignUp</a>
                        </span>
                    }
                </div>
            </nav>
        );
    }
}

export default NavBar;