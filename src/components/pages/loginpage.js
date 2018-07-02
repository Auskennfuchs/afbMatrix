import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import UserAPI from '../../apis/userapi'
import { loggedIn } from '../../actions/user';
import LoginForm from '../forms/loginform';

class LoginPage extends Component {

    componentWillMount() {
        if(this.props.isAuthenticated) {
            this.redirectNext()
        }
    }

    onSubmit = (data) => {
        this.props.login(data).then(()=>{
            this.redirectNext()
        })
    }

    redirectNext = ()=> {
        this.props.history.push("/start")
    }

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit}/>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

const mapDispatchToProps = (dispatch) => ({
    login: (credentials) => (
        UserAPI.login(credentials).then(
            user => {
                dispatch(loggedIn(user))
            }
        )
    )
})

const mapStateToProps = ({ 
    user
 }) => ({ 
    isAuthenticated: !!user.name
 });

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)