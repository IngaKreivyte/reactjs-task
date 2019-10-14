import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import style from './index.module.scss';

class Nav extends Component {
    render() {
        return (
            <nav>
                <NavLink className={style.link}  to='/'> Home </NavLink>
                <NavLink className={style.link}  to='/firstpage'> firstpage </NavLink>
                <NavLink className={style.link}  to='/firstpage'> Secondpage </NavLink>
            </nav>
        );
    }
}

export default Nav;