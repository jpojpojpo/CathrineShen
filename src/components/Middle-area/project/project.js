import React, {Component} from 'react';

import './project.css';
import TeaserBox from "./TeaserBox";

class Project extends Component {

    render() {
        return (
            <div className="container">
                <TeaserBox className="box"/>
                <TeaserBox className="box"/>
                <TeaserBox className="box"/>
                <TeaserBox className="box"/>
                <TeaserBox className="box"/>

            </div>

        );
    }
}

export default Project;
