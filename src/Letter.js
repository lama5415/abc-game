import React, {
    Component
} from 'react';
import Draggable from 'react-draggable';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.handleStop = this.handleStop.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.state = {
            controlledPosition: this.props.position,
            typePosition: 'absolute',
            disabled : false
        }
    }

    /*componentDidMount() {
        this.setState({
            typePosition: 'absolute'
        });
    }*/

    handleStart(event, ui) {
        console.log('handleStart');
        console.log('Event: ', event);
        console.log('Position: ', ui.x);
        this.props.handleStart();
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
                },
                typePosition: 'fixed',
                disabled : false
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
            <Draggable disabled={this.state.disabled} position = {this.state.controlledPosition} zIndex = {100}
            onDrag = {this.handleDrag} {...dragHandlers} >
              <button ref = {this.props.minuscule}
              style = {
                  {
                      position: this.state.typePosition,
                      top: 78 * this.props.index,
                      right: '100'
                  }
              }
              type = "button"
              className = "btn btn-info btn-circle btn-xl" >
              {
                  this.props.majuscule
              }
              </button>
            </Draggable>
          </div>
        );
    }
}

export default Letter;
