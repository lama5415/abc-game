import React, {Component} from 'react';

class FixedLetter extends Component {


    componentDidMount() {
        console.log("ici : " + this.props.minuscule);
        console.log(this.letter);
        console.log(this.letter.getBoundingClientRect());
        this.props.handlePositionChange( this.props.index, this.letter.getBoundingClientRect());
    }

    render() {
        return (
            <button type="button" ref={(button) => { this.letter = button; }}  className="btn btn-info btn-circle btn-xl" >{this.props.letter}</button>
            );
          }
      }

export default FixedLetter;
