import React, {
    Component
} from 'react';
import Draggable from 'react-draggable';
import Letter from './Letter';

class LetterStack extends Component {
    constructor(props) {
        super(props);
        /*this.handleStop = this.handleStop.bind(this);
        this.state = {
            controlledPosition: this.props.position,
            typePosition: 'absolute',
            disabled : false
        }*/
        this.state = {
          stack : [<Letter key={this.props.index} index={this.props.index} position={{x: 0,y: 0}}
            handleStop={this.props.handleStop} handleStart="this.handleStart" minuscule={this.props.minuscule}
            majuscule={this.props.majuscule}/>]
        }
    }

  /*  handleStart(){
      this.state.stack.push(stack : [<Letter index={this.props.index} position={{x: 0,y: 0}}
        handleStop={this.props.handleStop} handleStart="this.handleStart" minuscule={this.props.minuscule}
        majuscule={this.props.majuscule}/>]);
    }*/

    render() {
        return (
          <div>
            {this.state.stack.map(function(element) {
                return (element)
            }, this)}
          </div>
        );
    }
}

export default LetterStack;
