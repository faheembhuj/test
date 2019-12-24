import React from 'react';
import Home from '../screens/home';
import { BrowserRouter as Router, Route} from "react-router-dom";

function Navigations() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/user/:username" component={Home} />
            </div>
        </Router>
    );
}

export default Navigations