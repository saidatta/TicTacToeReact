import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Board from './components/Board'


class App extends Component {
  render() {
    return (
    <div>
      <Board />
     </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
