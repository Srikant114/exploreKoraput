import React from 'react'
import '../styles/ContactForm.css'

const ContactForm = () => {
  return (
    <div className="form-container">
        <h1>
            Contact With Us With Ease !!
        </h1>
        <form>
            <input type="text"placeholder='Name' />
            <input type="email"placeholder='Email' />
            <input type="text"placeholder='Subject' />
            <textarea placeholder='Message' rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm