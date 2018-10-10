import React from 'react'

const NavbarHeader = () => {
    return (
        <ul className="nav navbar-nav flex-row position-relative">
            <li className="nav-item mobile-menu d-md-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="/"><i className="ft-menu font-large-1" /></a></li>
            <li className="nav-item mr-auto">
                <a className="navbar-brand" href="index.html">
                    <img className="brand-logo" alt="stack admin logo" src="images/logo/stack-logo-light.png" />
                    <h2 className="brand-text">Stack</h2>
                </a>
            </li>
            <li className="nav-item d-none d-md-block nav-toggle"><a href="/" className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="toggle-icon ft-toggle-right font-medium-3 white" data-ticon="ft-toggle-right" /></a></li>
            <li className="nav-item d-md-none">
                <a href="/" className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="fa fa-ellipsis-v" /></a>
            </li>
        </ul>
    )
}

export default NavbarHeader
