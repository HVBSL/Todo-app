import React, { Component } from 'react';
import Home from './components/Home.js';
import '../src/App.css';

export class App extends Component { // Extend React.Component
    render() {
        return (
            <div className='flex'>
                <Home />
            </div>
        );
    }
}

export default App;