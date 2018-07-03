import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
    />
)

UserRoute.propTyps = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.jwtToken
})

export default connect(mapStateToProps)(UserRoute)