import React from 'react'
import "../CSS/ContactUs.css";
import { useState } from 'react'

const ContactUsPage = () => {
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [Topic, setTopic] = useState('Choose');
    
    return (
        <div className='contact-us min-page-height'>
            <h4 className='fs-2 text-center mt-4 mb-4'>Contact Us</h4>

            <form className='form'>
                <div>
                    <label>Name</label>
                    <input type="text" required
                        value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Surname</label>
                    <input type="text" required
                        value={Surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required
                        value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='topic'>
                    <label>Topic</label>
                    <select
                        value={Topic} onChange={(e) => setTopic(e.target.value)}>
                        <option value="Choose">Choose</option>
                        <option value="Demand">Demand</option>
                        <option value="Complain">Complain</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='message'>
                    <label>Message</label>
                    <input type="text" required
                        value={Message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>

    )

}

export default ContactUsPage
