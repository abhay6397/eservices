import React from 'react'

export const Contact = () => {
  return (
    <div className="page-content">
      <h1>Contact Us</h1>
      <p>Email: support@urbanservice.com</p>
      <p>Phone: +91 12345 67890</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
