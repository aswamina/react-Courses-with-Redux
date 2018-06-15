import React from 'react';
import {Link} from 'react-router';

const NavLink = () => {
    return (
        <Link {...this.props} activeStyle={{ color: 'red' }} />
    );
};

export default NavLink;
