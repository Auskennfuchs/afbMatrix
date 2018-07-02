import React, { Component } from 'react';
import DateUtilities from './dateutilites';
import styled from 'styled-components';
import Week from './week';


const WeekWrapper = styled.div`
float: left;
width: 100%;
overflow: hidden;
position: relative;
height: 140px;
`

class Weeks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            view: DateUtilities.clone(this.props.view),
            other: DateUtilities.clone(this.props.view),
            sliding: null
        }
    }

    getWeekStartDates = (view) => {
        view.setDate(1);
        view = DateUtilities.moveToDayOfWeek(DateUtilities.clone(view), 0);

        var current = DateUtilities.clone(view);
        current.setDate(current.getDate() + 7);

        var starts = [view],
            month = current.getMonth();

        while (current.getMonth() === month) {
            starts.push(DateUtilities.clone(current));
            current.setDate(current.getDate() + 7);
        }

        return starts;
    }

    renderWeeks = (view) => {
        var starts = this.getWeekStartDates(view),
            month = starts[1].getMonth()

        return starts.map((s, i) => (
            <Week key={i} start={s} month={month} selected={this.props.selected} onSelect={this.props.onSelect}
                minDate={this.props.minDate} maxDate={this.props.maxDate} />
        ))
    }

    render() {
        return (
            <WeekWrapper>
                {this.renderWeeks(this.state.view)}
            </WeekWrapper>
        )
    }
}

export default Weeks