import './FAQ.css';
import { useState } from 'react';

function FAQ() {
  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      id: 1,
      number: '01',
      question: 'Are you available for freelance work or internships?',
      answer: 'Yes, I\'m open to freelance projects, internships, and entry-level roles. I\'m eager to build real-world experience.'
    },
    {
      id: 2,
      number: '02',
      question: 'What\'s your experience level?',
      answer: 'I\'m a recent graduate with hands-on experience in React, Figma, and web development. I\'m actively learning and growing.'
    },
    {
      id: 3,
      number: '03',
      question: 'Do you work on small projects?',
      answer: 'Absolutely! I love working with startups and small teams. No project is too small.'
    },
    {
      id: 4,
      number: '04',
      question: 'What\'s your typical turn-around time?',
      answer: 'Depends on scope, but usually 1-2 weeks for smaller projects. I\'m flexible and can discuss timelines.'
    },
    {
      id: 5,
      number: '05',
      question: 'Are you open to learning new tools?',
      answer: 'Yes! I\'m passionate about learning. If a project requires something new, I\'m ready to dive in.'
    },
    {
      id: 6,
      number: '06',
      question: 'Do you have a portfolio I can see?',
      answer: 'Yes, this entire site is my work! Check out the Projects page for more examples.'
    },
    {
      id: 7,
      number: '07',
      question: 'What\'s your process like?',
      answer: 'I start with understanding your goals, design/plan in Figma, then build with React and clean CSS. I value collaboration and feedback.'
    }
  ];

  const toggleExpanded = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="page-content">
      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <h1 className="faq-title">FAQ</h1>
          <p className="faq-intro">Quick answers to things people often ask me</p>
        </div>

        {/* FAQ Items */}
        <div className="faq-items">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${expanded === faq.id ? 'expanded' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleExpanded(faq.id)}
              >
                <div className="faq-number-title">
                  <span className="faq-number">{faq.number}</span>
                  <h2 className="faq-question-text">{faq.question}</h2>
                </div>
                <span className="faq-icon">
                  {expanded === faq.id ? '∧' : '∨'}
                </span>
              </button>
              
              {expanded === faq.id && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FAQ;