import React from "react";
import s from './SideBar.module.css';
import SideBarFriend from "./SideBarFriend/SideBarFriend";


const SideBar: (props: any) => JSX.Element = (props) => {
    return (
        <div className={s.friendsSection}>
            <h3>Friends</h3>
            <div className={s.friends}>
                {

                }
            </div>
        </div>
    )
}

export default SideBar;