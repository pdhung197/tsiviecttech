import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './style/MainNav.scss';

export default class MainNav extends Component {
    render() {
        return (
            <div className="mainnav">
                <Link to="timestamp" href="#c"
                >Time Stamp</Link>
            </div>
        )
    }
}
