import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);

  // Sample quiz data - in a real app, this would come from your backend
  const quizData = {
    "mathematics": {
      "grade6": [
        {
          id: 1,
          question: "What is the value of π (pi) rounded to two decimal places?",
          options: ["3.14", "3.41", "3.12", "3.25"],
          correctAnswer: "3.14",
          explanation: "π (pi) is approximately equal to 3.14159... which rounds to 3.14"
        },
        {
          id: 2,
          question: "If x + 5 = 12, what is the value of x?",
          options: ["5", "7", "17", "6"],
          correctAnswer: "7",
          explanation: "To find x, subtract 5 from both sides: x = 12 - 5 = 7"
        },
        {
          id: 3, 
          question: "What is the area of a rectangle with length 8 cm and width 4 cm?",
          options: ["24 cm²", "16 cm²", "32 cm²", "12 cm²"],
          correctAnswer: "32 cm²",
          explanation: "The area of a rectangle is length × width = 8 × 4 = 32 cm²"
        }
      ],
      "grade7": [
        {
          id: 1,
          question: "What is the result of 3² × 4?",
          options: ["24", "36", "18", "12"],
          correctAnswer: "36",
          explanation: "3² = 9, and 9 × 4 = 36"
        },
        {
          id: 2,
          question: "Simplify: 2(x + 3) - 4 = 6",
          options: ["x = 2", "x = 4", "x = 5", "x = 3"],
          correctAnswer: "x = 2",
          explanation: "2(x + 3) - 4 = 6\n2x + 6 - 4 = 6\n2x + 2 = 6\n2x = 4\nx = 2"
        }
      ]
    },
    "science": {
      "grade6": [
        {
          id: 1,
          question: "Which of the following is NOT a state of matter?",
          options: ["Solid", "Liquid", "Gas", "Energy"],
          correctAnswer: "Energy",
          explanation: "The three main states of matter are solid, liquid, and gas. Energy is a form of power, not a state of matter."
        },
        {
          id: 2,
          question: "Which organ is responsible for pumping blood throughout the body?",
          options: ["Lungs", "Brain", "Heart", "Liver"],
          correctAnswer: "Heart",
          explanation: "The heart is a muscular organ that pumps blood through the circulatory system."
        },
        {
          id: 3,
          question: "Plants make their food through which process?",
          options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"],
          correctAnswer: "Photosynthesis",
          explanation: "Photosynthesis is the process by which plants use sunlight to create food from carbon dioxide and water."
        }
      ],
      "grade7": [
        {
          id: 1,
          question: "What is the basic unit of life?",
          options: ["Tissue", "Cell", "Organ", "Molecule"],
          correctAnswer: "Cell",
          explanation: "The cell is the basic structural and functional unit of all living organisms."
        },
        {
          id: 2,
          question: "What gas do plants release during photosynthesis?",
          options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
          correctAnswer: "Oxygen",
          explanation: "During photosynthesis, plants take in carbon dioxide and release oxygen as a byproduct."
        }
      ]
    },
    "english": {
      "grade6": [
        {
          id: 1,
          question: "Which of the following is a proper noun?",
          options: ["City", "Delhi", "Building", "Mountain"],
          correctAnswer: "Delhi",
          explanation: "Delhi is a proper noun because it names a specific city."
        },
        {
          id: 2,
          question: "Which sentence uses the correct form of the verb?",
          options: ["They was happy.", "She were singing.", "He is running.", "I are a student."],
          correctAnswer: "He is running.",
          explanation: "The verb 'is' agrees with the singular subject 'he'."
        }
      ]
    },
    "socialStudies": {
      "grade6": [
        {
          id: 1,
          question: "Which of the following is India's highest civilian award?",
          options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"],
          correctAnswer: "Bharat Ratna",
          explanation: "Bharat Ratna is the highest civilian award of India."
        },
        {
          id: 2,
          question: "Which river is known as the 'Ganga of the South'?",
          options: ["Krishna", "Kaveri", "Godavari", "Narmada"],
          correctAnswer: "Godavari",
          explanation: "The Godavari River is often referred to as the 'Ganga of the South' due to its significance."
        }
      ]
    }
  };

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizStarted) {
      handleQuizSubmit();
    }
  }, [timeLeft, quizStarted]);

  const startQuiz = () => {
    if (!selectedSubject || !selectedGrade) {
      alert("Please select both a subject and grade level!");
      return;
    }
    
    const questions = quizData[selectedSubject][selectedGrade];
    if (!questions || questions.length === 0) {
      alert("No questions available for this selection. Please try another subject or grade.");
      return;
    }
    
    setQuizQuestions(questions);
    setQuizStarted(true);
    setTimeLeft(questions.length * 30); // 30 seconds per question
  };

  const handleAnswer = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleQuizSubmit();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuizSubmit = () => {
    let userScore = 0;
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        userScore++;
      }
    });
    
    setScore(userScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedSubject('');
    setSelectedGrade('');
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers({});
    setTimeLeft(0);
    setQuizQuestions([]);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">EduBridge Interactive Quizzes</h1>
      
      {!quizStarted ? (
        <div className="quiz-setup">
          <h2>Select Your Quiz</h2>
          
          <div className="selector">
            <label>Subject:</label>
            <select 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              <option value="mathematics">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="socialStudies">Social Studies</option>
            </select>
          </div>
          
          <div className="selector">
            <label>Grade Level:</label>
            <select 
              value={selectedGrade} 
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">Select Grade</option>
              <option value="grade6">Grade 6</option>
              <option value="grade7">Grade 7</option>
              <option value="grade8">Grade 8</option>
              <option value="grade9">Grade 9</option>
              <option value="grade10">Grade 10</option>
            </select>
          </div>
          
          <button className="start-button" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      ) : showResults ? (
        <div className="quiz-results">
          <h2>Quiz Results</h2>
          <div className="score-display">
            <p>Your Score: <span className="score">{score}</span> out of {quizQuestions.length}</p>
            <p>Percentage: <span className="percentage">{Math.round((score / quizQuestions.length) * 100)}%</span></p>
          </div>
          
          <div className="answers-review">
            <h3>Review Your Answers:</h3>
            {quizQuestions.map((question) => (
              <div 
                key={question.id} 
                className={`question-review ${
                  selectedAnswers[question.id] === question.correctAnswer 
                    ? "correct" 
                    : "incorrect"
                }`}
              >
                <p className="review-question">{question.question}</p>
                <p>Your answer: {selectedAnswers[question.id] || "Not answered"}</p>
                <p>Correct answer: {question.correctAnswer}</p>
                <p className="explanation"><strong>Explanation:</strong> {question.explanation}</p>
              </div>
            ))}
          </div>
          
          <div className="action-buttons">
            <button onClick={resetQuiz}>Try Another Quiz</button>
            <button onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
      ) : (
        <div className="quiz-active">
          <div className="quiz-header">
            <h2>{selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)} Quiz - Grade {selectedGrade.replace('grade', '')}</h2>
            <div className="timer">Time Remaining: {formatTime(timeLeft)}</div>
            <div className="progress">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </div>
          </div>
          
          <div className="question-container">
            <h3 className="question">{quizQuestions[currentQuestionIndex].question}</h3>
            
            <div className="options">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <div 
                  key={index} 
                  className={`option ${
                    selectedAnswers[quizQuestions[currentQuestionIndex].id] === option 
                      ? "selected" 
                      : ""
                  }`}
                  onClick={() => handleAnswer(quizQuestions[currentQuestionIndex].id, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          
          <div className="navigation-buttons">
            <button 
              onClick={handlePrevQuestion} 
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            
            {currentQuestionIndex < quizQuestions.length - 1 ? (
              <button onClick={handleNextQuestion}>Next</button>
            ) : (
              <button onClick={handleQuizSubmit}>Submit Quiz</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
