import React, { Component } from 'react'
import Calendar from './calendar';
import { Input } from 'semantic-ui-react';
import DateUtilities from './dateutilites';

class DatePicker extends Component {

    constructor(props) {
        super(props)
        const def = props.selected || new Date()
        this.state = {
            view: DateUtilities.clone(def),
            selected: DateUtilities.clone(def),
            minDate: null,
            maxDate: null,
            visible: false
        }
    }

    componentDidMount() {
        document.addEventListener("click", (e) => {
            if (this.state.visible && e.target.className !== "date-picker-trigger" && !this.parentsHaveClassName(e.target, "date-picker")) {
                this.hide()
            }
        })
    }

    parentsHaveClassName = (element, className) => {
        let parent = element;
        while (parent) {
            if (parent.className && parent.className.indexOf(className) > -1)
                return true;

            parent = parent.parentNode;
        }
    }

    show = () => {    
        this.setState({visible: true})
    }

    hide = () => {
        this.setState({visible: false})
    }

    render() {
        const {visible} = this.state
        return (
            <div className="ardp-date-picker">
                <Input type="text" readOnly={true} onClick={this.show} />
                <Calendar visible={visible}/>
            </div>
        )
    }
}    

export default DatePicker