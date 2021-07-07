import React, { Component } from 'react';

import './index.css';

class Menu extends Component {
    state = {  }
    render() { 
        return (
            <nav className="menu container">
                <ul className="list">
                    <li className="item"><a href="#">Sobre mim</a></li>
                    <li className="item"><a href="#">Projetos</a></li>
                    <li className="item"><a href="#">Formação</a></li>
                    <li className="item"><a href="#">Contato</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default Menu;