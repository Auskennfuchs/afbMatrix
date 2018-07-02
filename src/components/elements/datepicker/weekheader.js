import React from 'react';
import styled from "styled-components";

const WeekHeaderWrapper = styled.div`
float: left;
width: 100%;
margin-top: 8px;
display: table;
padding-bottom: 3px;
border-bottom: solid 1px #CCC;
margin-bottom: 3px;

span {
    float: left;
    width: 14.285714285714286%;
    font-size: 0.6em;
    text-transform: uppercase;
    color: #026aa7;
    font-weight: bold;
    text-align: center;    
}
`

const WeekHeader = () => (
    <WeekHeaderWrapper>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
    </WeekHeaderWrapper>
)

export default WeekHeader