import React, {
    Component
} from 'react';
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
        this.handleStop = this.handleStop.bind(this);

        var letters = [];
        //for (var i = 0; i < 3; i++) {
          letters.push(<Letter index={this.props.index} position={{x: 0,y: 0}}
            handleStop={this.handleStop} minuscule={this.props.minuscule}
            majuscule={this.props.majuscule}/>);
        //  }

        this.state = {
          /*letters : [
            <div style = {
                {
                  width: '100px',
                  height: '100px',
                  position: 'relative',
                  //top: 78 * this.props.index,
                  //right: '100'
                }
            }>
              <button
                style = {
                    {
                        position: 'absolute',
                        top : 0,
                //        left : 0
                        //top: 78 * this.props.index,
                        //right: '100'
                        opacity: 0.2
                    }
                }
              type = "button"
              className = "btn btn-info btn-circle btn-xl" >
              {
                  this.props.majuscule
              }
              </button>
            <Letter offsetParent={this.props.offsetParent} index={this.props.index} position={{x: 0,y: 0}}
            handleStop={this.props.handleStop} handleStop={this.handleStop} minuscule={this.props.minuscule}
            majuscule={this.props.majuscule}/>
          </div>
        ]*/
        letters: letters
        }
    }

    handleStop(event, ui, position, minuscule){
      console.log('handleStop : ajout dune lettre dans la pile');
        let letters = this.state.letters;
        letters.push(<Letter index={this.props.index} position={{x: 0,y: 0}} handleStop={this.handleStop} minuscule={this.props.minuscule} majuscule={this.props.majuscule}/>);

        this.setState({ letters: letters });
        return this.props.handleStop(event, ui, position, minuscule);
    }


    render() {
        return (
          <div style={
              {
                width: '100px',
                height: '100px',
                position: 'relative',
                //top: 78 * this.props.index,
                //right: '100'
              }
          }>
          <button
            style={
                {
                    position: 'absolute',
                    top : 0,
            //        left : 0
                    //top: 78 * this.props.index,
                    //right: '100'
                    opacity: 0.2
                }
            }
          type="button"
          className="btn btn-info btn-circle btn-xl" >
          {
              this.props.majuscule
          }
          </button>
            {this.state.letters.map(function(element) {
                return (element)
            }, this)}
          </div>
        );
    }
}

export default LetterStack;
