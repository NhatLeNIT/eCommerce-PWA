import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from './../../actions';
import DropdownUser from './../../components/DropdownUser';
import DropdownMessage from './../../components/DropdownMessage';
import DropdownNotification from './../../components/DropdownNotification';
import NavbarHeader from '../../components/NavbarHeader';

class MenuHeader extends Component {
    componentDidMount() {
        this.props.onGetUser();
    }
    render() {
        return (
            <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-semi-dark navbar-shadow">
                <div className="navbar-wrapper">
                    <div className="navbar-header">
                        <NavbarHeader />
                    </div>
                    <div className="navbar-container content">
                        <div className="collapse navbar-collapse" id="navbar-mobile">
                            <ul className="nav navbar-nav mr-auto float-left">
                                <li className="nav-item d-none d-md-block"><span className="nav-link nav-link-expand"><i className="ficon ft-maximize" /></span></li>
                            </ul>
                            <ul className="nav navbar-nav float-right">
                                <DropdownNotification />
                                <DropdownMessage />
                                <DropdownUser user={this.props.user} />
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}

MenuHeader.propTypes = {
    user: PropTypes.object.isRequired,
    onGetUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetUser: () => { dispatch(getUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader);