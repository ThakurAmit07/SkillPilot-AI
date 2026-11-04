import React, { useState } from 'react';
import { Bot, Send, User, Sparkles } from 'lucide-react';

export default function AIMentor() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hi Amit! I am your SkillPilot AI Mentor. I have analyzed your resume, coding assessments, and recent mock viva. What placement question or concept would you like to prepare for today?'
    },
    {
      sender: 'user',
      text: 'How should I answer when an interviewer asks about why I chose FastAPI over Django in my project?'
    },
    {
      sender: 'ai',
      text: 'Great question! Highlight 3 specific architectural advantages:\n1. Async / Concurrency: FastAPI leverages ASGI (Starlette) for high throughput non-blocking I/O.\n2. Automatic Pydantic Validation & Swagger Docs: Eliminates boilerplate and auto-generates OpenAPI contracts.\n3. Microservices Fit: Lightweight footprint compared to Django\'s full battery-included monolithic nature.'
    }
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Got it! That is an important placement topic. I recommend checking the "Adaptive Skill Test" module to practice 5 questions on this, or take a quick 3-minute viva.`
        }
      ]);
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <span>AI Mentor & Live Placement Coach</span>
          <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
            Module 10
          </span>
        </h2>
        <p className="text-slate-400 text-sm">
          Interactive guidance powered by LLM agents, tailored to your exact profile and weaknesses.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col h-[520px]">
        {/* Chat message list */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gradient-to-tr from-indigo-500 to-purple-500 text-white'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[78%] p-4 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-800/80 border border-slate-700/60 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your AI Mentor about interview questions, tech concepts, or resume tips..."
            className="flex-1 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleSend}
            className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition shadow-lg shadow-indigo-600/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

