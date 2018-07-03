import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ConditionAPI from '../../apis/conditionapi'

import AppTemplate from '../assets/apptemplate'
import { Table, Tab } from 'semantic-ui-react';

const ConditionTableRow = ({ condition }) => (
    <Table.Row onClick={() => alert(condition.id)} >
        <Table.Cell>{condition.id}</Table.Cell>
        <Table.Cell>{condition.name}</Table.Cell>
    </Table.Row>
)

const ConditionsTable = ({ conditions }) => (
    <Table celled selectable>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body style={{cursor: "pointer"}}>
            {conditions.map((condi, i) => <ConditionTableRow key={i} condition={condi} />)}
        </Table.Body>
    </Table>
)

class ConditionsPage extends Component {

    state = {
        conditions: []
    }

    componentDidMount() {
        this.loadConditions()
    }

    loadConditions = () => {
        ConditionAPI(this.props.user.jwtToken).load().then(
            conditions => this.setState({ conditions: conditions.conditions })
        )
    }

    render() {
        const { conditions } = this.state
        return (
            <AppTemplate title="Konditionen" history={this.props.history}>
                <ConditionsTable conditions={conditions} />
            </AppTemplate>
        )
    }
}

ConditionsPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

const mapStateToProps = ({
    user
}) => ({
    user
});


export default connect(mapStateToProps)(ConditionsPage)