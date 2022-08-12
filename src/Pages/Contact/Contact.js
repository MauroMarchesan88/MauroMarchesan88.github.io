import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './index.scss';

// import React, { useContext, useEffect, useState } from 'react';
// import MyContext from '../context/MyContext';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-wrapper'>
                <div className='contact'>
                    <p>Im in Linkedin</p>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    <p>and Github</p>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </div>
            </div>
        </div>
    )
}

export default Contact;