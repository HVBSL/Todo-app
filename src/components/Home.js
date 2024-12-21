import React, { Component } from 'react';
import '../../src/App.css';

export class Home extends Component {
    render() {
        return (
            <div className='text-3xl font-bold underline'>
                <h1 className="text-primary text-4xl font-bold">Hello world! I am using React</h1>;
            </div>
        )
    }
}

export default Home