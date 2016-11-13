import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Draggable from 'react-draggable';
import LetterStack from './LetterStack'

class App extends Component {

    constructor(props, state) {
        super(props, state);
        this.state = {
            // initial state of game board
            alphabet: [
                {
                    index: 1,
                    minuscule: 'a',
                    majuscule: 'A',
                }, {
                    index: 2,
                    minuscule: 'b',
                    majuscule: 'B',
                }, {
                    index: 3,
                    minuscule: 'c',
                    majuscule: 'C',
                }, {
                    index: 4,
                    minuscule: 'd',
                    majuscule: 'D',
                }, {
                    index: 5,
                    minuscule: 'e',
                    majuscule: 'E',
                }, {
                    index: 6,
                    minuscule: 'f',
                    majuscule: 'F',
                }, {
                    index: 7,
                    minuscule: 'g',
                    majuscule: 'G',
                }, {
                    index: 8,
                    minuscule: 'h',
                    majuscule: 'H',
                }, {
                    index: 9,
                    minuscule: 'i',
                    majuscule: 'I',
                }, {
                    index: 10,
                    minuscule: 'j',
                    majuscule: 'J',
                }, {
                    index: 11,
                    minuscule: 'k',
                    majuscule: 'K',
                }, {
                    index: 12,
                    minuscule: 'l',
                    majuscule: 'L',
                }, {
                    index: 13,
                    minuscule: 'm',
                    majuscule: 'M',
                }, {
                    index: 14,
                    minuscule: 'n',
                    majuscule: 'N',
                }, {
                    index: 15,
                    minuscule: 'o',
                    majuscule: 'O',
                }, {
                    index: 16,
                    minuscule: 'p',
                    majuscule: 'P',
                }, {
                    index: 17,
                    minuscule: 'q',
                    majuscule: 'Q',
                }, {
                    index: 18,
                    minuscule: 'r',
                    majuscule: 'R',
                }, {
                    index: 19,
                    minuscule: 's',
                    majuscule: 'S',
                }, {
                    index: 20,
                    minuscule: 't',
                    majuscule: 'T',
                }, {
                    index: 21,
                    minuscule: 'u',
                    majuscule: 'U',
                }, {
                    index: 22,
                    minuscule: 'v',
                    majuscule: 'V',
                }, {
                    index: 23,
                    minuscule: 'w',
                    majuscule: 'W',
                }, {
                    index: 24,
                    minuscule: 'x',
                    majuscule: 'X',
                }, {
                    index: 25,
                    minuscule: 'y',
                    majuscule: 'Y',
                }, {
                    index: 26,
                    minuscule: 'z',
                    majuscule: 'Z',
                }
            ],
            lettres: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z'
            ],
            voyelles: [
                'A',
                'E',
                'I',
                'O',
                'U',
                'Y'
            ]
          }
    }

    /*
  type DraggableEventHandler = (e: Event, data: DraggableData) => void | false;
type DraggableData = {
  node: HTMLElement,
  // lastX + deltaX === x
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number
};*/

    handleStopLetter(event, ui, position, minuscule) {
        console.log('handleStop parent');
        console.log('Event: ', event);
        console.log('Position: ', ui.x + ' : ' + ui.y);
        console.log(ui.node);
        console.log(minuscule);
        if (minuscule == 'b') {
            return true;
        } else {
            return false;
        }
    }

    render() {

        return (
            <div className="App">
                <div>
                    <div className="col-sm-8" id="left">
                            <div>
                                reset
                            </div>
                    </div>
                    <div className="col-sm-4" id="right">
                        {this.state.alphabet.map(function(letter) {
                            return (<LetterStack key={letter.index} index={letter.index} position={{x: 0,y: 0}} handleStop={this.handleStopLetter} minuscule={letter.minuscule} majuscule={letter.majuscule}/>)
                        }, this)}
                    </div>
                </div>
            </div>
        );
    }
}



export default App;
