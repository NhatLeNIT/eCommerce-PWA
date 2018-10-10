import React, { Component, Fragment } from 'react'
import MenuHeader from './../../containers/MenuHeader';
import MenuAccordion from './../../containers/MenuAccordion';

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <MenuHeader />
                <MenuAccordion />
                <div className="app-content content">
                    <div className="content-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
}
