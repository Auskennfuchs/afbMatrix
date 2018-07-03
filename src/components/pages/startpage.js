import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DatePicker from '../elements/datepicker/datepicker'
import { Card, Icon } from 'semantic-ui-react'
import AppTemplate from '../assets/apptemplate'

class StartPage extends Component {

    redirectTo = (path) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <AppTemplate title="Start" history={this.props.history}>
                <DatePicker />
                <Card.Group centered>
                    <Card link onClick={() => this.redirectTo("/conditions")}>
                        <Card.Content>
                            <Card.Header><Icon name="clipboard list" size="big" />Konditionen</Card.Header>
                            <Card.Description>Toller Text<br />zweite Zeil</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card link>
                        <Card.Content>
                            <Card.Header><Icon name="calculator" size="big" />Methoden</Card.Header>
                            <Card.Description>Toller Text</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </AppTemplate>
        )
    }
}

StartPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect()(StartPage)