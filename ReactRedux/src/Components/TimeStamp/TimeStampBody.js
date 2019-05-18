import React, { Component } from 'react';
import { connect } from "react-redux";
import { SET_COUNTING, ASYNC_SETDATA, ASYNC_REMOVE_DATA } from './TimeStampReducer';
import { Link } from 'react-router-dom';
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const mapDispatchToProps = dispatch => {
    return {
        getData: (type) => dispatch(ASYNC_SETDATA(type)),
        setCounting: (num) => dispatch(SET_COUNTING(num)),
        removedata: (id) => dispatch(ASYNC_REMOVE_DATA(id))
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        count: state.count,
        datastamp: state.datastamp,
        load: state.load
    }
}
class TimeStampItem extends Component {
    constructor(props) {
        super(props);
        this.removedata = this.removedata.bind(this);
    }
    removedata(e) {
        e.preventDefault();
        const iditem = this.props.iditem;
        this.props.removedata(iditem);
    }
    render() {
        let basetimerecored = new Date(this.props.timerecored);
        let timerecored = `${monthNames[basetimerecored.getMonth()]} ${basetimerecored.getDate()} ${basetimerecored.getFullYear()} ${basetimerecored.getHours()}:${basetimerecored.getMinutes()}:${basetimerecored.getSeconds()}`;
        return (
            <div className="ts-body__item">
                <div className="ts-body__itemtitle">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="ts-body__iteminfo">
                    <p className="ts-body__itemtime">Recoded: <span>{timerecored}</span></p>
                    <p>
                        <Link to={{
                            pathname: `/tsdetail/${this.props.iditem}`,
                            iditem: this.props.iditem
                        }} className="ts-body__itemlink" href="#c">(Show Details)</Link>
                        <a className="ts-body__itemlink" href="#c" onClick={this.removedata}>(Remove Note)</a>
                    </p>
                </div>
            </div>
        );
    }
}

//const TimeStampItem = connect(mapStateToProps, mapDispatchToProps)(TimeStampItemClass);

class TimeStampBody extends Component {
    componentDidMount() {
        this.props.getData('set');
    }

    render() {
        const { datastamp } = this.props;
        return (
            <div className="ts-body">
                {
                    datastamp.map((item, index) => {
                        return (
                            <TimeStampItem key={index} iditem={item.id} title={item.title} detail={item.detail} timerecored={item.timerecored} removedata={this.props.removedata} count={this.props.count} />
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeStampBody)