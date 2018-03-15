import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/footer";
import Middle_content from "./components/Middle-area/middle-content";
import Header from "./components/Header/Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header className="header"/>
                <Middle_content className="middle_content"/>
                <Footer className="footer"/>
            </div>
        );
    }
}

export default App;
