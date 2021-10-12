import React from 'react';
import './Footer.css';
import { Button } from './Button';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-section'>
        <p className='footer-heading'>
          Connect to us on our social media platforms
         
        </p>
        
        <div className='input-areas'>
          <p className='footer-heading'>
          Have some suggestions? We would love to hear from you!
         </p>
                  
            <Button buttonStyle='btn--primary'> Give Feedback</Button>
          
        </div>
      </section>
      <div class='footer-links'>
        
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            
            <Link to='/'><h2>CONTACT US</h2></Link>

          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
           
            <Link to='/'> <h2>VIDEOS</h2> </Link>
          
          </div>
        </div>  

        <div className='footer-link-wrapper'>  
          <div class='footer-link-items'>
           
            <Link to='/'> <h2>IRMUN KI ID</h2></Link>
            
          </div>
        </div>
        
      </div>
      <section class='social-media'>
      <hr noshade />
        <div class='social-media-wrap'>
       
          <small class='website-rights'>BY TEAM IRMUN 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
            

            <Link to='https://discord.gg/S2AK9gmVEG' className='discord-link'>    
            <i class='fab fa-discord' /> 
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
