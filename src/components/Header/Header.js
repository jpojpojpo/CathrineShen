import React, {Component} from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-body">
                <div className="logo">CathrineShen</div>
                <div className="header_right">
                    <nav className="nav_area">
                        <a href=''>Home</a>
                        <a href=''>Home</a>
                        <a href=''>Home</a>
                        <a href=''>Home</a>
                    </nav>
                    <div className="profile_area">
                        <div className="profile_icon">icon</div>
                        <div className="profile_user_name">hanyu</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
