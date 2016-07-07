import React, {Component} from 'react';

var playerValues = {
  0 : ' - ',
  1 : 'x',
  2 : '0'
};
var cp = 0;

class Tile extends Component {

  constructor(props) {
    super(props);
    this.state = {currentPlayer : 0};
    this.tileListener = this.tileListener.bind(this);
  }

render() {
  console.log(cp);
  return (
   <span className="root" onClick={this.tileListener}> {playerValues[cp]} </span>
  );
}
tileListener() {
  if(cp === 1) {
    cp = 2;
    this.setState({currentPlayer : 2});
  } else {
    cp = 1;
    this.setState({currentPlayer : 1});
  }
}
}

export default Tile;
