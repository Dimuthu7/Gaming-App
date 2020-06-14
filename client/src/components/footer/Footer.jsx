import React, {Component} from 'react';
import './FooterStyle.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row mt-5">
                    <div className="col copyright">
                        <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;