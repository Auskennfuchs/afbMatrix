import React from 'react'
import styled from 'styled-components'
import { Icon, Menu, Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const HeaderWrapper = styled.div`
  display: block;
  width: 100%;
  background-color: ${props => props.theme.headerColor};
  padding: 0;
  box-sizing: border-box;

  .ui.menu {
      border-radius: 0;
      border: 0 none;
  }
`

const Header = ({ title, user, onLogout }) => (
    <HeaderWrapper>
        <Menu fluid borderless >
            <Menu.Item>
                <Icon name="bars" />
                <span>{title}</span>
            </Menu.Item>
            <Menu.Item position="right">
                <Dropdown item text={user.name}>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={onLogout} icon="sign out" text="Logout"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu>
    </HeaderWrapper>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired
}

const mapStateToProps = ({
    user
}) => ({
    user
});

export default connect(mapStateToProps)(Header)