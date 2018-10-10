import React from 'react';
import Avatar from 'react-avatar'
const DropdownUser = (props) => {
    const { user } = props;
    const avatar = user.avatar ? <img src="images/portrait/small/avatar-s-1.png" alt="avatar" /> : <Avatar name={user.name} textSizeRatio={1} round={true} size="30" />
    // console.log(props);
    return (
        <li className="dropdown dropdown-user nav-item">
            <a className="dropdown-toggle nav-link dropdown-user-link" href="/" data-toggle="dropdown">
                <span className="avatar avatar-online">
                    {avatar} <i />
                </span>
                <span className="user-name">{user.name}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="user-profile.html"><i className="ft-user" /> Edit Profile</a>
                <a className="dropdown-item" href="email-application.html"><i className="ft-mail" /> My Inbox</a>
                <a className="dropdown-item" href="user-cards.html"><i className="ft-check-square" /> Task</a>
                <a className="dropdown-item" href="chat-application.html"><i className="ft-message-square" /> Chats</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="login-with-bg-image.html"><i className="ft-power" /> Logout</a>
            </div>
        </li>
    )
}

export default DropdownUser;
