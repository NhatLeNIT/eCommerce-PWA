import React from 'react'

const DropdownMessage = () => {
    return (
        <li className="dropdown dropdown-notification nav-item">
            <a className="nav-link nav-link-label" href="/" data-toggle="dropdown"><i className="ficon ft-mail" />
                <span className="badge badge-pill badge-default badge-warning badge-default badge-up">3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0">
                        <span className="grey darken-2">Messages</span>
                        <span className="notification-tag badge badge-default badge-warning float-right m-0">4 New</span>
                    </h6>
                </li>
                <li className="scrollable-container media-list">
                    <a href="//">
                        <div className="media">
                            <div className="media-left">
                                <span className="avatar avatar-sm avatar-online rounded-circle">
                                    <img src="images/portrait/small/avatar-s-1.png" alt="avatar" /><i /></span>
                            </div>
                            <div className="media-body">
                                <h6 className="media-heading">Margaret Govan</h6>
                                <p className="notification-text font-small-3 text-muted">I like your portfolio, let's start.</p>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Today</time>
                                </small>
                            </div>
                        </div>
                    </a>
                    <a href="//">
                        <div className="media">
                            <div className="media-left">
                                <span className="avatar avatar-sm avatar-busy rounded-circle">
                                    <img src="images/portrait/small/avatar-s-2.png" alt="avatar" /><i /></span>
                            </div>
                            <div className="media-body">
                                <h6 className="media-heading">Bret Lezama</h6>
                                <p className="notification-text font-small-3 text-muted">I have seen your work, there is</p>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Tuesday</time>
                                </small>
                            </div>
                        </div>
                    </a>
                    <a href="//">
                        <div className="media">
                            <div className="media-left">
                                <span className="avatar avatar-sm avatar-online rounded-circle">
                                    <img src="images/portrait/small/avatar-s-3.png" alt="avatar" /><i /></span>
                            </div>
                            <div className="media-body">
                                <h6 className="media-heading">Carie Berra</h6>
                                <p className="notification-text font-small-3 text-muted">Can we have call in this week ?</p>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">Friday</time>
                                </small>
                            </div>
                        </div>
                    </a>
                    <a href="//">
                        <div className="media">
                            <div className="media-left">
                                <span className="avatar avatar-sm avatar-away rounded-circle">
                                    <img src="images/portrait/small/avatar-s-6.png" alt="avatar" /><i /></span>
                            </div>
                            <div className="media-body">
                                <h6 className="media-heading">Eric Alsobrook</h6>
                                <p className="notification-text font-small-3 text-muted">We have project party this saturday.</p>
                                <small>
                                    <time className="media-meta text-muted" dateTime="2015-06-11T18:29:20+08:00">last month</time>
                                </small>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-center" href="//">Read all messages</a></li>
            </ul>
        </li>
    )
}

export default DropdownMessage
