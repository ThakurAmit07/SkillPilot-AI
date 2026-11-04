import React, { useState } from 'react';
import { CheckCircle2, Clock, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';

const mockQuestions = [
  {
    id: 1,
    skill: 'Python / Backend',
    difficulty: 'Intermediate',
    question: 'What is the time complexity of searching a key in a Python dict on average?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    correct: 0,
    explanation: 'Python dictionaries are implemented using hash tables, giving average O(1) lookup.'
  },
  {
    id: 2,
    skill: 'React.js',
    difficulty: 'Intermediate',
    question: 'Which hook should be used to memoize the calculation result between re-renders?',
    options: ['useCallback', 'useMemo', 'useEffect', 'useRef'],
    correct: 1,
    explanation: 'useMemo caches the result of a calculation between renders until dependencies change.'
  },
  {
    id: 3,
    skill: 'Database / SQL',
    difficulty: 'Advanced',
    question: 'Which isolation level prevents Dirty Reads and Non-Repeatable Reads, but allows Phantom Reads in standard SQL?',
    options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'],
    correct: 2,
    explanation: 'Repeatable Read prevents dirty and non-repeatable reads; phantom reads can occur unless serializable.'
  }
];

export default function SkillTesting() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = mockQuestions[currentIdx];

  const handleSelect = (idx) => {
    if (!submitted) {
      setSelectedOption(idx);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    if (selectedOption === currentQ.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < mockQuestions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetTest = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setSubmitted(false);
    setIsFinished(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <span>Adaptive Technical Skill Assessment</span>
          <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
            Module 2
          </span>
        </h2>
        <p className="text-slate-400 text-sm">
          Dynamic questions adjust difficulty based on your previous answers to benchmark true competence.
        </p>
      </div>

      {!isFinished ? (
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {currentQ.skill}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">
                Difficulty: {currentQ.difficulty}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Question {currentIdx + 1} of {mockQuestions.length}</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-slate-100 leading-snug">
            {currentQ.question}
          </h3>

          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              let optStyle = 'border-slate-800 bg-slate-800/40 text-slate-300 hover:bg-slate-800';
              if (selectedOption === idx) {
                optStyle = 'border-indigo-500 bg-indigo-500/10 text-indigo-200';
              }
              if (submitted) {
                if (idx === currentQ.correct) {
                  optStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-200';
                } else if (selectedOption === idx) {
                  optStyle = 'border-rose-500 bg-rose-500/20 text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition flex items-center justify-between ${optStyle}`}
                >
                  <span>{option}</span>
                  {submitted && idx === currentQ.correct && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 text-xs text-slate-300">
              <span className="font-bold text-indigo-400 block mb-1">Explanation:</span>
              {currentQ.explanation}
            </div>
          )}

          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-800">
            {!submitted ? (
              <button
                disabled={selectedOption === null}
                onClick={handleCheckAnswer}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold transition"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold flex items-center space-x-2 transition"
              >
                <span>{currentIdx + 1 === mockQuestions.length ? 'View Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Assessment Complete!</h3>
          <p className="text-sm text-slate-300">
            You scored <span className="font-bold text-emerald-400">{score}</span> out of <span className="font-bold">{mockQuestions.length}</span>.
          </p>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Your evidence profile has been updated! Python and React competency benchmarks have increased by +5%.
          </p>
          <div className="pt-4">
            <button
              onClick={resetTest}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold inline-flex items-center space-x-2 transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

