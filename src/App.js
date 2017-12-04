import React, {Component} from 'react';
import logo from './logo.svg';
import fee from './img/fee.svg';
import applaudissement0 from './img/applaudissement0.gif';
import applaudissement1 from './img/applaudissement1.gif';
import applaudissement2 from './img/applaudissement2.gif';

import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Draggable from 'react-draggable';
import LetterStack from './LetterStack';
import FixedLetter from './FixedLetter';


class App extends Component {

    constructor(props, state) {
        super(props, state);
this.handleStopLetter=this.handleStopLetter.bind(this);
this.handleFixedLetterPosition = this.handleFixedLetterPosition.bind(this);

        this.state = {
            // initial state of game board
            win : false,
            currentLetterIndex : 0,
            fixedLettersPosition : [],
            word : 'PAPA',
            alphabet: [
                {
                    index: 1,
                    minuscule: 'a',
                    majuscule: 'A'
                }, {
                    index: 2,
                    minuscule: 'b',
                    majuscule: 'B'
                }, {
                    index: 3,
                    minuscule: 'c',
                    majuscule: 'C'
                }, {
                    index: 4,
                    minuscule: 'd',
                    majuscule: 'D'
                }, {
                    index: 5,
                    minuscule: 'e',
                    majuscule: 'E'
                }, {
                    index: 6,
                    minuscule: 'f',
                    majuscule: 'F'
                }, {
                    index: 7,
                    minuscule: 'g',
                    majuscule: 'G'
                }, {
                    index: 8,
                    minuscule: 'h',
                    majuscule: 'H'
                }, {
                    index: 9,
                    minuscule: 'i',
                    majuscule: 'I'
                }, {
                    index: 10,
                    minuscule: 'j',
                    majuscule: 'J'
                }, {
                    index: 11,
                    minuscule: 'k',
                    majuscule: 'K'
                }, {
                    index: 12,
                    minuscule: 'l',
                    majuscule: 'L'
                }, {
                    index: 13,
                    minuscule: 'm',
                    majuscule: 'M'
                }, {
                    index: 14,
                    minuscule: 'n',
                    majuscule: 'N'
                }, {
                    index: 15,
                    minuscule: 'o',
                    majuscule: 'O'
                }, {
                    index: 16,
                    minuscule: 'p',
                    majuscule: 'P'
                }, {
                    index: 17,
                    minuscule: 'q',
                    majuscule: 'Q'
                }, {
                    index: 18,
                    minuscule: 'r',
                    majuscule: 'R'
                }, {
                    index: 19,
                    minuscule: 's',
                    majuscule: 'S'
                }, {
                    index: 20,
                    minuscule: 't',
                    majuscule: 'T'
                }, {
                    index: 21,
                    minuscule: 'u',
                    majuscule: 'U'
                }, {
                    index: 22,
                    minuscule: 'v',
                    majuscule: 'V'
                }, {
                    index: 23,
                    minuscule: 'w',
                    majuscule: 'W'
                }, {
                    index: 24,
                    minuscule: 'x',
                    majuscule: 'X'
                }, {
                    index: 25,
                    minuscule: 'y',
                    majuscule: 'Y'
                }, {
                    index: 26,
                    minuscule: 'z',
                    majuscule: 'Z'
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

    checkOverlap(rect1,rect2){
      return !(rect1.right < rect2.left ||
                      rect1.left > rect2.right ||
                      rect1.bottom < rect2.top ||
                      rect1.top > rect2.bottom);
    }

    handleStopLetter(event, ui, position, minuscule) {
        console.log('handleStop parent');
        console.log('Event: ', event);
        console.log('Position: ', ui.x + ' : ' + ui.y);
        console.log(ui.node);
        console.log(minuscule);


        const currentLetter = this.state.word[this.state.currentLetterIndex];
        const currentLetterPosition = this.state.fixedLettersPosition[this.state.currentLetterIndex];

        const droppedLetterPosition = ui.node.getBoundingClientRect();

        const overlap = this.checkOverlap(currentLetterPosition, droppedLetterPosition);
        const match = (minuscule.toUpperCase()===currentLetter)

        // rect est un objet DOMRect avec 6 propriétés
        // left, top, right, bottom, width, height
        console.log('current letter : ' + currentLetter);
        console.log('current letter position : ' + currentLetterPosition.left);
        console.log('letter left : ' + ui.node.getBoundingClientRect().left);
        console.log('overlap? ' + overlap);
        console.log('match? ' + match);

        if(overlap && match){
          let currentLetterIndex = this.state.currentLetterIndex;
          currentLetterIndex++;
          if (currentLetterIndex===this.state.word.length){
              this.setState({currentLetterIndex : currentLetterIndex, win : true});
          }else{
              this.setState({currentLetterIndex : currentLetterIndex});
            }
        }

        //if (minuscule === 'b') {

//console.log(fixedLetters.length);


        /*return { overlap : overlap ,
          match : match,
          deltaX : currentLetterPosition.left - droppedLetterPosition.left,
          deltaY : currentLetterPosition.top - droppedLetterPosition.top
        }*/

        return (overlap && match)
        //} else {
        //return false;
        //}
    }

    handleFixedLetterPosition(index, clientRect){
      console.log(index + ' : ' + clientRect);
      this.state.fixedLettersPosition[index]=clientRect;
    }

    // On renvoie un entier aléatoire entre une valeur min (incluse)
    // et une valeur max (incluse).
    // Attention : si on utilisait Math.round(), on aurait une distribution
    // non uniforme !
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min;
    }

    render() {

      const fixedLetters=this.state.word.split('').map(function(letter,index) {
        if (this.state.currentLetterIndex<=index){
          return (<FixedLetter key={index} index={index} handlePositionChange={this.handleFixedLetterPosition} letter=''/>)
        }
        else {
          return (<FixedLetter key={index} index={index} handlePositionChange={this.handleFixedLetterPosition} letter={letter}/>)
        }
      }, this
      );

      //const applaudissement = 'applaudissement' + this.getRandomIntInclusive(1,2);
      const applaudissement = applaudissement0;

// TODO Animer la fee :https://advancedweb.hu/2016/01/12/custom_css_animations_in_react/
        return (
            <div className="App">
                <div className="container">
                    <div className="col-sm-9" id="left">
                      <div className="col-sm-3">
                        <img src={this.state.win ? applaudissement : fee} alt={this.state.win ? applaudissement : fee}/>
                      </div>
                        <div className="col-sm-9" id="board">
                          <div id="word-template" className="animated bounceInDown">
                            {/*this.state.word*/}
                            {this.state.word.split('').map(function(letter, index) {
                                return (<button key={index} type="button" className="btn btn-info btn-circle btn-xl" >{letter}</button>)
                            }, this
                            )}
                          </div>
                          <div id="fixed-letters">
                          {fixedLetters}
                          </div>
                        </div>
                    </div>
                    <div className="animated bounceInRight col-sm-3" id="right" ref="palette">
                        {this.state.alphabet.map(function(letter) {
                            return (<LetterStack key={letter.index} index={letter.index} position={{
                                x: 0,
                                y: 0
                            }} handleStop={this.handleStopLetter} minuscule={letter.minuscule} majuscule={letter.majuscule}/>)
                        }, this)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
