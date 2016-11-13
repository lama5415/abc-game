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
        this.handleStart = this.handleStart.bind(this);
        this.state = {
          letters : [<Letter index={this.props.index} position={{x: 0,y: 0}}
            handleStop={this.props.handleStop} handleStart={this.handleStart} minuscule={this.props.minuscule}
            majuscule={this.props.majuscule}/>]
        }
    }

    handleStart(){
      console.log('handleStart : ajout dune lettre dans la pile');
        var letters = this.state.letters;
        letters.push(<Letter index={this.props.index} position={{x: 0,y: 0}}
          handleStop={this.props.handleStop} handleStart={this.handleStart} minuscule={this.props.minuscule}
          majuscule={this.props.majuscule}/>);

        this.setState({ letters: letters });
    }


    render() {
        return (
          <div>
            {this.state.letters.map(function(element) {
                return (element)
            }, this)}
          </div>
        );
    }
}

export default LetterStack;
