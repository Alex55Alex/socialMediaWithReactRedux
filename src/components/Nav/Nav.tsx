import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom'
import SideBar from "../SideBar/SideBar";


const Nav: (props: any) => JSX.Element = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/sideBar" activeClassName={s.active}><SideBar state={props.state.sideBarInfo}/></NavLink>
            </div>
        </nav>
    )
}

export default Nav;