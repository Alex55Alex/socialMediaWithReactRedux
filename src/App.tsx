import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";



const App: (props: any) => JSX.Element = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage} dispatch = {props.dispatch}/>}/>
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage} dispatch = {props.dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/sideBar' render={() => <SideBar/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
