import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from '../../components/Menu';
import Content from '../../components/Content';

class Home extends Component {
    state = {  }

    render() { 
        return ( 
            <main className="home-page">
                <Menu></Menu>

                <Content></Content>
            </main>
        );
    }
}
 
export default Home;