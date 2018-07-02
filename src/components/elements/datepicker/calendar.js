import React, { Component } from 'react';
import styled from 'styled-components';
import MonthHeader from './monthheader';
import WeekHeader from './weekheader';
import Weeks from './weeks';

const CalendarContainer = styled.div`
    display: ${props => props.visible ? "block" : "none"};
    position: absolute;
    background: white;
    width: 260px;
    padding: 5px;
    color: #244152;
    border-radius: 3px;
    height: 203px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;    
`



export default class Calendar extends Component {
    render() {
        const { visible } = this.props
        return (
            <CalendarContainer visible={visible}>
                <MonthHeader />
                <WeekHeader/>
                <Weeks view={this.props.view} selected={this.props.selected} onSelect={this.props.onSelect} minDate={this.props.minDate} maxDate={this.props.maxDate}/>
            </CalendarContainer>
        )
    }
}