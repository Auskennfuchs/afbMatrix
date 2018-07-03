import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DateUtilities from './dateutilites'
import styled from 'styled-components'
import Week from './week'


const WeeksWrapper = styled.div`
float: left;
width: 100%;
overflow: hidden;
position: relative;
height: 140px;
`

const WeekWrapper = styled.div`
    position: absolute;
    width: 250px;
    &.current {
        left: 0;        
    }

    &.other {
        left: 250px;        

        &.right {
            left: -250px;
        }
    }

    &.sliding {
        transition: transform 100ms ease;
        -webkit-transition: -webkit-transform 100ms ease;
        
        &.left {
            transform: translate3d(-250px, 0, 0);
            -webkit-transform: translate3d(-250px, 0, 0);          
        }

        &.right {
            transform: translate3d(250px, 0, 0);
            -webkit-transform: translate3d(250px, 0, 0);          
        }
    }
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

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.current).addEventListener("transitionend",this.onTransitionEnd)
    }

    onTransitionEnd = () => {
    	this.setState({
            sliding: null,
    	    view: DateUtilities.clone(this.state.other)
    	});

    	this.props.onTransitionEnd();
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

    moveTo = (view, isForward) => {
    	this.setState({
            sliding: isForward ? "left" : "right",
            other: DateUtilities.clone(view)
    	})
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
            <WeeksWrapper>
                <WeekWrapper ref="current" className={"current"+ (this.state.sliding ? (" sliding " + this.state.sliding) : "")}>
                    {this.renderWeeks(this.state.view)}
                </WeekWrapper>
                <WeekWrapper ref="other" className={"other"+ (this.state.sliding ? (" sliding " + this.state.sliding) : "")}>
                    {this.renderWeeks(this.state.other)}
                </WeekWrapper>
            </WeeksWrapper>
        )
    }
}

export default Weeks