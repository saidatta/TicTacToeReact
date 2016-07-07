import React, {Component} from 'react';
import Tile from './Tile';

var tiles = ["","",""];
var keys = 1;

const TileRow = (props) => {
 const tileItems =  tiles.map((tile) => {
    keys += 1;
    return ( <Tile key={keys} /> );
  });
    return (
          <div>
            {tileItems}
          </div>
        );
};

export default TileRow;
