import React, {Component} from 'react';
import TileRow from './TileRow';

var playerCounter = 1;

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {'tileValue' : 1};
  }

  render() {
    return (
          <div>
            <TileRow tileValue={this.state.tileValue} />
            <TileRow tileValue={this.state.tileValue} />
            <TileRow tileValue={this.state.tileValue} />
          </div>
        );
  }
}

export default Board;
