import {API_BASE_URL} from '../config'; 

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'; 
export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'; 
export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR'

const fetchChesesRequest = (() => {   
  return {type : FETCH_CHEESES_REQUEST}; 
}); 

const fetchCheesesSuccess = (cheeses => { 
  return {type : FETCH_CHEESES_SUCCESS, cheeses}
}); 

const fetchCheesesError = (error => {  
  return {type : FETCH_CHEESES_ERROR, error}
}); 

export default function fetchCheeses () { 
  
  return (dispatch) => { 
    dispatch(fetchChesesRequest); 
    
    fetch(`${API_BASE_URL}/api/cheeses`)
      .then(res => res.json())
      .then(data => dispatch(fetchCheesesSuccess(data)))
      .catch(error => dispatch(fetchCheesesError(error))); 
  }
}
