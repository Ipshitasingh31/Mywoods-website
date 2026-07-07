import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-shell contact-page">
      <section className="contact-hero glass-card">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1>Luxury support for your design journey</h1>
          <p>Our team is happy to help with styling, delivery, and order support for premium furniture purchases.</p>
        </div>
      </section>

      <section className="contact-layout">
        <div className="glass-card contact-details">
          <h2>Reach our studio</h2>
          <p>Phone: +1 800 345 6789</p>
          <p>Email: hello@mywoods.com</p>
          <p>Location: 25 Luxury Avenue, New York</p>
        </div>

        <form className="glass-card contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea placeholder="How can we help you?" required />
          </label>
          <button type="submit" className="button-primary">
            Send message
          </button>
          {submitted && <p className="form-success">Thanks! We’ll be in touch soon.</p>}
        </form>
      </section>
    </div>
  );
}

export default Contact;
