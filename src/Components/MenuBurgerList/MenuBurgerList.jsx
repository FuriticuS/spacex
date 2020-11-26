import React, {Component} from 'react';
import {block} from 'bem-cn';
import {NavLink} from "react-router-dom";

import './menuburgerlist.scss';
import BackDrop from "../BackDrop/BackDrop";

const cn = block('drawer');

const links = [
    {id:0, to: '/', label:'Главная', exact: true},
    {id:1, to: '/technology', label:'Технология', exact: false},
    {id:2, to: '/flightschedule', label:'График полетов', exact: false},
    {id:2, to: '/guarantee', label:'Гарантии', exact: false},
    {id:2, to: '/company', label:'О компании', exact: false},
    {id:2, to: '/contacts', label:'Контакты', exact: false}
]

class MenuBurgerList extends Component {

    constructor(props) {
        super(props);
    }

    renderLinks(){
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls = [
            cn()
        ]

        !this.props.isOpen && cls.push('close');

        return(

            <div>
                {
                    this.props.isOpen && <BackDrop onClick={this.props.onClose}/>
                }

                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MenuBurgerList;
