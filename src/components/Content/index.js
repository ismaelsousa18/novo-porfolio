import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import MobileImg from '../../images/decoration/mobile.png';
import NotebookImg from '../../images/decoration/notebook.png';
import Background from '../../images/decoration/notebook-bg.png';

class Content extends Component {
    state = {  }

    render() { 
        return (
            <section className="container content">
                <div className="text">
                    <h2 className="title">Olá,</h2>

                    <p className="desc">Eu sou <strong>Ismael Sousa</strong> e trabalho com <strong>Desenvolvimento de Sites e Apps</strong>.</p>

                    <p className="desc">Lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>

                    <p className="desc">Lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet lorem ipsum dolor</p>

                    <a href="#" className="cta-button-container">
                        <button className="cta-button">Saiba mais</button>
                    </a>
                </div>

                <div className="notebook-decoration">
                    <img src={MobileImg} alt="" className="mobile"/>
                    <img src={NotebookImg} alt="" className="notebook"/>
                </div>
            </section>
        );
    }
}
 
export default Content;