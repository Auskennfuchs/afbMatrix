import React, { Component } from 'react';
import { Grid, Header, Form, Button, Segment, Image, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class LoginForm extends Component {

    state = {
        data: {
            username: "",
            password: ""
        },
        errors: ""
    }

    onChange = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.data)
            .catch(err => {
                console.log(err)
                this.setState({errors: err.message})
            })
    }

    render() {
        const {errors} = this.state
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
                        <Form size='large' onSubmit={this.onSubmit}>
                            <Segment>
                                {errors && 
                                    <Message negative>{errors}</Message>
                                }
                                <Form.Input id="username" name="username" fluid icon='user' iconPosition='left' placeholder='User Id' onChange={this.onChange}/>
                                <Form.Input id="password" name="password"                                   
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.onChange}
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