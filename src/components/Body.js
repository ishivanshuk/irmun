import React from 'react';
import '../App.css';
import { Button } from './Button';

import './Body.css';

import { Link } from 'react-router-dom';


function Body() {
  return (
    <div className='body-container'>
      
      <h3>IRMUN 2.0</h3>
      <p id='motto'>KEEP LEARNING.KEEP MUNNING</p>
      <p>COMING SOON</p>
      <div className='body-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick='window.open()'
        >
          <Link to="form aaega yaha" target="_blank" className="link"> 
          Register Now!
          </Link>  
          
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          
        >
         KNOW MORE <i className='far fa-play-circle' />
        </Button>
      </div>
      
    </div>
    
  );
}

export default Body;
