import React from 'react'; 
import { connect } from 'react-redux'; 
import fetchCheeses from '../actions/index'; 

export class CheeseList extends React.Component { 
  componentDidMount() { 
    this.props.dispatch(fetchCheeses()); 
  }
  render() {
    const cheeses = this.props.cheeses.map((cheese, index) =>  
      <li key={index}>
        {cheese}
      </li>
    ); 

    return ( 
    <ul>
      {cheeses}
    </ul>
    );
  } 
}
const mapStateToProps = (state) => { 
  return { 
    cheeses : state.cheeseReducer.cheeses
  }
}

export default connect(mapStateToProps)(CheeseList); 