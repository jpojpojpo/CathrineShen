import React, {Component} from 'react';

import './footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

class Footer extends Component {
    render() {
        return (
            <div className="footer-body">
                <div className="social_icon footer-text-color-grey">
                    <FontAwesomeIcon icon={["fab","facebook"]}/>
                    <FontAwesomeIcon icon={["fab","twitter"]}/>
                </div>
                <div className="Legal_area footer-text-color-blue">
                    <div>Legal documentation</div>
                    <div>Contract offer</div>
                    <div>Privacy policy</div>
                </div>
                <div className="contact_info">
                    <div className="phone_number"><p className="footer-text-color-grey">Call Us:</p><p className="footer-text-color-black-bold">+17000123763</p></div>
                    <div className="email_address"><p className="footer-text-color-grey">Press:</p><p className="footer-text-color-black-bold">marketing@awallet.com</p></div>
                </div>
            </div>
        );
    }
}

export default Footer;
