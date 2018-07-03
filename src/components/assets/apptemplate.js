import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../elements/header'
import { Segment } from 'semantic-ui-react'
import { loggedOut } from '../../actions/user';

class AppTemplate extends Component {

    onLogout = () => {
        this.props.logout().then(this.props.history.push("/"))
    }

    render() {
        const { title } = this.props
        return (
            <div>
                <Header title={title} onLogout={this.onLogout} />
                <Segment basic>
                    {this.props.children}
                </Segment>
            </div>
        )
    }
}

AppTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => Promise.resolve(dispatch(loggedOut()))
})

export default connect(null, mapDispatchToProps)(AppTemplate)