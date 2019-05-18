import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { ASYNC_SETDATA } from './TimeStampReducer';

const mapDispatchToProps = dispatch => {
    return {
        getData: (type) => dispatch(ASYNC_SETDATA(type))
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        datastamp: state.datastamp
    }
}

class TimeStampDetail extends Component {
    componentDidMount() {
        this.props.getData('set');
    }
    render() {
        const { datastamp } = this.props;
        const iditem = this.props.location.pathname.split('/').pop();
        const dataitem = (!datastamp || datastamp.length < 0) ? [] : datastamp.find((item) => { return item.id.toString() === iditem });
        return (
            (!dataitem || dataitem.length < 0) ?
                <></>
                :
                <div className="ts-detail-cover">
                    <div className="ts-detail">
                        <h1>
                            {dataitem.title}
                            <Link className="ts-detail__back" to="/timestamp">Back</Link>
                        </h1>
                        <p>{dataitem.detail}</p>
                    </div>
                </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeStampDetail)
