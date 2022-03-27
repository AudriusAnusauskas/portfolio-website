import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_z946d79', 
            'template_fs551dc', 
            formRef.current, 
            'szFDPNBj-MT8OX1XK')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h2 className="c-title">Let's talk about your new project</h2>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src= {Phone} 
                            alt=""
                            className="c-icon"
                            />
                            +370(616)08758
                        </div>
                        <div className="c-info-item">
                            <img 
                            src= {Email} 
                            alt=""
                            className="c-icon"
                            />
                            anusauskas.audrius@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                            src= {Address} 
                            alt=""
                            className="c-icon"
                            />
                            Aušrinės 21, Vilnius, LT08402, Lithuania
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" ></textarea>
                        <button>Submit</button>
                        <div className="c-thankyou">
                            {done && ' Thank you!'}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
