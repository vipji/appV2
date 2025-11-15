import React, { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Play, 
  Square, 
  Save, 
  Download, 
  Upload, 
  Settings, 
  Bug, 
  FileText, 
  Plus, 
  X, 
  Folder,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
  ArrowLeft
} from 'lucide-react';
import Logo from './Logo';
import { useTheme } from './ThemeProvider';

interface CodeFile {
  id: string;
  name: string;
  content: string;
  language: string;
}

interface TestResult {
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
  executionTime: number;
}

interface CodeEditorProps {
  isOpen: boolean;
  onClose: () => void;
  initialProblem?: any;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ isOpen, onClose, initialProblem }) => {
  const { isDarkMode } = useTheme();
  const [files, setFiles] = useState<CodeFile[]>([
    {
      id: '1',
      name: 'Main.java',
      content: initialProblem?.starterCode || `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, #1 Developer.dev!");
        
        // Start coding here
        Solution solution = new Solution();
        
        // Test your solution
        // int result = solution.yourMethod();
        // System.out.println("Result: " + result);
    }
}

class Solution {
    // Write your solution here
    
}`,
      language: 'java'
    }
  ]);

  const [activeFileId, setActiveFileId] = useState('1');
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [showTests, setShowTests] = useState(false);
  const [executionTime, setExecutionTime] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);

  const editorRef = useRef<any>(null);

  const activeFile = files.find(f => f.id === activeFileId);

  useEffect(() => {
    if (initialProblem && isOpen) {
      setFiles([{
        id: '1',
        name: 'Solution.java',
        content: initialProblem.starterCode,
        language: 'java'
      }]);
      setShowTests(true);
    }
  }, [initialProblem, isOpen]);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    
    // Configure editor options
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 4,
      insertSpaces: true,
      wordWrap: 'on',
      lineNumbers: 'on',
      glyphMargin: true,
      folding: true,
      lineDecorationsWidth: 10,
      lineNumbersMinChars: 3,
      renderLineHighlight: 'all',
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
    });
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined && activeFile) {
      setFiles(files.map(f => 
        f.id === activeFileId 
          ? { ...f, content: value }
          : f
      ));
    }
  };

  const addNewFile = () => {
    const newId = (files.length + 1).toString();
    const newFile: CodeFile = {
      id: newId,
      name: `File${newId}.java`,
      content: `public class File${newId} {
    // Your code here
}`,
      language: 'java'
    };
    setFiles([...files, newFile]);
    setActiveFileId(newId);
  };

  const removeFile = (fileId: string) => {
    if (files.length > 1) {
      const newFiles = files.filter(f => f.id !== fileId);
      setFiles(newFiles);
      if (activeFileId === fileId) {
        setActiveFileId(newFiles[0].id);
      }
    }
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Compiling and running...\n');
    
    const startTime = Date.now();
    
    try {
      // Simulate compilation and execution
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const endTime = Date.now();
      setExecutionTime(endTime - startTime);
      setMemoryUsage(Math.floor(Math.random() * 50) + 10); // Simulate memory usage
      
      // Simulate output based on code content
      let simulatedOutput = '';
      
      if (activeFile?.content.includes('System.out.println')) {
        const matches = activeFile.content.match(/System\.out\.println\("([^"]*)"\)/g);
        if (matches) {
          matches.forEach(match => {
            const text = match.match(/"([^"]*)"/)?.[1] || '';
            simulatedOutput += text + '\n';
          });
        }
      }
      
      if (input.trim()) {
        simulatedOutput += `\nInput processed: ${input}\n`;
      }
      
      if (!simulatedOutput) {
        simulatedOutput = 'Program executed successfully.\nNo output generated.\n';
      }
      
      simulatedOutput += `\n--- Execution completed ---\nTime: ${executionTime}ms\nMemory: ${memoryUsage}MB`;
      
      setOutput(simulatedOutput);
      
    } catch (error) {
      setOutput(`Error: ${error}\n\nCompilation failed. Please check your code for syntax errors.`);
    } finally {
      setIsRunning(false);
    }
  };

  const runTests = async () => {
    if (!initialProblem?.testCases) return;
    
    setIsRunning(true);
    setOutput('Running test cases...\n');
    
    const results: TestResult[] = [];
    
    for (const testCase of initialProblem.testCases) {
      const startTime = Date.now();
      
      // Simulate test execution
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const endTime = Date.now();
      const executionTime = endTime - startTime;
      
      // Simple simulation - in real implementation, this would execute the code
      const passed = Math.random() > 0.3; // 70% pass rate for demo
      
      results.push({
        input: testCase.input,
        expectedOutput: testCase.output,
        actualOutput: passed ? testCase.output : 'Wrong output',
        passed,
        executionTime
      });
    }
    
    setTestResults(results);
    
    const passedCount = results.filter(r => r.passed).length;
    const totalCount = results.length;
    
    setOutput(`Test Results: ${passedCount}/${totalCount} passed\n\n${
      results.map((result, index) => 
        `Test Case ${index + 1}: ${result.passed ? '✅ PASSED' : '❌ FAILED'}\n` +
        `Input: ${result.input}\n` +
        `Expected: ${result.expectedOutput}\n` +
        `Actual: ${result.actualOutput}\n` +
        `Time: ${result.executionTime}ms\n`
      ).join('\n')
    }`);
    
    setIsRunning(false);
  };

  const saveCode = () => {
    const dataStr = JSON.stringify(files, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
        const exportFileDefaultName = 'developer1-project.json';    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className={`h-full w-full flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        {/* Header */}
        <div className={`border-b px-4 py-3 flex items-center justify-between ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-300'
        }`}>
          <div className="flex items-center space-x-4">
            {/* Back Button with Logo */}
            <button
              onClick={onClose}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              title="Back to Home"
            >
              <ArrowLeft className="w-4 h-4" />
              <Logo size="sm" isDarkMode={isDarkMode} showText={false} />
            </button>
            
            <div className="h-6 w-px bg-gray-600"></div>
            
            <div>
              <h2 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                #1 Developer.dev IDE
              </h2>
              {initialProblem && (
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Problem: {initialProblem.title}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={saveCode}
              className={`p-2 rounded transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              title="Save Project"
            >
              <Save className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Sidebar */}
          <div className={`w-64 border-r flex flex-col ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-300'
          }`}>
            {/* File Explorer */}
            <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-sm font-medium flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Folder className="w-4 h-4 mr-2" />
                  Files
                </h3>
                <button
                  onClick={addNewFile}
                  className={`p-1 rounded ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                  title="Add File"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-1">
                {files.map(file => (
                  <div
                    key={file.id}
                    className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                      activeFileId === file.id 
                        ? 'bg-blue-600 text-white' 
                        : isDarkMode 
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveFileId(file.id)}
                  >
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    {files.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(file.id);
                        }}
                        className={`p-1 rounded ${
                          isDarkMode 
                            ? 'text-gray-400 hover:text-red-400' 
                            : 'text-gray-600 hover:text-red-600'
                        }`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="p-3 space-y-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-3 py-2 rounded flex items-center justify-center space-x-2 transition-colors"
              >
                {isRunning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Run Code</span>
                  </>
                )}
              </button>

              {initialProblem && (
                <button
                  onClick={runTests}
                  disabled={isRunning}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-3 py-2 rounded flex items-center justify-center space-x-2 transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Run Tests</span>
                </button>
              )}

              <button
                onClick={() => setShowTests(!showTests)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded flex items-center justify-center space-x-2 transition-colors"
              >
                <Bug className="w-4 h-4" />
                <span>Debug</span>
              </button>
            </div>

            {/* Performance Metrics */}
            {(executionTime > 0 || memoryUsage > 0) && (
              <div className={`p-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Performance
                </h4>
                <div className={`space-y-1 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      Time:
                    </span>
                    <span>{executionTime}ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Memory:
                    </span>
                    <span>{memoryUsage}MB</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Editor */}
            <div className="flex-1">
              <Editor
                height="100%"
                language={activeFile?.language || 'java'}
                value={activeFile?.content || ''}
                onChange={handleCodeChange}
                onMount={handleEditorDidMount}
                theme={isDarkMode ? "vs-dark" : "light"}
                options={{
                  fontSize: 14,
                  minimap: { enabled: true },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 4,
                  insertSpaces: true,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  glyphMargin: true,
                  folding: true,
                  renderLineHighlight: 'all',
                  selectOnLineNumbers: true,
                  roundedSelection: false,
                  readOnly: false,
                  cursorStyle: 'line',
                }}
              />
            </div>

            {/* Bottom Panel */}
            <div className={`h-64 border-t flex ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-300'
            }`}>
              {/* Input Panel */}
              <div className={`w-1/3 border-r flex flex-col ${
                isDarkMode ? 'border-gray-700' : 'border-gray-300'
              }`}>
                <div className={`px-3 py-2 border-b ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-gray-100 border-gray-300'
                }`}>
                  <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Input
                  </h4>
                </div>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`flex-1 p-3 resize-none focus:outline-none font-mono text-sm ${
                    isDarkMode 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-50 text-gray-900'
                  }`}
                  placeholder="Enter input for your program..."
                />
              </div>

              {/* Output Panel */}
              <div className="flex-1 flex flex-col">
                <div className={`px-3 py-2 border-b flex items-center justify-between ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-gray-100 border-gray-300'
                }`}>
                  <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Output
                  </h4>
                  {testResults.length > 0 && (
                    <div className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {testResults.filter(r => r.passed).length}/{testResults.length} tests passed
                    </div>
                  )}
                </div>
                <div className={`flex-1 p-3 overflow-auto font-mono text-sm whitespace-pre-wrap ${
                  isDarkMode 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-50 text-gray-900'
                }`}>
                  {output || 'Output will appear here...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;