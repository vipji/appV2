import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PerformanceData {
  name: string;
  time: number;
  memory: number;
  cpu: number;
}

interface DebuggerState {
  breakpoints: Set<number>;
  currentLine: number;
  variables: Record<string, any>;
  callStack: string[];
  isDebugging: boolean;
}

export const DebuggerUtils = {
  initializeDebugger: (): DebuggerState => ({
    breakpoints: new Set(),
    currentLine: 0,
    variables: {},
    callStack: [],
    isDebugging: false,
  }),

  addBreakpoint: (state: DebuggerState, line: number): DebuggerState => ({
    ...state,
    breakpoints: new Set([...state.breakpoints, line]),
  }),

  removeBreakpoint: (state: DebuggerState, line: number): DebuggerState => {
    const newBreakpoints = new Set(state.breakpoints);
    newBreakpoints.delete(line);
    return { ...state, breakpoints: newBreakpoints };
  },

  toggleBreakpoint: (state: DebuggerState, line: number): DebuggerState => {
    if (state.breakpoints.has(line)) {
      return DebuggerUtils.removeBreakpoint(state, line);
    }
    return DebuggerUtils.addBreakpoint(state, line);
  },

  extractVariables: (code: string, line: number): Record<string, any> => {
    const variables: Record<string, any> = {};
    const lines = code.split('\n').slice(0, line);
    
    const variablePattern = /(?:let|const|var|int|String|boolean|double|float)\s+(\w+)\s*=\s*([^;]+)/g;
    lines.forEach(line => {
      let match;
      while ((match = variablePattern.exec(line)) !== null) {
        variables[match[1]] = match[2];
      }
    });

    return variables;
  },

  analyzeCodeComplexity: (code: string): { timeComplexity: string; spaceComplexity: string; warnings: string[] } => {
    const warnings: string[] = [];
    let timeComplexity = 'O(1)';
    let spaceComplexity = 'O(1)';

    const lines = code.split('\n');

    let nestedLoops = 0;
    let recursionDetected = false;

    lines.forEach(line => {
      if (line.includes('for (') || line.includes('while (')) {
        nestedLoops++;
      }
      if (line.includes('return') && line.includes('(')) {
        recursionDetected = true;
      }
    });

    if (nestedLoops >= 3) {
      timeComplexity = 'O(n³)';
      warnings.push('⚠️ High nested loop complexity detected');
    } else if (nestedLoops === 2) {
      timeComplexity = 'O(n²)';
    } else if (nestedLoops === 1) {
      timeComplexity = 'O(n)';
    }

    if (recursionDetected) {
      spaceComplexity = 'O(n)';
      warnings.push('⚠️ Recursive calls detected - check for stack overflow');
    }

    if (code.includes('new Array') || code.includes('new List')) {
      spaceComplexity = 'O(n)';
    }

    return { timeComplexity, spaceComplexity, warnings };
  },
};

// Performance Visualization Component
interface PerformanceMetricsProps {
  data: PerformanceData[];
  isDarkMode: boolean;
}

export const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ data, isDarkMode }) => {
  if (!data || data.length === 0) {
    return (
      <div className={`p-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        No performance data available
      </div>
    );
  }

  const textColor = isDarkMode ? '#9CA3AF' : '#4B5563';
  const gridColor = isDarkMode ? '#374151' : '#E5E7EB';

  return (
    <div className="space-y-4">
      <div>
        <h4 className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          ⏱️ Execution Time Trend
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF' }} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="time" 
              stroke="#3B82F6" 
              dot={{ fill: '#3B82F6' }}
              name="Time (ms)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h4 className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          💾 Memory & CPU Usage
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF' }} />
            <Legend />
            <Bar dataKey="memory" fill="#8B5CF6" name="Memory (MB)" />
            <Bar dataKey="cpu" fill="#10B981" name="CPU (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Debugger Console Component
interface DebuggerConsoleProps {
  isDarkMode: boolean;
  debugState: DebuggerState;
}

export const DebuggerConsole: React.FC<DebuggerConsoleProps> = ({ isDarkMode, debugState }) => {
  return (
    <div className={`p-4 space-y-4 max-h-96 overflow-y-auto ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
      {/* Call Stack */}
      <div>
        <h4 className="font-bold text-sm mb-2">📚 Call Stack</h4>
        <div className={`text-xs space-y-1 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'} p-2 rounded`}>
          {debugState.callStack.length > 0 ? (
            debugState.callStack.map((frame, idx) => (
              <div key={idx} className="truncate">
                {idx > 0 && '↳ '} {frame}
              </div>
            ))
          ) : (
            <div className="text-gray-500">No call stack</div>
          )}
        </div>
      </div>

      {/* Variables */}
      <div>
        <h4 className="font-bold text-sm mb-2">🔍 Local Variables</h4>
        <div className={`text-xs space-y-1 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'} p-2 rounded max-h-40 overflow-y-auto`}>
          {Object.keys(debugState.variables).length > 0 ? (
            Object.entries(debugState.variables).map(([key, value]) => (
              <div key={key} className="font-mono">
                <span className="text-blue-400">{key}</span>
                <span className="text-gray-500">: </span>
                <span className="text-green-400">{JSON.stringify(value)}</span>
              </div>
            ))
          ) : (
            <div className="text-gray-500">No variables</div>
          )}
        </div>
      </div>

      {/* Breakpoints */}
      <div>
        <h4 className="font-bold text-sm mb-2">🔴 Breakpoints</h4>
        <div className={`text-xs space-y-1 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'} p-2 rounded`}>
          {debugState.breakpoints.size > 0 ? (
            Array.from(debugState.breakpoints).map((line) => (
              <div key={line}>Line {line}</div>
            ))
          ) : (
            <div className="text-gray-500">No breakpoints</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Test Case Visualizer
interface TestCaseVisualizerProps {
  testCases: Array<{ input: string; expectedOutput: string; actualOutput?: string; passed?: boolean }>;
  isDarkMode: boolean;
}

export const TestCaseVisualizer: React.FC<TestCaseVisualizerProps> = ({ testCases, isDarkMode }) => {
  return (
    <div className="space-y-3">
      {testCases.map((testCase, idx) => (
        <div
          key={idx}
          className={`p-4 rounded-lg border ${
            testCase.passed
              ? isDarkMode
                ? 'bg-green-500/20 border-green-400/30'
                : 'bg-green-500/10 border-green-400/20'
              : testCase.actualOutput !== undefined
              ? isDarkMode
                ? 'bg-red-500/20 border-red-400/30'
                : 'bg-red-500/10 border-red-400/20'
              : isDarkMode
              ? 'bg-gray-700/50 border-gray-600/30'
              : 'bg-gray-100/50 border-gray-300/30'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`font-bold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Test Case {idx + 1}
            </span>
            {testCase.passed !== undefined && (
              <span className={testCase.passed ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                {testCase.passed ? '✅ PASSED' : '❌ FAILED'}
              </span>
            )}
          </div>
          <div className={`text-xs space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-mono`}>
            <div>
              <span className="text-blue-400">Input:</span> {testCase.input}
            </div>
            <div>
              <span className="text-purple-400">Expected:</span> {testCase.expectedOutput}
            </div>
            {testCase.actualOutput !== undefined && (
              <div>
                <span className="text-orange-400">Actual:</span> {testCase.actualOutput}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
