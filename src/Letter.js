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
            disabled : false,
            hidden : false
        }
    }

    componentDidMount() {
    /*    this.setState({
            typePosition: 'absolute'
        });
        */
        console.log("ici : " +this.props.minuscule);
        console.log(this.letter);
        console.log(this.letter.getBoundingClientRect());
    }

    handleStart(event, ui) {
        console.log('handleStart');
        console.log('Event: ', event);
        console.log('Position: ', ui.x);
      //  this.props.handleStart();
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

        console.log(ui.node);
        console.log(document.documentElement.scrollTop);
        //let xScroll = ui.node.scrollLeft || document.documentElement.scrollLeft;
        //let yScroll = ui.node.scrollTop || document.documentElement.scrollTop;
        //let xScroll = document.documentElement.scrollLeft;
        //let yScroll = document.documentElement.scrollTop;
        let yScroll = window.pageYOffset;

//console.log(xScroll);
console.log(yScroll);

        let overlap = this.props.handleStop(event, ui, this.props.position, this.props.minuscule);
/*
        console.log(overlap.deltaX);
        console.log(overlap.deltaY);

        if (overlap.overlap && overlap.match) {
            this.setState({
                controlledPosition: {
                    x: ui.x + overlap.deltaX,
                    y: ui.y + overlap.deltaY - yScroll
                },
                typePosition: 'fixed',
                disabled : true
            });
        };*/
        if(overlap){
          this.setState({hidden:true});
        }
    }

    /*clickHandler(e) {
        this.props.tileClick(e.target, this.props.position, this.props.numero);
    }*/

    render() {
      if(this.state.hidden){
        return null;
      }else{
        let dragHandlers = {
            onStart: this.handleStart,
            onStop: this.handleStop
        };
        //<button ref = {"letter_" +this.props.minuscule}
        return (
          <div>
            <Draggable disabled={this.state.disabled} position={this.state.controlledPosition} zIndex={100}
            onDrag={this.handleDrag} {...dragHandlers} >
              <button ref={(button) => { this.letter=button; }}
              style={
                  {
                      position: this.state.typePosition,
                      //top: 78 * this.props.index,
                      //right: '100'
                  }
              }
              type="button"
              className="btn btn-info btn-circle btn-xl" >
              {
                  this.props.majuscule
              }
              </button>
            </Draggable>
          </div>
        );
      }
    }
}

export default Letter;
