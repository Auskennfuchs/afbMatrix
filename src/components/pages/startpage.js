import React, { Component } from 'react'
import {connect} from 'react-redux'
import { loggedOut } from '../../actions/user'
import PropTypes from 'prop-types'
import Header from '../elements/header';
import DatePicker from '../elements/datepicker/datepicker';

class StartPage extends Component {
    onLogout = () => {
        this.props.logout().then(this.props.history.push("/"))
    }
    render() {
        return (
            <div>
                <Header title="Start" onLogout={this.onLogout}/>
                <DatePicker/>
            </div>
        )
    }
}

StartPage.propTypes = {
    logout: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

const mapDispatchToProps = (dispatch)=>({ 
    logout: () => Promise.resolve(dispatch(loggedOut()))
 })

export default connect(null,mapDispatchToProps)(StartPage)