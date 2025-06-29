import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Users, 
  Star, 
  Play, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  Code,
  Target,
  Lightbulb,
  MessageSquare,
  Award,
  BarChart3,
  FileText,
  ArrowLeft
} from 'lucide-react';
import CodeEditor from './CodeEditor';
import Logo from './Logo';
import { useTheme } from './ThemeProvider';

interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  company: string[];
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  timeComplexity: string;
  spaceComplexity: string;
  testCases: {
    input: string;
    output: string;
  }[];
  hints: string[];
  starterCode: string;
  acceptanceRate: number;
  frequency: number;
  tags: string[];
}

interface ProblemsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProblemsModal: React.FC<ProblemsModalProps> = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'discussion' | 'solutions'>('description');

  const problems: Problem[] = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      company: ["Google", "Amazon", "Microsoft", "Facebook", "Apple"],
      description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]"
        },
        {
          input: "nums = [3,3], target = 6",
          output: "[0,1]"
        }
      ],
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹",
        "-10⁹ ≤ target ≤ 10⁹",
        "Only one valid answer exists."
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      testCases: [
        { input: "[2,7,11,15], 9", output: "[0,1]" },
        { input: "[3,2,4], 6", output: "[1,2]" },
        { input: "[3,3], 6", output: "[0,1]" }
      ],
      hints: [
        "A really brute force way would be to search for all possible pairs of numbers but that would be too slow.",
        "Again, the best way to maintain a mapping of each element in the array to its index would be a hash table.",
        "The best time complexity that we can achieve is O(n) where n is the number of elements in the array."
      ],
      starterCode: `import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test case 1
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] result1 = solution.twoSum(nums1, target1);
        System.out.println("Result: [" + result1[0] + ", " + result1[1] + "]");
        
        // Test case 2
        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        int[] result2 = solution.twoSum(nums2, target2);
        System.out.println("Result: [" + result2[0] + ", " + result2[1] + "]");
    }
}`,
      acceptanceRate: 49.2,
      frequency: 95,
      tags: ["Array", "Hash Table"]
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "Easy",
      company: ["Amazon", "Microsoft", "Apple", "Google", "Facebook"],
      description: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
      examples: [
        {
          input: "head = [1,2,3,4,5]",
          output: "[5,4,3,2,1]"
        },
        {
          input: "head = [1,2]",
          output: "[2,1]"
        },
        {
          input: "head = []",
          output: "[]"
        }
      ],
      constraints: [
        "The number of nodes in the list is the range [0, 5000].",
        "-5000 ≤ Node.val ≤ 5000"
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      testCases: [
        { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
        { input: "[1,2]", output: "[2,1]" },
        { input: "[]", output: "[]" }
      ],
      hints: [
        "A linked list can be reversed either iteratively or recursively.",
        "Could you implement both?"
      ],
      starterCode: `class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode reverseList(ListNode head) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 74.3,
      frequency: 88,
      tags: ["Linked List", "Recursion"]
    },
    {
      id: 3,
      title: "Valid Parentheses",
      difficulty: "Easy",
      company: ["Amazon", "Google", "Microsoft", "Facebook", "Bloomberg"],
      description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
      examples: [
        {
          input: 's = "()"',
          output: "true"
        },
        {
          input: 's = "()[]{}"',
          output: "true"
        },
        {
          input: 's = "(]"',
          output: "false"
        }
      ],
      constraints: [
        "1 ≤ s.length ≤ 10⁴",
        "s consists of parentheses only '()[]{}'."
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      testCases: [
        { input: '"()"', output: "true" },
        { input: '"()[]{}"', output: "true" },
        { input: '"(]"', output: "false" }
      ],
      hints: [
        "Use a stack of characters.",
        "When you encounter an opening bracket, push it to the top of the stack.",
        "When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false."
      ],
      starterCode: `import java.util.*;

class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 40.8,
      frequency: 82,
      tags: ["String", "Stack"]
    },
    {
      id: 4,
      title: "Maximum Subarray",
      difficulty: "Medium",
      company: ["Amazon", "Microsoft", "Google", "Apple", "Netflix"],
      description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
      examples: [
        {
          input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          output: "6",
          explanation: "The subarray [4,-1,2,1] has the largest sum 6."
        },
        {
          input: "nums = [1]",
          output: "1",
          explanation: "The subarray [1] has the largest sum 1."
        },
        {
          input: "nums = [5,4,-1,7,8]",
          output: "23",
          explanation: "The subarray [5,4,-1,7,8] has the largest sum 23."
        }
      ],
      constraints: [
        "1 ≤ nums.length ≤ 10⁵",
        "-10⁴ ≤ nums[i] ≤ 10⁴"
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      testCases: [
        { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
        { input: "[1]", output: "1" },
        { input: "[5,4,-1,7,8]", output: "23" }
      ],
      hints: [
        "Try using Kadane's algorithm.",
        "If you were to fix the right endpoint of the subarray, how would you find the optimal left endpoint?"
      ],
      starterCode: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 50.1,
      frequency: 79,
      tags: ["Array", "Dynamic Programming", "Divide and Conquer"]
    },
    {
      id: 5,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Easy",
      company: ["Facebook", "Amazon", "Microsoft", "Google", "Apple"],
      description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.`,
      examples: [
        {
          input: "root = [1,null,2,3]",
          output: "[1,3,2]"
        },
        {
          input: "root = []",
          output: "[]"
        },
        {
          input: "root = [1]",
          output: "[1]"
        }
      ],
      constraints: [
        "The number of nodes in the tree is in the range [0, 100].",
        "-100 ≤ Node.val ≤ 100"
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      testCases: [
        { input: "[1,null,2,3]", output: "[1,3,2]" },
        { input: "[]", output: "[]" },
        { input: "[1]", output: "[1]" }
      ],
      hints: [
        "Can you solve it without recursion?",
        "Try using a stack to simulate the recursion."
      ],
      starterCode: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 74.3,
      frequency: 76,
      tags: ["Stack", "Tree", "Depth-First Search", "Binary Tree"]
    },
    {
      id: 6,
      title: "LRU Cache",
      difficulty: "Medium",
      company: ["Amazon", "Microsoft", "Google", "Facebook", "Apple"],
      description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.`,
      examples: [
        {
          input: `["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]`,
          output: `[null, null, null, 1, null, -1, null, -1, 3, 4]`,
          explanation: `LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4`
        }
      ],
      constraints: [
        "1 ≤ capacity ≤ 3000",
        "0 ≤ key ≤ 10⁴",
        "0 ≤ value ≤ 10⁵",
        "At most 2 × 10⁵ calls will be made to get and put."
      ],
      timeComplexity: "O(1)",
      spaceComplexity: "O(capacity)",
      testCases: [
        { input: "capacity=2, operations=[put(1,1), put(2,2), get(1), put(3,3), get(2)]", output: "[null, null, 1, null, -1]" }
      ],
      hints: [
        "The problem can be solved with a hashmap that keeps track of the keys and its values in the double linked list.",
        "One trick is to use a dummy head and dummy tail to mark the boundary, so that we don't need to check the NULL node during the update."
      ],
      starterCode: `import java.util.*;

class LRUCache {
    
    public LRUCache(int capacity) {
        // Initialize your data structure here
        
    }
    
    public int get(int key) {
        // Write your solution here
        
    }
    
    public void put(int key, int value) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 41.8,
      frequency: 73,
      tags: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: 7,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      company: ["Amazon", "Microsoft", "Apple", "Google", "Facebook"],
      description: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
      examples: [
        {
          input: "list1 = [1,2,4], list2 = [1,3,4]",
          output: "[1,1,2,3,4,4]"
        },
        {
          input: "list1 = [], list2 = []",
          output: "[]"
        },
        {
          input: "list1 = [], list2 = [0]",
          output: "[0]"
        }
      ],
      constraints: [
        "The number of nodes in both lists is in the range [0, 50].",
        "-100 ≤ Node.val ≤ 100",
        "Both list1 and list2 are sorted in non-decreasing order."
      ],
      timeComplexity: "O(n + m)",
      spaceComplexity: "O(1)",
      testCases: [
        { input: "[1,2,4], [1,3,4]", output: "[1,1,2,3,4,4]" },
        { input: "[], []", output: "[]" },
        { input: "[], [0]", output: "[0]" }
      ],
      hints: [
        "Start with a dummy node to simplify edge cases.",
        "Use two pointers to traverse both lists simultaneously."
      ],
      starterCode: `class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 62.4,
      frequency: 70,
      tags: ["Linked List", "Recursion"]
    },
    {
      id: 8,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      company: ["Amazon", "Microsoft", "Google", "Apple", "Facebook"],
      description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
      examples: [
        {
          input: "prices = [7,1,5,3,6,4]",
          output: "5",
          explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
        },
        {
          input: "prices = [7,6,4,3,1]",
          output: "0",
          explanation: "In this case, no transactions are done and the max profit = 0."
        }
      ],
      constraints: [
        "1 ≤ prices.length ≤ 10⁵",
        "0 ≤ prices[i] ≤ 10⁴"
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      testCases: [
        { input: "[7,1,5,3,6,4]", output: "5" },
        { input: "[7,6,4,3,1]", output: "0" }
      ],
      hints: [
        "Think about it as finding the maximum difference between two elements where the larger element appears after the smaller element.",
        "Keep track of the minimum price seen so far and the maximum profit."
      ],
      starterCode: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 54.7,
      frequency: 68,
      tags: ["Array", "Dynamic Programming"]
    },
    {
      id: 9,
      title: "Valid Anagram",
      difficulty: "Easy",
      company: ["Amazon", "Microsoft", "Google", "Facebook", "Apple"],
      description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
      examples: [
        {
          input: 's = "anagram", t = "nagaram"',
          output: "true"
        },
        {
          input: 's = "rat", t = "car"',
          output: "false"
        }
      ],
      constraints: [
        "1 ≤ s.length, t.length ≤ 5 × 10⁴",
        "s and t consist of lowercase English letters."
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      testCases: [
        { input: '"anagram", "nagaram"', output: "true" },
        { input: '"rat", "car"', output: "false" }
      ],
      hints: [
        "An anagram is produced by rearranging the letters of s into t.",
        "Therefore, if t is an anagram of s, sorting both strings will result in two identical strings.",
        "Furthermore, if s and t have different lengths, t must not be an anagram of s."
      ],
      starterCode: `import java.util.*;

class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 63.2,
      frequency: 65,
      tags: ["Hash Table", "String", "Sorting"]
    },
    {
      id: 10,
      title: "Climbing Stairs",
      difficulty: "Easy",
      company: ["Amazon", "Google", "Apple", "Adobe", "Microsoft"],
      description: `You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
      examples: [
        {
          input: "n = 2",
          output: "2",
          explanation: "There are two ways to climb to the top: 1. 1 step + 1 step, 2. 2 steps"
        },
        {
          input: "n = 3",
          output: "3",
          explanation: "There are three ways to climb to the top: 1. 1 step + 1 step + 1 step, 2. 1 step + 2 steps, 3. 2 steps + 1 step"
        }
      ],
      constraints: [
        "1 ≤ n ≤ 45"
      ],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      testCases: [
        { input: "2", output: "2" },
        { input: "3", output: "3" },
        { input: "4", output: "5" }
      ],
      hints: [
        "To reach nth step, what could have been your previous steps? (Think about the step sizes)",
        "You are climbing a staircase. It takes n steps to reach to the top.",
        "Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?"
      ],
      starterCode: `class Solution {
    public int climbStairs(int n) {
        // Write your solution here
        
    }
}`,
      acceptanceRate: 51.3,
      frequency: 62,
      tags: ["Math", "Dynamic Programming", "Memoization"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return isDarkMode ? 'text-green-400 bg-green-500/20 border-green-400/30' : 'text-green-600 bg-green-500/10 border-green-400/20';
      case 'Medium': return isDarkMode ? 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30' : 'text-yellow-600 bg-yellow-500/10 border-yellow-400/20';
      case 'Hard': return isDarkMode ? 'text-red-400 bg-red-500/20 border-red-400/30' : 'text-red-600 bg-red-500/10 border-red-400/20';
      default: return isDarkMode ? 'text-gray-400 bg-gray-500/20 border-gray-400/30' : 'text-gray-600 bg-gray-500/10 border-gray-400/20';
    }
  };

  const openCodeEditor = (problem: Problem) => {
    setSelectedProblem(problem);
    setShowCodeEditor(true);
  };

  if (!isOpen) return null;

  if (showCodeEditor) {
    return (
      <CodeEditor
        isOpen={showCodeEditor}
        onClose={() => {
          setShowCodeEditor(false);
          setSelectedProblem(null);
        }}
        initialProblem={selectedProblem}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className={`h-full w-full flex ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        {/* Problems List */}
        <div className={`w-1/2 border-r flex flex-col ${
          isDarkMode ? 'border-gray-700' : 'border-gray-300'
        }`}>
          {/* Header */}
          <div className={`border-b px-6 py-4 flex items-center justify-between ${
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
                <h2 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  FAANG Interview Problems
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Top 10 most frequently asked Java coding questions
                </p>
              </div>
            </div>
          </div>

          {/* Problems List */}
          <div className="flex-1 overflow-auto p-4 space-y-3">
            {problems.map((problem) => (
              <div
                key={problem.id}
                onClick={() => setSelectedProblem(problem)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedProblem?.id === problem.id
                    ? isDarkMode 
                      ? 'bg-blue-600/20 border-blue-400/50'
                      : 'bg-blue-500/10 border-blue-400/30'
                    : isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-gray-600'
                      : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font-medium text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {problem.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                
                <div className={`flex items-center space-x-4 text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{problem.frequency}% frequency</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>{problem.acceptanceRate}% accepted</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {problem.company.slice(0, 3).map((comp, idx) => (
                    <span key={idx} className={`px-2 py-1 rounded text-xs border ${
                      isDarkMode 
                        ? 'bg-purple-500/20 text-purple-300 border-purple-400/30'
                        : 'bg-purple-500/10 text-purple-600 border-purple-400/20'
                    }`}>
                      {comp}
                    </span>
                  ))}
                  {problem.company.length > 3 && (
                    <span className={`px-2 py-1 rounded text-xs border ${
                      isDarkMode 
                        ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                        : 'bg-gray-200/50 text-gray-700 border-gray-400/30'
                    }`}>
                      +{problem.company.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1">
                  {problem.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2 py-1 rounded text-xs border ${
                      isDarkMode 
                        ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                        : 'bg-gray-200/50 text-gray-700 border-gray-400/30'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Details */}
        <div className="w-1/2 flex flex-col">
          {selectedProblem ? (
            <>
              {/* Problem Header */}
              <div className={`border-b px-6 py-4 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-300'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h2 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedProblem.title}
                  </h2>
                  <button
                    onClick={() => openCodeEditor(selectedProblem)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center space-x-2 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    <span>Start Coding</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`px-2 py-1 rounded font-medium border ${getDifficultyColor(selectedProblem.difficulty)}`}>
                    {selectedProblem.difficulty}
                  </span>
                  <div className={`flex items-center space-x-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{selectedProblem.frequency}% frequency</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <CheckCircle className="w-4 h-4" />
                    <span>{selectedProblem.acceptanceRate}% accepted</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 mt-4">
                  {[
                    { id: 'description', label: 'Description', icon: FileText },
                    { id: 'discussion', label: 'Discussion', icon: MessageSquare },
                    { id: 'solutions', label: 'Solutions', icon: Award }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : isDarkMode 
                            ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Problem Content */}
              <div className="flex-1 overflow-auto p-6">
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className={`font-semibold text-lg mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Problem Description
                      </h3>
                      <div className={`leading-relaxed whitespace-pre-line ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {selectedProblem.description}
                      </div>
                    </div>

                    {/* Examples */}
                    <div>
                      <h3 className={`font-semibold text-lg mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Examples
                      </h3>
                      <div className="space-y-4">
                        {selectedProblem.examples.map((example, idx) => (
                          <div key={idx} className={`rounded-lg p-4 border ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-700' 
                              : 'bg-gray-50 border-gray-300'
                          }`}>
                            <div className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Example {idx + 1}:
                            </div>
                            <div className="space-y-2">
                              <div>
                                <span className="text-blue-400 font-medium">Input: </span>
                                <span className={`font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {example.input}
                                </span>
                              </div>
                              <div>
                                <span className="text-green-400 font-medium">Output: </span>
                                <span className={`font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {example.output}
                                </span>
                              </div>
                              {example.explanation && (
                                <div>
                                  <span className="text-yellow-400 font-medium">Explanation: </span>
                                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    {example.explanation}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Constraints */}
                    <div>
                      <h3 className={`font-semibold text-lg mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Constraints
                      </h3>
                      <ul className="space-y-1">
                        {selectedProblem.constraints.map((constraint, idx) => (
                          <li key={idx} className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-blue-400 mr-2">•</span>
                            <span className="font-mono text-sm">{constraint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Complexity */}
                    <div>
                      <h3 className={`font-semibold text-lg mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Expected Complexity
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className={`rounded-lg p-4 border ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-gray-50 border-gray-300'
                        }`}>
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400 font-medium">Time Complexity</span>
                          </div>
                          <span className={`font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {selectedProblem.timeComplexity}
                          </span>
                        </div>
                        <div className={`rounded-lg p-4 border ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-gray-50 border-gray-300'
                        }`}>
                          <div className="flex items-center space-x-2 mb-2">
                            <BarChart3 className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-medium">Space Complexity</span>
                          </div>
                          <span className={`font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {selectedProblem.spaceComplexity}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hints */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Hints
                        </h3>
                        <button
                          onClick={() => setShowHints(!showHints)}
                          className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                          <Lightbulb className="w-4 h-4" />
                          <span>{showHints ? 'Hide' : 'Show'} Hints</span>
                        </button>
                      </div>
                      {showHints && (
                        <div className="space-y-2">
                          {selectedProblem.hints.map((hint, idx) => (
                            <div key={idx} className={`rounded-lg p-3 border ${
                              isDarkMode 
                                ? 'bg-yellow-500/10 border-yellow-400/30' 
                                : 'bg-yellow-500/5 border-yellow-400/20'
                            }`}>
                              <div className="flex items-start space-x-2">
                                <span className="text-yellow-400 font-medium text-sm">Hint {idx + 1}:</span>
                                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {hint}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'discussion' && (
                  <div className="text-center py-12">
                    <MessageSquare className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <h3 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Discussion Coming Soon
                    </h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Join the community discussion about this problem.
                    </p>
                  </div>
                )}

                {activeTab === 'solutions' && (
                  <div className="text-center py-12">
                    <Award className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <h3 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Solutions Coming Soon
                    </h3>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      View optimal solutions and explanations.
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Target className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                <h3 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Select a Problem
                </h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Choose a problem from the list to view details and start coding.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemsModal;