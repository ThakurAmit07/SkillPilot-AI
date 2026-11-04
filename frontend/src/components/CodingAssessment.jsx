import React, { useState } from 'react';
import { Play, Check, AlertCircle, RefreshCw, Terminal } from 'lucide-react';

const sampleCode = `def two_sum(nums, target):
    """
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.
    """
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
`;

export default function CodingAssessment() {
  const [code, setCode] = useState(sampleCode);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);

  const handleRunCode = () => {
    setIsRunning(true);
    setTestResults(null);
    setTimeout(() => {
      setIsRunning(false);
      setTestResults({
        passed: 3,
        total: 3,
        runtime: '48 ms',
        memory: '14.2 MB',
        cases: [
          { input: 'nums = [2,7,11,15], target = 9', expected: '[0, 1]', actual: '[0, 1]', status: 'PASS' },
          { input: 'nums = [3,2,4], target = 6', expected: '[1, 2]', actual: '[1, 2]', status: 'PASS' },
          { input: 'nums = [3,3], target = 6', expected: '[0, 1]', actual: '[0, 1]', status: 'PASS' },
        ]
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>Practical Coding Assessment & Judge</span>
            <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
              Module 3
            </span>
          </h2>
          <p className="text-slate-400 text-sm">
            Live coding sandbox evaluating logic, edge cases, time complexity & code quality.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            disabled={isRunning}
            onClick={handleRunCode}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-sm font-semibold flex items-center space-x-2 shadow-lg shadow-emerald-600/20 transition"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Running Judge...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Run & Test Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Problem Statement Left Column */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Easy / Core DSA
            </span>
            <span className="text-xs text-slate-400 font-mono">Time Limit: 2.0s</span>
          </div>

          <h3 className="text-lg font-bold text-white">Problem: Two Sum (Hash Map Strategy)</h3>
          
          <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Given an array of integers <code className="text-indigo-300 font-mono bg-slate-800 px-1 py-0.5 rounded">nums</code> and an integer <code className="text-indigo-300 font-mono bg-slate-800 px-1 py-0.5 rounded">target</code>, return indices of the two numbers such that they add up to target.
            </p>
            <p>
              You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1 font-mono text-xs text-slate-300">
            <p className="text-indigo-300 font-semibold">// Example 1:</p>
            <p>Input: nums = [2,7,11,15], target = 9</p>
            <p>Output: [0,1]</p>
            <p className="text-slate-400">// nums[0] + nums[1] == 9, we return [0, 1].</p>
          </div>
        </div>

        {/* Code Editor Right Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-xl">
            <div className="h-10 bg-slate-800/80 px-4 flex items-center justify-between border-b border-slate-700">
              <span className="text-xs font-mono text-slate-300 flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>solution.py (Python 3.11)</span>
              </span>
              <span className="text-[11px] text-slate-400">Ready for Backend Judge API</span>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={14}
              className="w-full bg-slate-950/70 p-4 font-mono text-xs text-emerald-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none leading-relaxed"
              spellCheck="false"
            />
          </div>

          {/* Test Case Output */}
          {testResults && (
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-400">
                    All {testResults.passed}/{testResults.total} Test Cases Passed!
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 space-x-3">
                  <span>Runtime: {testResults.runtime}</span>
                  <span>Memory: {testResults.memory}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {testResults.cases.map((c, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
                    <p className="font-semibold text-emerald-300">Test Case #{i + 1}: Passed</p>
                    <p className="font-mono text-slate-400 text-[10px] mt-0.5">{c.expected}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

