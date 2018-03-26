import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './TeaserBox.css';

class TeaserBox extends Component {

    render() {
        return (
            <div className="box">
                <div className="description_container">
                    <div className="project_title">PROJECT NAME</div>
                    <div className="split_line"></div>
                    <div className="description">A multi-disciplinary agency based in Savannah, GA.</div>

                </div>
                <div className="button_container">
                    <div className="button">Check Detail</div>
                </div>
                <div className="mask"></div>
            </div>

        );
    }
}


export default TeaserBox;
