import React, {Component} from 'react';

import './middle-content.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/fontawesome-free-solid'
import Project_landing_page from "../Project/Project_landing_page/project_landing_page";

class Middle_content extends Component {
    render() {
        return (
            <div className="middle-content-body">
                <div className="scroll_navigation">
                    <div className="dot"/>
                    <div className="nav_line"/>
                    <div className="dot selected"/>
                    <div className="nav_line"/>
                    <div className="dot"/>
                    <div className="nav_line"/>
                    <div className="dot"/>
                    <div className="nav_line"/>

                </div>
                <div className="scroll_container">
                    <div className="content_area">
                        <div className="content_title">
                            <p className="header-text-color-purple">Scroll To Check</p>
                            <div className="content_title_nav footer-text-color-grey">
                                <FontAwesomeIcon icon={faArrowLeft}/>
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </div>
                        </div>
                        <div className="content_scroll_area">
                            <Project_landing_page/>
                            <Project_landing_page/>
                            <Project_landing_page/>
                            <Project_landing_page/>
                            <Project_landing_page/>
                            <Project_landing_page/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Middle_content;
