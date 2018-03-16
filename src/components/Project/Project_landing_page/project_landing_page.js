import React, {Component} from 'react';

import './project_landing_page.css';


class Project_landing_page extends Component {
    render() {
        return (
            <div className="project_cover">
                <div className="project_cover_header">
                    <p>Project Name</p>
                </div>
                <div className="project_cover_info">
                    <div className="info 1">
                        <p className="title">Type of project</p>
                        <p className="data">iOS</p>
                    </div>
                    <div className="info 1">
                        <p className="title">responsibility of project</p>
                        <p className="data">UX/UI design</p>
                    </div>
                    <div className="info 1">
                        <p className="title">Online Status</p>
                        <p className="data">30000+ user</p>
                    </div>
                </div>
                <div className="button_container">

                    <div className="button">
                        button
                    </div>
                </div>
            </div>
        );
    }
}

export default Project_landing_page;
