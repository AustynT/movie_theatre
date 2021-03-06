import React, { Component } from 'react'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Picker extends Component {

    handleChange = function (date) {
        this.props.callBack(date)
    }.bind(this)

    render() {
        return (
            <div className="picker">
                <h3>Select a date to view the showings:</h3>
                <DatePicker
                    selected={this.props.startDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Picker;