import React from 'react';
import './cards.css';
import Licard from './Licard.js';

function Cards() {
  return (
    <div className='cards'>
     
      <div className='cards-container'>
      <h3> Check out the following committees </h3>
     
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <Licard
              src='images/unsc.jpg'
              text='One of the major 6 organs of un charged with ensuring international peace and security across the globe '
              label='UN Security Council'
              path='/unsc'
            />
            
            <Licard
              src='images/unhrc.jpg'
              text='As the name suggests United Nations Human Rights Council is a United Nations body whose mission is to promote and protect human rights around the world'
              label='UN Human Resource Committee'
              path='/unhrc'
            />
           
          </ul>
          <ul className='cards-items'>

          <Licard
              src='images/loksabha.jpg'
              text='Short desc to each committee here'
              label='Lok Sabha'
              path='/ls'
            />
            
            <Licard
              src='images/eco.jfif'
              text='The United Nations Economic and Social Council is responsible for coordinating the economic and social fields of the organization'
              label='Ecosoc'
              path='/eco'
            />
            <Licard
              src='images/unw.jpg'
              text='The World Health Organization is a specialized agency of the United Nations responsible for international public health'
              label='WHO'
              path='/who'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
