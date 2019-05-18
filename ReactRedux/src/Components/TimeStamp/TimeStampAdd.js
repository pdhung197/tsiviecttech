import React, { Component } from 'react'
import { connect } from "react-redux";
import { ASYNC_ADD_DATA, ASYNC_SETDATA } from './TimeStampReducer';

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(ASYNC_SETDATA()),
        inserttimestam: (data) => dispatch(ASYNC_ADD_DATA(data))
    }
}
const mapStateToProps = () => {
    return {}
}
class TimeStampAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            detail: ''
        };
        this.addNote = this.addNote.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }
    addNote(e) {
        e.preventDefault();
        let title = this.state.title;
        let detail = this.state.detail;
        if (!title.length || !detail.length) {
            alert('Please input title and detail');
            return;
        }
        let timerecored = new Date();
        const newitem = {
            title,
            detail,
            timerecored
        }
        this.props.inserttimestam(newitem);
        this.setState({
            title: '',
            detail: ''
        })
    }
    changeInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        if (value !== this.state[name])
            this.setState({
                [name]: value
            });

    }
    render() {
        return (
            <div className="container-fluid ts-add__containter">
                <form>
                    <h1>TimeStamped Notes App</h1>
                    <input type="text" onChange={this.changeInput} className="form-control rounded-0" name="title" placeholder="Note Title" value={this.state.title} />
                    <textarea placeholder="Note Details" onChange={this.changeInput} name="detail" value={this.state.detail}></textarea>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="submit" onClick={this.addNote} className="btn btn-primary rounded-0">Add Note</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeStampAdd);