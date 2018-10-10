import React from 'react'

const DropdownNotification = () => {
    return (
        <li className="dropdown dropdown-notification nav-item">
            <a className="nav-link nav-link-label" href="/" data-toggle="dropdown"><i className="ficon ft-bell" />
                <span className="badge badge-pill badge-default badge-danger badge-default badge-up">5</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0">
                        <span className="grey darken-2">Notifications</span>
                        <span className="notification-tag badge badge-default badge-danger float-right m-0">5 New</span>
                    </h6>
                </li>
                <li className="scrollable-container media-list">
                    <a href="//">
                        <div className="media">
                            <div className="media-left align-self-center"><i className="ft-plus-square icon-bg-circle bg-cyan" /></div>
                            <div className="media-body">
                                <h6 className="media-heading">You have new order!</h6>
                                <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">30 minutes ago</time>
                                </small>
                            </div>
                        </div>
                    </a>
                    <a href="//">
                        <div className="media">
                            <div className="media-left align-self-center"><i className="ft-download-cloud icon-bg-circle bg-red bg-darken-1" /></div>
                            <div className="media-body">
                                <h6 className="media-heading red darken-1">99% Server load</h6>
                                <p className="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Five hour ago</time>
                                </small>
                            </div>
                        </div>
                    </a>
                    <a href="//">
                        <div className="media">
                            <div className="media-left align-self-center"><i className="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3" /></div>
                            <div className="media-body">
                                <h6 className="media-heading yellow darken-3">Warning notifixation</h6>
                                <p className="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Today</time>
                                </small>
                            </div>
                        </div>
                    </a>
                    <a href="//">
                        <div className="media">
                            <div className="media-left align-self-center"><i className="ft-check-circle icon-bg-circle bg-cyan" /></div>
                            <div className="media-body">
                                <h6 className="media-heading">Complete the task</h6>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Last week</time>
                                </small>
                            </div>
                        </div>
                    </a>
                    <a href="//">
                        <div className="media">
                            <div className="media-left align-self-center"><i className="ft-file icon-bg-circle bg-teal" /></div>
                            <div className="media-body">
                                <h6 className="media-heading">Generate monthly report</h6>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Last month</time>
                                </small>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="//">Read all notifications</a></li>
            </ul>
        </li>
    )
}

export default DropdownNotification
