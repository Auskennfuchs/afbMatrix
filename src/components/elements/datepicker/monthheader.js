import React, { Component } from 'react'
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';
import DateUtilities from './dateutilites';

const MonthHeaderWrapper = styled.div`
    float: left;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    align-items: center;

    > i {
        font-weight: bold;
        padding: 5px 8px;
        cursor: pointer;
        font-style:normal;

        &:hover {
            color: #026aa7;
        }
    }
`

export default class MonthHeader extends Component {
    state = {
        view: DateUtilities.clone(this.props.view),
        enabled: true
    }

    moveBackward = () => {
        const view = DateUtilities.clone(this.state.view);
        view.setMonth(view.getMonth()-1);
        this.move(view, false);
    }

    moveForward = () => {
        const view = DateUtilities.clone(this.state.view);
        view.setMonth(view.getMonth()+1);
        this.move(view, true);
    }

    move = (view, isForward) => {
        if (!this.state.enabled)
    	    return;

    	this.setState({
    	    view: view,
    	    enabled: false
    	});

    	this.props.onMove(view, isForward);
    }

    enable = () => {
    	this.setState({ enabled: true });
    }

    render() {
        return (
            <MonthHeaderWrapper>
                <Button icon="chevron circle left" onClick={this.moveBackward} disabled={!this.state.enabled}/>
                <span>{DateUtilities.toMonthAndYearString(this.state.view)}</span>
                <Button icon="chevron circle right" onClick={this.moveForward} disabled={!this.state.enabled}/>
            </MonthHeaderWrapper>
        )
    }
}