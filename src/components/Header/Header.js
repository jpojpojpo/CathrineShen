import React, {Component} from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-body">
                <div className="logo">Cathrine Shen</div>
                <div className="header_right">
                    <nav className="nav_area">
                        <a href='' className="header-text-color-grey">Home</a>
                        <a href='' className="header-text-color-grey">Project</a>
                        <a href='' className="header-text-color-grey">About me</a>
                        <a href='' className="header-text-color-grey">Q&A</a>
                    </nav>
                    <div className="profile_area">
                        <div className="profile_icon"><img src="./img/header/selfie.png" alt="user"/></div>

                        <div className="profile_user_name ">
                            <p className="header-text-color-grey">Hello</p>
                            <p className="header-text-color-purple">&nbsp;Cathrine</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
