import React from 'react';
import './Visualizer.css';

export class Visualizer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          array: [],
        };
    }
    //When the page reloads, it runs reset array method
    componentDidMount() {
        this.resetArray();
    }
    //resets all arrays
    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
          array.push(randomInteger(5, 700));
        }
        //reset state to have new array
        this.setState({array});
    }

    render() {
        const {array} = this.state;
    
        return (
            <div className="array-container">
                {array.map((value, index) =>
                <div className="array-bar" key={index} style={{height: `${value}px`}}>
                </div>
                )}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
            </div>
        );
    }
}
//random number generator from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}