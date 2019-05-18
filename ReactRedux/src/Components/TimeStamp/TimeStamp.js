import React, { Component } from 'react'
import TimeStampBody from './TimeStampBody';
import TimeStampAdd from './TimeStampAdd';

import './style/TimeStamp.scss'

class TimeStamp extends Component {
    render() {
        return (
            <>
                <TimeStampAdd />
                <hr />
                <TimeStampBody />
            </>
        )
    }
}

export default TimeStamp;