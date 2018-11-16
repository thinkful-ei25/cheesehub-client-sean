import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list'
import * as serviceWorker from './serviceWorker';

const cheeses =  [
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue",
  "Cheshire Blue",
  "Devon Blue",
  "Dorset Blue Vinney",
  "Dovedale",
  "Exmoor Blue",
  "Harbourne Blue",
  "Lanark Blue",
  "Lymeswold",
  "Oxford Blue",
  "Shropshire Blue",
  "Stichelton",
  "Stilton",
  "Blue Wensleydale",
  "Yorkshire Blue"
]

ReactDOM.render(<CheeseList cheeses={cheeses} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
