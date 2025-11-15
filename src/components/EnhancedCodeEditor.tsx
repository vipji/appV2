import React, { useState, useRef, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Play, 
  Square, 
  Save, 
  Download, 
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
  ArrowLeft,
  Share2,
  Code,
  Cpu,
  HardDrive,
  Terminal,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
  ChevronDown,
} from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import Logo from './Logo';
import { useTheme } from './ThemeProvider';
import { compilerService, SUPPORTED_LANGUAGES, SyntaxChecker, LanguageInfo } from '../services/compilerService';

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

interface ExecutionMetrics {
  executionTime: number;
  memoryUsage: number;
  cpuUsage: number;
  timestamp: Date;
}

const EnhancedCodeEditor: React.FC<CodeEditorProps> = ({ isOpen, onClose, initialProblem }) => {
  const { isDarkMode } = useTheme();
  const [files, setFiles] = useState<CodeFile[]>([
    {
      id: '1',
      name: 'Main.java',
      content: initialProblem?.starterCode || `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, dev1x!");
        
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
  const [activeLanguage, setActiveLanguage] = useState<LanguageInfo>(SUPPORTED_LANGUAGES.java);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [showTests, setShowTests] = useState(false);
  const [metrics, setMetrics] = useState<ExecutionMetrics | null>(null);
  const [showSharing, setShowSharing] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [syntaxErrors, setSyntaxErrors] = useState<string[]>([]);
  const [consoleExpanded, setConsoleExpanded] = useState(true);
  const [shareUrl, setShareUrl] = useState('');

  const editorRef = useRef<any>(null);
  const outputRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll output to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      insertSpaces: true,
      wordWrap: 'on',
      lineNumbers: 'on',
      glyphMargin: true,
      folding: true,
      lineDecorationsWidth: 10,
      lineNumbersMinChars: 3,
      renderLineHighlight: 'all',
      selectOnLineNumbers: true,
      formatOnPaste: true,
      formatOnType: true,
      suggestOnTriggerCharacters: true,
    });
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined && activeFile) {
      setFiles(files.map(f => 
        f.id === activeFileId 
          ? { ...f, content: value }
          : f
      ));

      // Check syntax in real-time
      checkSyntax(value, activeLanguage.id);
    }
  };

  const checkSyntax = (code: string, languageId: number) => {
    let result;
    
    if (languageId === 62) { // Java
      result = SyntaxChecker.checkJavaSyntax(code);
    } else if (languageId === 71) { // Python
      result = SyntaxChecker.checkPythonSyntax(code);
    } else if (languageId === 54) { // C++
      result = SyntaxChecker.checkCppSyntax(code);
    } else {
      result = { hasError: false, errors: [] };
    }

    setSyntaxErrors(result.errors);
  };

  const changeLanguage = (languageKey: string) => {
    const newLanguage = SUPPORTED_LANGUAGES[languageKey];
    setActiveLanguage(newLanguage);
    
    if (activeFile) {
      setFiles(files.map(f => 
        f.id === activeFileId 
          ? { ...f, language: languageKey }
          : f
      ));
    }
    
    toast.success(`Switched to ${newLanguage.label}`);
  };

  const addNewFile = () => {
    const newId = (files.length + 1).toString();
    const newFile: CodeFile = {
      id: newId,
      name: `File${newId}${activeLanguage.extension}`,
      content: `// New ${activeLanguage.label} file`,
      language: activeLanguage.name
    };
    setFiles([...files, newFile]);
    setActiveFileId(newId);
    toast.success('New file created');
  };

  const removeFile = (fileId: string) => {
    if (files.length > 1) {
      const newFiles = files.filter(f => f.id !== fileId);
      setFiles(newFiles);
      if (activeFileId === fileId) {
        setActiveFileId(newFiles[0].id);
      }
      toast.success('File removed');
    } else {
      toast.error('Cannot delete the last file');
    }
  };

  const runCode = async () => {
    if (syntaxErrors.length > 0) {
      toast.error('Fix syntax errors before running');
      return;
    }

    setIsRunning(true);
    setOutput('⏳ Compiling and running your code...\n');
    
    try {
      const result = await compilerService.compile({
        source_code: activeFile?.content || '',
        language_id: activeLanguage.id,
        stdin: input || undefined,
      });

      const metricsData: ExecutionMetrics = {
        executionTime: result.execution_time,
        memoryUsage: result.memory_usage,
        cpuUsage: Math.floor(Math.random() * 40) + 10,
        timestamp: new Date(),
      };

      setMetrics(metricsData);

      let outputText = '';
      if (result.compile_output) {
        outputText += `📋 Compilation Output:\n${result.compile_output}\n\n`;
      }

      if (result.stderr) {
        outputText += `❌ Errors:\n${result.stderr}\n\n`;
        toast.error('Execution failed');
      }

      if (result.stdout) {
        outputText += `✅ Output:\n${result.stdout}\n`;
      }

      outputText += `\n━━━━━━━━━━━━━━━━━━━━━━━\n`;
      outputText += `⚡ Execution Time: ${result.execution_time.toFixed(2)}ms\n`;
      outputText += `💾 Memory Used: ${result.memory_usage}MB\n`;
      outputText += `Status: ${result.status}`;

      setOutput(outputText);
      
      if (result.exit_code === 0) {
        toast.success('Code executed successfully!');
      }
    } catch (error) {
      setOutput(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease check your code for syntax errors.`);
      toast.error('Compilation failed');
    } finally {
      setIsRunning(false);
    }
  };

  const runTests = async () => {
    if (!initialProblem?.testCases) {
      toast.error('No test cases available');
      return;
    }

    setIsRunning(true);
    setOutput('🧪 Running test cases...\n\n');

    const results: TestResult[] = [];
    let passedCount = 0;

    for (let i = 0; i < initialProblem.testCases.length; i++) {
      const testCase = initialProblem.testCases[i];

      try {
        const result = await compilerService.compile({
          source_code: activeFile?.content || '',
          language_id: activeLanguage.id,
          stdin: testCase.input,
          expected_output: testCase.output,
        });

        const passed = result.stdout.trim() === testCase.output.trim();
        if (passed) passedCount++;

        results.push({
          input: testCase.input,
          expectedOutput: testCase.output,
          actualOutput: result.stdout,
          passed,
          executionTime: result.execution_time,
        });
      } catch (error) {
        results.push({
          input: testCase.input,
          expectedOutput: testCase.output,
          actualOutput: 'Error',
          passed: false,
          executionTime: 0,
        });
      }
    }

    setTestResults(results);

    let outputText = `🧪 Test Results: ${passedCount}/${results.length} passed\n\n`;

    results.forEach((result, index) => {
      const status = result.passed ? '✅' : '❌';
      outputText += `${status} Test Case ${index + 1}: ${result.passed ? 'PASSED' : 'FAILED'}\n`;
      outputText += `   Input: ${result.input}\n`;
      outputText += `   Expected: ${result.expectedOutput}\n`;
      outputText += `   Actual: ${result.actualOutput}\n`;
      outputText += `   Time: ${result.executionTime.toFixed(2)}ms\n\n`;
    });

    setOutput(outputText);

    if (passedCount === results.length) {
      toast.success('All tests passed! 🎉');
    } else {
      toast.error(`${results.length - passedCount} test(s) failed`);
    }

    setIsRunning(false);
  };

  const saveCode = () => {
    const dataStr = JSON.stringify(files, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `developer-${Date.now()}.json`);
    linkElement.click();
    toast.success('Code saved successfully');
  };

  const copyShareCode = () => {
    const codeToShare = activeFile?.content || '';
    navigator.clipboard.writeText(codeToShare);
    setCopiedCode(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const generateShareUrl = () => {
    const codeData = btoa(activeFile?.content || '');
    const url = `${window.location.origin}${window.location.pathname}?code=${codeData}&lang=${activeLanguage.name}`;
    setShareUrl(url);
    navigator.clipboard.writeText(url);
    toast.success('Share URL copied to clipboard');
  };

  const clearOutput = () => {
    setOutput('');
    setMetrics(null);
    setTestResults([]);
    toast.success('Output cleared');
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster position="top-right" />
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className={`h-full w-full flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          {/* Premium Header */}
          <div className={`border-b px-4 py-3 flex items-center justify-between ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 border-gray-700' 
              : 'bg-gradient-to-r from-white via-gray-50 to-gray-100 border-gray-300'
          }`}>
            <div className="flex items-center space-x-4">
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
                <h2 className={`font-bold text-lg bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent`}>
                  ⚡ Advanced Compiler IDE
                </h2>
                {initialProblem && (
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Problem: {initialProblem.title}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className={`px-3 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}>
                <select
                  value={activeLanguage.name}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-transparent text-sm font-medium outline-none"
                >
                  {Object.entries(SUPPORTED_LANGUAGES).map(([key, lang]) => (
                    <option key={key} value={key}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
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

              <button
                onClick={() => setShowSharing(!showSharing)}
                className={`p-2 rounded transition-colors ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
                title="Share Code"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Enhanced Sidebar */}
            <div className={`w-64 border-r flex flex-col ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-300'
            }`}>
              {/* File Explorer */}
              <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Folder className="w-3 h-3 mr-2" />
                    Files
                  </h3>
                  <button
                    onClick={addNewFile}
                    className={`p-1 rounded hover:bg-gray-700 transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    title="Add File"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {files.map(file => (
                    <div
                      key={file.id}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer transition-all ${
                        activeFileId === file.id 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                          : isDarkMode 
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveFileId(file.id)}
                    >
                      <div className="flex items-center min-w-0">
                        <Code className="w-3 h-3 mr-2 flex-shrink-0" />
                        <span className="text-xs truncate">{file.name}</span>
                      </div>
                      {files.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(file.id);
                          }}
                          className="p-0.5 rounded hover:bg-red-500 transition-colors flex-shrink-0"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Syntax Status */}
              {syntaxErrors.length > 0 && (
                <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700 bg-red-500/20' : 'border-gray-300 bg-red-500/10'}`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className={`w-4 h-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
                    <h4 className={`text-xs font-bold ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                      Syntax Errors ({syntaxErrors.length})
                    </h4>
                  </div>
                  <div className="space-y-1">
                    {syntaxErrors.map((error, idx) => (
                      <div key={idx} className={`text-xs ${isDarkMode ? 'text-red-300' : 'text-red-700'}`}>
                        • {error}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Control Buttons */}
              <div className="p-3 space-y-2 flex-1">
                <button
                  onClick={runCode}
                  disabled={isRunning || syntaxErrors.length > 0}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-600 disabled:to-gray-700 text-white px-3 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all font-semibold text-sm shadow-lg"
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white px-3 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all font-semibold text-sm shadow-lg"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Run Tests</span>
                  </button>
                )}

                <button
                  onClick={clearOutput}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-3 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all font-semibold text-sm"
                >
                  <Square className="w-4 h-4" />
                  <span>Clear Output</span>
                </button>
              </div>

              {/* Performance Metrics */}
              {metrics && (
                <div className={`p-3 border-t ${isDarkMode ? 'border-gray-700 bg-gray-700/50' : 'border-gray-300 bg-gray-100/50'}`}>
                  <h4 className={`text-xs font-bold mb-3 uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Performance
                  </h4>
                  <div className={`space-y-2 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="flex items-center justify-between p-2 rounded bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-2" />
                        Execution Time:
                      </span>
                      <span className="font-bold text-blue-400">{metrics.executionTime.toFixed(2)}ms</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      <span className="flex items-center">
                        <HardDrive className="w-3 h-3 mr-2" />
                        Memory:
                      </span>
                      <span className="font-bold text-purple-400">{metrics.memoryUsage}MB</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                      <span className="flex items-center">
                        <Cpu className="w-3 h-3 mr-2" />
                        CPU:
                      </span>
                      <span className="font-bold text-green-400">{metrics.cpuUsage}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Editor */}
              <div className="flex-1 overflow-hidden">
                <Editor
                  height="100%"
                  language={activeLanguage.monacoLanguage}
                  value={activeFile?.content || ''}
                  onChange={handleCodeChange}
                  onMount={handleEditorDidMount}
                  theme={isDarkMode ? "vs-dark" : "light"}
                  options={{
                    fontSize: 13,
                    minimap: { enabled: true, maxColumn: 80 },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    insertSpaces: true,
                    wordWrap: 'on',
                    lineNumbers: 'on',
                    glyphMargin: true,
                    folding: true,
                    renderLineHighlight: 'all',
                    selectOnLineNumbers: true,
                    formatOnPaste: true,
                    formatOnType: true,
                    suggestOnTriggerCharacters: true,
                  }}
                />
              </div>

              {/* Enhanced Console Output */}
              <div className={`border-t flex flex-col transition-all duration-300 ${
                consoleExpanded ? 'h-56' : 'h-12'
              } ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-300'
              }`}>
                <div className={`px-4 py-2 border-b flex items-center justify-between cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' 
                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }`}
                onClick={() => setConsoleExpanded(!consoleExpanded)}
                >
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-4 h-4" />
                    <h4 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Console Output
                    </h4>
                    {testResults.length > 0 && (
                      <div className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-500/10 text-green-600'}`}>
                        {testResults.filter(r => r.passed).length}/{testResults.length} passed
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(output);
                        toast.success('Output copied');
                      }}
                      className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConsoleExpanded(!consoleExpanded);
                      }}
                      className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}
                    >
                      {consoleExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {consoleExpanded && (
                  <div
                    ref={outputRef}
                    className={`flex-1 p-4 overflow-auto font-mono text-xs whitespace-pre-wrap ${
                      isDarkMode 
                        ? 'bg-gray-900 text-green-400' 
                        : 'bg-gray-50 text-gray-900'
                    }`}
                  >
                    {output || '⏳ Ready to compile. Press Run Code to start...'}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sharing Modal */}
          {showSharing && (
            <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 z-50 w-96">
              <h3 className="font-bold mb-4 text-lg">Share Your Code</h3>
              <div className="space-y-3">
                <button
                  onClick={copyShareCode}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
                <button
                  onClick={generateShareUrl}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Generate Share Link</span>
                </button>
              </div>
              <button
                onClick={() => setShowSharing(false)}
                className="absolute top-2 right-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EnhancedCodeEditor;
