import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Pagination from '../../components/UI/Pagination';
import UserCard from './../../components/UsersCard'
import { fetchUsers } from './../../actions';

class Users extends Component {
    state = {
        currentPage: 1,
        limit: 10
    }

    handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
        let stateClone = { ...this.state };
        stateClone.currentPage = pageNumber;
        this.setState(stateClone);

        let offset = (pageNumber - 1) * this.state.limit;
        this.props.onFetchUsers(offset, this.state.limit);

    }

    render() {
        return (
            <Fragment>
                <Route path={this.props.match.url}
                    exact
                    render={(props) => <UserCard {...props}
                        onPageChange={(pageNumber) => this.handlePageChange(pageNumber)}
                        users={this.props.users} />} />
                <Route path={this.props.match.url + '/:id'}
                    exact
                    render={(props) => <UserCard {...props}
                        onPageChange={(pageNumber) => this.handlePageChange(pageNumber)}
                        users={this.props.users} />} />
                <Pagination
                    totalRecord={this.props.totalRows}
                    limit={this.state.limit}
                    currentPage={this.state.currentPage}
                    onPageChange={(pageNumber) => this.handlePageChange(pageNumber)} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.list,
        totalRows: state.user.totalRows
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchUsers: (offset, limit) => { dispatch(fetchUsers(offset, limit)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);