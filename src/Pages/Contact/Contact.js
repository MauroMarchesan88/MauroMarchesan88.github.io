import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './index.scss';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-wrapper'>
                <div className='contact'>
                    <div className='icons-wrapper'>
                        <p>Contact me through Linkedin</p>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mauro-marchesan/'>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                        <p>and Github</p>
                        <a target="_blank" rel='noreferrer' href='https://github.com/MauroMarchesan88'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </div>
                    <div className='form-container'>
                        <form method="post" action="https://formsubmit.co/mauromarchesan88@gmail.com" className='form-wrapper'>
                            <p>Or maybe an Email</p>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Your name.." />
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name="email" placeholder="Your email.." required></input>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write something.."></textarea>
                            <input type="hidden" name="_next" value="https://portfolio-mauro.netlify.app/thanks"></input>
                            <input type="submit" className='sbmt' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;