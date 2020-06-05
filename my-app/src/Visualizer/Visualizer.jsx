import React from 'react';
import * as Algorithms from '../Algorithms/Algorithms';
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


    mergeSort() {
        const jsSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const mergeSortedArray = Algorithms.mergeSort(this.state.array);
        console.log(mergeSortedArray);
        console.log(equalArrays(jsSortedArray, mergeSortedArray));
    }
    // tests if the sorting algorithm works
    testSortAlgorithm() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomInteger(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomInteger(-1000, 1000));
            }
            const jsSortedArray = this.state.array.slice().sort((a,b) => a - b);
            const mergeSortedArray = Algorithms.mergeSort(this.state.array);
            console.log(equalArrays(jsSortedArray, mergeSortedArray));
        }
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
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.testSortAlgorithm()}>Test Sorting Algorithm</button>

            </div>
        );
    }
}
//random number generator from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//to check if sorting algorithms actually sort correctly by comparing it to an array sorted by sort function
function equalArrays(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}