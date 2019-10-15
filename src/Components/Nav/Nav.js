import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import style from './index.module.scss';

class Nav extends Component {
    render() {
        return (
            <nav>
                <NavLink activeClassName={style.active} to='/firstpage'> First page </NavLink>
                <NavLink activeClassName={style.active} to='/secondpage'> Second page </NavLink>
                
                <NavLink activeClassName={style.active} to='/examplepage'> example page </NavLink>
            </nav>
        );
    }
}

export default Nav;