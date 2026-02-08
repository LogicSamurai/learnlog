import React, { useState } from 'react';

const styles = {
  container: {
    margin: '2rem 0',
    padding: '1.5rem',
    borderRadius: '8px',
    backgroundColor: 'var(--ifm-background-surface-color)',
    border: '1px solid var(--ifm-color-emphasis-300)',
  },
  question: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  option: {
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    border: '2px solid var(--ifm-color-emphasis-300)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontSize: '1rem',
  },
  optionHover: {
    borderColor: 'var(--ifm-color-primary)',
  },
  optionSelected: {
    borderColor: 'var(--ifm-color-primary)',
    backgroundColor: 'var(--ifm-color-primary-lightest)',
  },
  optionCorrect: {
    borderColor: '#00c853',
    backgroundColor: 'rgba(0, 200, 83, 0.1)',
  },
  optionIncorrect: {
    borderColor: '#ff1744',
    backgroundColor: 'rgba(255, 23, 68, 0.1)',
  },
  feedback: {
    marginTop: '1rem',
    padding: '1rem',
    borderRadius: '6px',
    fontWeight: '500',
  },
  feedbackCorrect: {
    backgroundColor: 'rgba(0, 200, 83, 0.15)',
    color: '#00c853',
  },
  feedbackIncorrect: {
    backgroundColor: 'rgba(255, 23, 68, 0.15)',
    color: '#ff1744',
  },
  explanation: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: 'var(--ifm-color-content-secondary)',
  },
  resetButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'var(--ifm-color-primary)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};

export default function Quiz({ question, options, correctIndex, explanation }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index) => {
    if (submitted) return;
    setSelected(index);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const isCorrect = selected === correctIndex;

  const getOptionStyle = (index) => {
    let style = { ...styles.option };
    
    if (submitted) {
      if (index === correctIndex && isCorrect) {
        style = { ...style, ...styles.optionCorrect };
      } else if (index === selected && !isCorrect) {
        style = { ...style, ...styles.optionIncorrect };
      }
    } else if (index === selected) {
      style = { ...style, ...styles.optionSelected };
    }
    
    return style;
  };

  return (
    <div style={styles.container}>
      <div style={styles.question}>{question}</div>
      <div style={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            style={getOptionStyle(index)}
            onClick={() => handleSelect(index)}
            disabled={submitted}
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
      
      {submitted && (
        <>
          <div
            style={{
              ...styles.feedback,
              ...(isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect),
            }}
          >
            {isCorrect ? (
              <>
                ✓ Correct!
                {explanation && (
                  <div style={styles.explanation}>{explanation}</div>
                )}
              </>
            ) : (
              <>
                ✗ Incorrect!
              </>
            )}
          </div>
          <button style={styles.resetButton} onClick={handleReset}>
            Try Again
          </button>
        </>
      )}
    </div>
  );
}
