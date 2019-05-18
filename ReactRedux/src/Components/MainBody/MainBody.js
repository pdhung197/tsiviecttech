import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import TimeStamp from './../TimeStamp/TimeStamp';
import TimeStampDetail from './../TimeStamp/TimeStampDetail';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './../TimeStamp/TimeStampReducer';

import './style/MainBody.scss';
const store = createStore(reducer, applyMiddleware(thunk));
export default class MainBody extends Component {
    render() {
        return (
            <main>
                <Provider store={store}>
                    <Switch>
                        <Route path="/timestamp" component={TimeStamp} />
                        <Route path="/tsdetail" render={(props) => <TimeStampDetail {...props} />} />
                        <Redirect from="/" to="/timestamp" />
                    </Switch>
                </Provider>
            </main>
        )
    }
}
