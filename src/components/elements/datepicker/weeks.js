import React, { Component } from 'react';
import DateUtilities from './dateutilites';
import styled from 'styled-components';


const WeekWrapper = styled.div`
`

class Weeks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            view : DateUtilities.clone(this.props.view)
        }
    }

    render() {
        return (
            <WeekWrapper>
            </WeekWrapper>                        
        )
    }
}

export default Weeks