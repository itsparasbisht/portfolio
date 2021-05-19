import React, {useState} from 'react'
import './Contact.css'
import firebase from 'firebase'
import {db} from './firebase'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()
        db.collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            setName('')
            setEmail('')
            setMessage('')
            window.alert("THANKs, call you soon...")
        })
        .catch(error => window.alert(error))
        
    }

    return (
        <div className="contact" id="contact">
            <h1>CONTACT</h1>
            <form autoComplete="off">
                <label htmlFor="name">NAME</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label htmlFor="email">E-MAIL</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label htmlFor="message">MESSAGE</label>
                <textarea
                    name="message"
                    id="message"
                    cols="25"
                    rows="10"
                    placeholder="type your message..."
                    required
                    maxLength="500"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                ></textarea>

                <input type="submit" value="submit" onClick={(e) => handleSubmit(e)}/>
            </form>

            <footer>
                <div className="contact__links">
                    <a href="https://github.com/itsparasbisht"><img src="icons/github.svg" alt=""/></a>
                    <a href="https://www.linkedin.com/in/paras-bisht/"><img src="icons/linkedin.svg" alt=""/></a>
                    <a href="https://www.facebook.com/paras.bisht.9678"><img src="icons/facebook.svg" alt=""/></a>
                </div>
                <div className="contact__text">
                    <a href="tel:9528350042">phone: 9528350042</a> <br/>
                    <a href="mailto:iamparasbisht@gmail.com">email: iamparasbisht@gmail.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Contact
