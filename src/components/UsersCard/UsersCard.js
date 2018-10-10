import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UsersCard extends Component {
    componentDidMount() {
        this.props.onPageChange(parseInt(this.props.match.params.id) || 1);
        // console.log(this.props);
    }
    render() {
        console.log(this.props.users);
        return (
            <div>
                This is user card page {this.props.match.params.id}
            </div>
        )
    }
}
UsersCard.propTypes = {

}

export default UsersCard

