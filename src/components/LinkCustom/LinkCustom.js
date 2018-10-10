import React from 'react';
import { Route, Link } from 'react-router-dom';

const LinkCustom = ({ label, to, activeOnlyWhenExact, onPageChange, activeFirstPage }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {

                let active = match ? 'active' : '';
                if (activeFirstPage) active = 'active';
                return (
                    <li className={`page-item ${active}`}>
                        <Link className="page-link" to={to} onClick={(event) => onPageChange()}>{label}</Link>
                    </li>
                )
            }} />
    )
}
export default LinkCustom;