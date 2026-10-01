import './Contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('4gOZACo7iPDL41zRY');

function Contact({ setSelected }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email to you
      await emailjs.send(
        'service_rz77w48',      
        'template_hj1khon',   
        {
          to_email: 'Tinatvu04@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        }
      );

      await emailjs.send(
        'service_rz77w48',
        'template_18kakt8', 
        {
          to_email: formData.email,
          user_name: formData.name
        }
      );

      // Show success
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Job opportunity', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="contact-container">
        
        {/* Left Side - Info */}
        <div className="contact-left">
          <h1 className="contact-title">Let's Talk!</h1>
          <p className="contact-subtitle">Have a project in mind or just want to say hi? My inbox is open!</p>

          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">Currently open to opportunities</span>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="contact-info-item">
              <div className="contact-info-icon">✉</div>
              <div className="contact-info-content">
                <h3>EMAIL</h3>
                <p>Tinatvu04@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-content">
                <h3>BASED IN</h3>
                <p>Houston · Central Time (CST)</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">⏱</div>
              <div className="contact-info-content">
                <h3>RESPONSE TIME</h3>
                <p>Usually within [2-3] days</p>
              </div>
            </div>
          </div>

          {/* Links CTA - Now navigates to Links page */}
          <button 
            onClick={() => setSelected('links')} 
            className="contact-links-cta"
          >
            Or find me on my other links →
          </button>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label>What's this about?</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={loading}
              >
                <option>Job opportunity</option>
                <option>Freelance project</option>
                <option>Collaboration</option>
                <option>Just saying hi</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me a little about what you have in mind..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                disabled={loading}
              ></textarea>
            </div>

            {error && <p style={{ color: '#d32f2f', fontSize: '13px' }}>{error}</p>}

            <button 
              type="submit" 
              className={`submit-btn ${submitted ? 'submitted' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : submitted ? '✓ Message sent!' : 'Send Message →'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;