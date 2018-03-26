import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


// components

import Footer from "./components/Footer/footer";
import Middle_content from "./components/Middle-area/middle-content";
import Header from "./components/Header/Header";
import Project from "./components/Middle-area/project/project";


//


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header className="header"/>
                    <Route exact path="/" component={Middle_content}/>
                    <Route exact path="/project" component={Project}/>
                    <Footer className="footer"/>
                </div>
            </Router>
        );
    }
}

export default App;
