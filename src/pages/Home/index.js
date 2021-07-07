import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Menu from '../../components/Menu';
import Content from '../../components/Content';

class Home extends Component {
    state = {  }

    render() { 
        return ( 
            <main className="home-page">
              <Menu></Menu>
              <div className="content container">
                <div className="left">
                  <p className="hi">Olá,</p>
                  <h2 className="title">Eu sou <span className="colored">Ismael Sousa</span><br/> Desenvolvedor Front End</h2>
                </div>
              </div>
            </main>
        );
    }
}
 
export default Home;