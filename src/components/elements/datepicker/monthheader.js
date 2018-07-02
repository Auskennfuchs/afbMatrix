import React, { Component } from 'react'
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const MonthHeaderWrapper = styled.div`
    float: left;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    align-items: center;

    > i {
        font-weight: bold;
        padding: 5px 8px;
        cursor: pointer;
        font-style:normal;

        &:hover {
            color: #026aa7;
        }
    }
`

export default class MonthHeader extends Component {
    render() {
        return (
            <MonthHeaderWrapper>
                <Icon name="chevron circle left" />
                <span>Monat</span>
                <Icon name="chevron circle right" />
            </MonthHeaderWrapper>
        )
    }
}