import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Draggable from 'react-draggable';
import Letter from './Letter'

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
                    position: {
                        x: 0,
                        y: 0
                    }
                }, {
                    index: 2,
                    minuscule: 'b',
                    majuscule: 'B',
                    position: {
                        x: 0,
                        y: 0
                    }
                }, {
                    index: 3,
                    minuscule: 'c',
                    majuscule: 'C',
                    position: {
                        x: 0,
                        y: 0
                    }
                }, {
                    index: 4,
                    minuscule: 'd',
                    majuscule: 'D',
                    position: {
                        x: 0,
                        y: 0
                    }
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
            ],
            deltaPosition: {
                x: 0,
                y: 0
            },
            controlledPosition: {
                x: -400,
                y: 200
            }
        }

        //this.tileClick = this.tileClick.bind(this);
        //this.shuffle = this.shuffle.bind(this);
        //this.restartGame = this.restartGame.bind(this);
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
        //  const {x, y} = position;
        //  this.setState({controlledPosition: {x, y}});
        //}
        //this.props.handleStop(event, ui, this.props.position, this.props.minuscule);
    }

    render() {

        return (
            <div className="App">
                {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          </div>
          */}
                <div>

                    <div className="col-sm-8" id="left">
                        <Draggable>
                            <div>
                                Left contents
                            </div>
                        </Draggable>
                    </div>

                    <div className="col-sm-4" id="right">
                        {/*this.state.lettres.map(function(letter) {
                return ( <div className="button">{letter}</div> )
                }, this)

                <button type="button" class="btn btn-warning btn-circle btn-xl"><i class="glyphicon glyphicon-remove"></i></button>

                */}

                        {/*this.state.lettres.map(function(letter) {
                  return ( <div><button
                  type="button"
                  className={this.state.voyelles.includes(letter) ? 'btn btn-warning btn-circle btn-xl' : 'btn btn-info btn-circle btn-xl'} >
                  {letter}
                  </button>
                  </div> )
                  }, this)*/}
                        <Draggable bounds={{
                            top: -100,
                            left: -500,
                            right: 100,
                            bottom: 100
                        }} zIndex={100}>
                            <div>
                                I can now be moved around!
                            </div>
                        </Draggable>

                        {this.state.alphabet.map(function(letter) {
                            return (<Letter key={letter.index} index={letter.index} position={letter.position} handleStop={this.handleStopLetter} minuscule={letter.minuscule} majuscule={letter.majuscule}/>)
                        }, this)}

                        {/*  <Draggable key={letter.index} position={letter.position} zIndex="{100}"
                      onDrag={this.handleDrag}
                      {...dragHandlers}>
                      <button
                        type="button"
                        className="btn btn-info btn-circle btn-xl" >
                        {letter.majuscule}
                      </button>
                    </Draggable>
                  */}

                    </div>

                </div>

                {/*    <Grid>
                <Row className="show-grid">
                <Col xs={8} md={8} sm={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                <Col xs={4} md={4} sm={4}>
                {this.state.lettres.map(function(letter) {
                return ( <Button bsStyle={this.state.voyelles.includes(letter) ? 'success' : 'primary' } bsSize="large" block>{letter}</Button> )
              }, this)}
            </Col>
          </Row>
        </Grid>
        */}
                {/*
          <div className="row">
          <div >
          Normal scrollable content
        </div>
        <div className=" sidebar">
        {this.state.lettres.map(function(letter) {
        return ( <Button bsStyle={this.state.voyelles.includes(letter) ? 'success' : 'primary' } bsSize="large" block>{letter}</Button> )
      }, this)}

      Fixed content
    </div>
  </div>*/}
            </div>
        );
    }
}



export default App;
