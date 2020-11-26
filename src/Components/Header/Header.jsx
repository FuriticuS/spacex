import React, {Component} from 'react';
import {block} from 'bem-cn';
import {NavLink} from "react-router-dom";
import MenuToggle from "../MenuToggle/MenuToggle";

import logo from './../../Img/logospace.png';

import './header.scss';
import MenuBurgerList from "../MenuBurgerList/MenuBurgerList";

const cn = block('header');


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    toggleMenuCLose = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={cn()}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={cn("logo p-0 col-lg-4 col-md-4 col-sm-8 col-8")}>
                            <NavLink className={cn("logo-link")} to='/'>
                                <img src={logo} alt="logo"/>
                            </NavLink>
                            <div className="a a1"></div>
                            <div className="a a2"></div>
                            <div className="a a3"></div>
                            <div className="a a4"></div>
                        </div>

                        <ul className={cn("menu p-0 offset-lg-1 col-lg-7 col-md-7")}>
                            <li><NavLink to='/' exact>Главная</NavLink></li>
                            <li><NavLink to='/technology'>Технология</NavLink></li>
                            <li><NavLink to='/flightschedule'>График полетов</NavLink></li>
                            <li><NavLink to='/guarantee'>Гарантии</NavLink></li>
                            <li><NavLink to='/company'>О компании</NavLink></li>
                            <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        </ul>

                        <div className={cn("menu-burger p-0 col-md-8 col-sm-4 col-4")}>
                            <MenuToggle
                                isOpen={this.state.menu}
                                onToggle={this.toggleMenuHandler}/>
                        </div>

                        <MenuBurgerList
                            isOpen={this.state.menu}
                            onClose={this.toggleMenuCLose}
                        />
                    </div>
                </div>
            </div>
        );
    }

};

export default Header;
