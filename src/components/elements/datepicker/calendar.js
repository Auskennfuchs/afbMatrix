import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MonthHeader from './monthheader'
import WeekHeader from './weekheader'
import Weeks from './weeks'

const CalendarContainer = styled.div`
    display: ${props => props.visible ? "block" : "none"};
    position: absolute;
    background: white;
    width: 260px;
    padding: 5px;
    color: #244152;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;    
`
export default class Calendar extends Component {

    onMove = (view, isForward)=> {
        this.refs.weeks.moveTo(view, isForward)
    }

    onTransitionEnd = () => {
    	this.refs.monthHeader.enable()
    }

    render() {
        const { visible } = this.props
        return (
            <CalendarContainer visible={visible}>
                <MonthHeader ref="monthHeader" view={this.props.view} onMove={this.onMove}/>
                <WeekHeader/>
                <Weeks ref="weeks" view={this.props.view} selected={this.props.selected} onSelect={this.props.onSelect} 
                    minDate={this.props.minDate} maxDate={this.props.maxDate}
                    onTransitionEnd={this.onTransitionEnd}/>
            </CalendarContainer>
        )
    }
}

Calendar.propTypes = {
    view: PropTypes.object.isRequired,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    onSelect: PropTypes.func.isRequired,    
}

Calendar.defaultValues = {
    minDate: null,
    maxDate: null
}