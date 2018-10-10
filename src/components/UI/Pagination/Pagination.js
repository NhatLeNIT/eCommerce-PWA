import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom';
import LinkCustom from './../../LinkCustom';

export default class Pagination extends Component {
    state = {
        'currentPage': 1,
        'totalRecord': 1,
        'totalPage': 1,
        'limit': 10,
        'group': 10,
        'first': 1,
        'last': 1,
        'prevGroup': 1,
        'nextGroup': 1,
        'linkFull': '/users/',
        'linkFirst': ''
    }
    constructor(props) {
        super(props);
        const config = { ...this.state };

        /*
         * Lặp qua từng phần tử config truyền vào và gán vào config của đối tượng
         * trước khi gán vào thì phải kiểm tra thông số config truyền vào có nằm
         * trong hệ thống config không, nếu có thì mới gán
         */
        for (let key in props) {
            config[key] = props[key];
        }

        /*
         * Kiểm tra thông số limit truyền vào có nhỏ hơn 0 hay không?
         * Nếu nhỏ hơn thì gán cho limit = 0
         */
        if (config.limit < 0) config.limit = 0;

        /*
         * Tính total page, công tức tính tổng số trang như sau:
         * total_page = ciel(total_record/limit).
         */
        config.totalPage = Math.ceil(config.totalRecord / config.limit);

        /*
         * Sau khi có tổng số trang ta kiểm tra xem nó có nhỏ hơn 0 hay không
         * nếu nhỏ hơn 0 thì gán nó băng 1 ngay. Vì mặc định tổng số trang luôn bằng 1
         */
        if (!config.totalPage) config.totalPage = 1;

        /*
         * Trang hiện tại sẽ rơi vào một trong các trường hợp sau:
         *  - Nếu người dùng truyền vào số trang nhỏ hơn 1 thì ta sẽ gán nó = 1
         *  - Nếu trang hiện tại người dùng truyền vào lớn hơn tổng số trang
         *    thì ta gán nó bằng tổng số trang
         */
        if (config.currentPage < 1) config.currentPage = 1;
        if (config.currentPage > config.totalPage) config.currentPage = config.totalPage;

        this.calPrevGroupAndNextGroup(config);
        this.calFirstPageAndLastPage(config);

        this.state = config;

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentPage !== this.props.currentPage || nextProps.totalRecord !== this.props.totalRecord) {
            const config = { ...this.state };
            config.currentPage = nextProps.currentPage;
            config.totalRecord = nextProps.totalRecord;
            config.totalPage = Math.ceil(config.totalRecord / config.limit);
            this.calPrevGroupAndNextGroup(config);
            this.calFirstPageAndLastPage(config);
            this.setState(config);
        }
    }

    calPrevGroupAndNextGroup(config) {
        /*
        * Tinh prevGroup, nextGroup
        */
        config.prevGroup = Math.floor((config.currentPage - 1) / config.group) * config.group + 1 - config.group;
        config.nextGroup = Math.floor((config.currentPage - 1) / config.group) * config.group + 1 + config.group;
    }

    calFirstPageAndLastPage(config) {
        /*
        * Tính first, last
        */

        config.first = Math.floor((config.currentPage - 1) / config.group) * config.group + 1;
        config.last = config.first + config.group - 1;

        if (config.last > config.totalPage) config.last = config.totalPage;
    }

    getLink(page) {
        return this.state.linkFull + page;
    }

    renderFirstPage() {
        if (this.state.currentPage > 1) {
            const label = <Fragment>
                <span aria-hidden="true">First</span>
                <span className="sr-only">First Page</span>
            </Fragment>

            return (
                <LinkCustom label={label} to={this.getLink(1)} onPageChange={() => this.props.onPageChange(1)} />
            )
        }
    }

    renderLastPage() {
        if (this.state.currentPage < this.state.totalPage) {
            const label = <Fragment>
                <span aria-hidden="true">Last</span>
                <span className="sr-only">Last Page</span>
            </Fragment>

            return (
                <LinkCustom label={label} to={this.getLink(this.state.totalPage)} onPageChange={() => this.props.onPageChange(this.state.totalPage)} />
            )
        }
    }

    renderPreviousGroup() {
        if (this.state.currentPage > this.state.group) {
            const label = <Fragment>
                <span aria-hidden="true" className="fa fa-chevron-left"></span>
                <span className="sr-only">Previous Group</span>
            </Fragment>

            return (
                <LinkCustom label={label} to={this.getLink(this.state.prevGroup)} onPageChange={() => this.props.onPageChange(this.state.prevGroup)} />
            )
        }
    }

    renderNextGroup() {
        if (this.state.nextGroup <= this.state.totalPage) {
            const label = <Fragment>
                <span aria-hidden="true" className="fa fa-chevron-right"></span>
                <span className="sr-only">Next Group</span>
            </Fragment>

            return (
                <LinkCustom label={label} to={this.getLink(this.state.nextGroup)} onPageChange={() => this.props.onPageChange(this.state.nextGroup)} />
            )
        }
    }

    renderPreviousPage() {
        if (this.state.currentPage > 1) {
            const label = <Fragment>
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous Page</span>
            </Fragment>

            return (
                <LinkCustom label={label} to={this.getLink(this.state.currentPage - 1)} onPageChange={() => this.props.onPageChange(this.state.currentPage - 1)} />
            )
        }
    }

    renderNextPage() {
        if (this.state.currentPage < this.state.totalPage) {
            const label = <Fragment>
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next Page</span>
            </Fragment>

            return (
                <LinkCustom label={label} to={this.getLink(this.state.currentPage + 1)} onPageChange={() => this.props.onPageChange(this.state.currentPage + 1)} />
            )
        }
    }

    renderThreeDots(position) {

        if (position === 'after' && this.state.nextGroup <= this.state.totalPage)
            return (
                <li className="page-item disabled">
                    <a className="page-link " href="/" aria-label="Previous" title="Trang sau">
                        <span className="fa fa-ellipsis-h"></span>
                    </a>
                </li>
            )
        if (position === 'before' && this.state.currentPage >= this.state.group)
            return (
                <li className="page-item disabled">
                    <a className="page-link" href="/" aria-label="Previous" title="Trang sau">
                        <span className="fa fa-ellipsis-h"></span>
                    </a>
                </li>
            )
    }

    renderPageNumber() {
        let arrNumber = [];
        for (let i = this.state.first; i <= this.state.last; i++) {
            arrNumber.push(i);
        }

        return arrNumber.map(pageNumber => {
            return <LinkCustom
                key={pageNumber}
                label={pageNumber}
                to={'/users/' + pageNumber}
                activeOnlyWhenExact={true}
                onPageChange={() => this.props.onPageChange(pageNumber)}
                activeFirstPage={this.state.currentPage === 1 && pageNumber === 1} />
        })
    }


    render() {
        const config = this.state;
        // console.log(config);

        // Kiểm tra tổng số trang lớn hơn 1 mới phân trang
        if (config.totalRecord > config.limit) {
            return (
                <ul className="pagination justify-content-center">
                    {/* // Nút prev và first */}
                    {this.renderFirstPage()}
                    {this.renderPreviousGroup()}
                    {this.renderPreviousPage()}
                    {this.renderThreeDots('before')}
                    {this.renderPageNumber()}
                    {this.renderThreeDots('after')}
                    {this.renderNextPage()}
                    {this.renderNextGroup()}
                    {this.renderLastPage()}
                </ul>
            )
        }
        return null;
    }
}
