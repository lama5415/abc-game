import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Draggable from 'react-draggable';

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

    handleStop(event, ui, position, minuscule) {
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
                            return (<Letter key={letter.index} index={letter.index} position={letter.position} handleStop={this.handleStop} minuscule={letter.minuscule} majuscule={letter.majuscule}/>)
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

class Letter extends Component {
    constructor(props) {
        super(props);
        this.handleStop = this.handleStop.bind(this);
        this.state = {
            controlledPosition: this.props.position
        }
    }

    handleStart(event, ui) {
        console.log('handleStart');
        console.log('Event: ', event);
        console.log('Position: ', ui.x);
    }

    handleDrag(event, ui) {
        console.log('handleDrag');
        console.log('Event: ', event);
        console.log('Position: ', ui.x);
    }

    handleStop(event, ui) {
        console.log('handleStop');
        console.log('Event: ', event);
        console.log('Position: ', ui.x + ' : ' + ui.y);
        console.log(ui.node);
        //  const {x, y} = position;
        //this.setState({controlledPosition: {20, 100}});
        if (this.props.handleStop(event, ui, this.props.position, this.props.minuscule)) {
            this.setState({
                controlledPosition: {
                    x: ui.x,
                    y: ui.y
                }
            });
        };
    }

    /*clickHandler(e) {
        this.props.tileClick(e.target, this.props.position, this.props.numero);
    }*/

    render() {
        let dragHandlers = {
            onStart: this.handleStart,
            onStop: this.handleStop
        };
        return (
            <div>
                <Draggable position={this.state.controlledPosition} zIndex={100} onDrag={this.handleDrag} {...dragHandlers}>
                    <button style={{
                        position: 'absolute',
                        top: 78 * this.props.index,
                        right: '150px'
                    }} type="button" className="btn btn-info btn-circle btn-xl">
                        {this.props.majuscule}
                    </button>
                </Draggable>
            </div>
        );
    }
}

export default App;
