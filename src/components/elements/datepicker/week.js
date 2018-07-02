import React, { Component } from 'react';
import styled from 'styled-components';
import DateUtilities from './dateutilites';

const WeekContainer = styled.div`
float: left;
width: 100%;
`

const Day = styled.div`
float: left;
width: 14.285714285714286%;
font-size: 0.8em;
padding: 4px 0;
cursor: pointer;
text-align: center;
border-radius: 3px;
`

export default class Week extends Component {
    buildDays = (start) => {
        var days = [DateUtilities.clone(start)],
            clone = DateUtilities.clone(start);

        for (var i = 1; i <= 6; i++) {
            clone = DateUtilities.clone(clone);
            clone.setDate(clone.getDate() + 1);
            days.push(clone);
        }
        return days;
    }

    isOtherMonth = (day) => (
        this.props.month !== day.month()
    )

    getDayClassName= (day) => {
        var className = "day";
        if (DateUtilities.isSameDay(day, new Date()))
            className += " today";
        if (this.props.month !== day.getMonth())
            className += " other-month";
        if (this.props.selected && DateUtilities.isSameDay(day, this.props.selected))
            className += " selected";
        if (this.isDisabled(day))
    	    className += " disabled";
        return className;
    }

    onSelect = (day) => {
        if (!this.isDisabled(day))
            this.props.onSelect(day);
    }

    isDisabled = (day) => {
        var minDate = this.props.minDate,
    	    maxDate = this.props.maxDate;

    	return (minDate && DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities.isAfter(day, maxDate));
    }

    render() {
        const days = this.buildDays(this.props.start)
        return (
            <WeekContainer>
                {days.map((day,i)=> (
                    <Day>{DateUtilities.toDayOfMonthString(day)}</Day>
                ))}
            </WeekContainer>
        )
    }
}