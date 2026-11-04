import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, MessageSquare, Play, RefreshCw, Volume2, Award } from 'lucide-react';

export default function MockInterview() {
  const [inSession, setInSession] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const interviewQuestions = [
    {
      round: 'Technical Architecture & Project Viva',
      question: 'Can you explain how you designed the data schema and caching strategy in your E-commerce project?',
      tips: 'Mention cache invalidation strategies (Redis TTL, write-through vs write-behind).'
    },
    {
      round: 'Core Problem Solving',
      question: 'How do you handle concurrency race conditions when two users purchase the last available stock item at the exact same millisecond?',
      tips: 'Explain database transactions, row-level locking (SELECT FOR UPDATE) or optimistic locking.'
    },
    {
      round: 'Behavioral & Leadership (STAR)',
      question: 'Tell me about a time when a critical bug occurred during deployment. How did you diagnose and resolve it?',
      tips: 'Follow Situation, Task, Action, Result with quantifiable metrics.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>AI Mock Interview & Viva Simulator</span>
            <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
              Module 4 & 5
            </span>
          </h2>
          <p className="text-slate-400 text-sm">
            AI evaluates both technical accuracy and soft skills (speech pace, filler words, clarity).
          </p>
        </div>

        <button
          onClick={() => setInSession(!inSession)}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center space-x-2 transition shadow-lg ${
            inSession 
              ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/20' 
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
          }`}
        >
          {inSession ? 'End Interview Session' : 'Start AI Interview Session'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Video & AI Avatar feed */}
        <div className="lg:col-span-8 space-y-4">
          <div className="aspect-video w-full rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-between p-6">
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-slate-200 flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${inSession ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                <span>{inSession ? 'Session Live • AI Listening' : 'Session Ready'}</span>
              </span>

              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setMicOn(!micOn)} 
                  className={`p-2 rounded-lg backdrop-blur-md transition ${micOn ? 'bg-slate-800/80 text-slate-200' : 'bg-rose-500/80 text-white'}`}
                >
                  {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setVideoOn(!videoOn)} 
                  className={`p-2 rounded-lg backdrop-blur-md transition ${videoOn ? 'bg-slate-800/80 text-slate-200' : 'bg-rose-500/80 text-white'}`}
                >
                  {videoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Center Visualizer */}
            <div className="text-center my-auto">
              <div className="w-20 h-20 mx-auto rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center shadow-lg shadow-indigo-600/20 mb-3">
                <Volume2 className={`w-8 h-8 text-indigo-400 ${inSession ? 'animate-bounce' : ''}`} />
              </div>
              <p className="text-sm font-semibold text-slate-200">
                {inSession ? 'AI Interviewer is speaking...' : 'Click "Start AI Interview Session" to begin'}
              </p>
              <p className="text-xs text-slate-500 mt-1">Ready for Speech-to-Text & LLM agent response stream</p>
            </div>

            {/* Bottom Question Prompt */}
            <div className="p-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-slate-700/80 z-10">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                {interviewQuestions[activeQuestion].round}
              </p>
              <p className="text-sm font-medium text-white">
                "{interviewQuestions[activeQuestion].question}"
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              disabled={activeQuestion === 0}
              onClick={() => setActiveQuestion(Math.max(0, activeQuestion - 1))}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 disabled:opacity-40"
            >
              Previous Question
            </button>
            <span className="text-xs text-slate-400 font-mono">
              Question {activeQuestion + 1} of {interviewQuestions.length}
            </span>
            <button
              disabled={activeQuestion === interviewQuestions.length - 1}
              onClick={() => setActiveQuestion(Math.min(interviewQuestions.length - 1, activeQuestion + 1))}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white disabled:opacity-40"
            >
              Next Question
            </button>
          </div>
        </div>

        {/* Right Column: Live Speech & Presentation Analysis */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <h3 className="text-base font-semibold text-white">Live Speech Diagnostics</h3>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Speech Pace (WPM)</span>
                  <span className="text-emerald-400 font-bold font-mono">135 WPM (Optimal)</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '75%' }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Filler Words (um, like, basically)</span>
                  <span className="text-amber-400 font-bold font-mono">3 detected</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Clarity & Confidence</span>
                  <span className="text-indigo-400 font-bold font-mono">88%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-400 h-full rounded-full" style={{ width: '88%' }} />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-1">AI Coaching Tip:</span>
              <p className="text-xs text-slate-400 italic bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                {interviewQuestions[activeQuestion].tips}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

