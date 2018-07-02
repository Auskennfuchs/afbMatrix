import React, { Component } from 'react';
import { Grid, Header, Form, Button, Segment, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class LoginForm extends Component {
    render() {
        return (
            <div className="login-container">
                <style>{`
                body > div,
                body > div > div,
                    div.login-container {
                        height: 100%;
                    }
                `}</style>
                <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' textAlign='center'>
                            <Image src='/logo.png' /> Matrix
                        </Header>
                        <Form size='large' onSubmit={this.props.onSubmit}>
                            <Segment>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button primary fluid size='large' type="submit">
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>            
        )
    }
}

LoginForm.propTypes = {
    onSubmit : PropTypes.func.isRequired
}