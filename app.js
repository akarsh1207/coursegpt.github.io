
// Course configuration and data
const courseData = {
  math101: {
    id: 'math101',
    name: 'Math101',
    title: 'Math101 - Basic Mathematics',
    description: 'Algebra and Calculus',
    color: '#3B82F6',
    personality: 'formal and precise',
    worksheetType: 'mathematical',
    files: [],
    worksheetCount: 0,
    problemTypes: ['Algebra', 'Calculus', 'Functions', 'Equations'],
    templates: [
      'Solve for x: 2x + 5 = 13',
      'Find the derivative of f(x) = x² + 3x - 2',
      'Evaluate the integral ∫(2x + 1)dx',
      'Graph the function f(x) = x² - 4x + 3'
    ]
  },
  history207: {
    id: 'history207',
    name: 'History207',
    title: 'History207 - World History',
    description: 'Modern Era',
    color: '#10B981',
    personality: 'engaging and narrative',
    worksheetType: 'essay',
    files: [],
    worksheetCount: 0,
    problemTypes: ['Essay Questions', 'Timeline Analysis', 'Cause and Effect', 'Compare and Contrast'],
    templates: [
      'Analyze the causes of World War I',
      'Compare the industrial revolutions in Britain and Germany',
      'Discuss the impact of colonialism on African societies',
      'Evaluate the effects of the French Revolution'
    ]
  },
  math203: {
    id: 'math203',
    name: 'Math203',
    title: 'Math203 - Advanced Mathematics',
    description: 'Linear Algebra',
    color: '#8B5CF6',
    personality: 'analytical and detailed',
    worksheetType: 'mathematical',
    files: [],
    worksheetCount: 0,
    problemTypes: ['Matrix Operations', 'Vector Spaces', 'Linear Transformations', 'Eigenvalues'],
    templates: [
      'Find the eigenvalues of matrix A = [[2,1],[1,2]]',
      'Solve the system Ax = b using Gaussian elimination',
      'Determine if vectors are linearly independent',
      'Find the basis for the column space of matrix A'
    ]
  },
  physics150: {
    id: 'physics150',
    name: 'Physics150',
    title: 'Physics150 - General Physics',
    description: 'Mechanics and Thermodynamics',
    color: '#F59E0B',
    personality: 'practical and scientific',
    worksheetType: 'physics',
    files: [],
    worksheetCount: 0,
    problemTypes: ['Kinematics', 'Forces', 'Energy', 'Thermodynamics'],
    templates: [
      'A ball is thrown horizontally at 20 m/s from 45m height',
      'Calculate the work done by friction on a sliding block',
      'Find the efficiency of a heat engine',
      'Analyze projectile motion with air resistance'
    ]
  },
  cs201: {
    id: 'cs201',
    name: 'CS201',
    title: 'CS201 - Computer Science',
    description: 'Data Structures',
    color: '#EF4444',
    personality: 'logical and technical',
    worksheetType: 'algorithmic',
    files: [],
    worksheetCount: 0,
    problemTypes: ['Data Structures', 'Algorithms', 'Complexity Analysis', 'Implementation'],
    templates: [
      'Implement a binary search tree with insert and delete',
      'Find the shortest path in a weighted graph',
      'Analyze the time complexity of merge sort',
      'Design a hash table with collision resolution'
    ]
  }
};

// Worksheet generation templates
const worksheetGenerators = {
  mathematical: {
    generateWorksheet: (course, problem, context) => {
      return {
        title: `${course.name} - Mathematical Solution Worksheet`,
        sections: [
          {
            title: 'Problem Statement',
            content: `<div class="worksheet-content-block">
              <strong>Problem:</strong><br>
              ${problem}
            </div>`
          },
          {
            title: 'Given Information',
            content: generateGivenInfo(problem, course)
          },
          {
            title: 'Solution Steps',
            content: generateMathSolution(problem, course, context)
          },
          {
            title: 'Final Answer',
            content: generateFinalAnswer(problem, course)
          },
          {
            title: 'Verification',
            content: generateVerification(problem, course)
          },
          {
            title: 'Related Concepts',
            content: generateRelatedConcepts(problem, course)
          },
          {
            title: 'Practice Problems',
            content: generatePracticeProblems(problem, course)
          }
        ]
      };
    }
  },

  essay: {
    generateWorksheet: (course, problem, context) => {
      return {
        title: `${course.name} - Essay Analysis Worksheet`,
        sections: [
          {
            title: 'Question Analysis',
            content: `<div class="worksheet-content-block">
              <strong>Essay Question:</strong><br>
              ${problem}
            </div>`
          },
          {
            title: 'Historical Context',
            content: generateHistoricalContext(problem, course, context)
          },
          {
            title: 'Thesis Statement',
            content: generateThesis(problem, course)
          },
          {
            title: 'Main Arguments',
            content: generateMainArguments(problem, course, context)
          },
          {
            title: 'Supporting Evidence',
            content: generateEvidence(problem, course, context)
          },
          {
            title: 'Conclusion',
            content: generateConclusion(problem, course)
          },
          {
            title: 'Additional Sources',
            content: generateAdditionalSources(problem, course)
          }
        ]
      };
    }
  },

  physics: {
    generateWorksheet: (course, problem, context) => {
      return {
        title: `${course.name} - Physics Solution Worksheet`,
        sections: [
          {
            title: 'Problem Setup',
            content: `<div class="worksheet-content-block">
              <strong>Physics Problem:</strong><br>
              ${problem}
            </div>`
          },
          {
            title: 'Given & Find',
            content: generatePhysicsGivenFind(problem, course)
          },
          {
            title: 'Physics Principles',
            content: generatePhysicsPrinciples(problem, course, context)
          },
          {
            title: 'Solution Process',
            content: generatePhysicsSolution(problem, course, context)
          },
          {
            title: 'Final Answer with Units',
            content: generatePhysicsAnswer(problem, course)
          },
          {
            title: 'Conceptual Understanding',
            content: generatePhysicsConcepts(problem, course)
          },
          {
            title: 'Similar Problems',
            content: generateSimilarProblems(problem, course)
          }
        ]
      };
    }
  },

  algorithmic: {
    generateWorksheet: (course, problem, context) => {
      return {
        title: `${course.name} - Algorithm Analysis Worksheet`,
        sections: [
          {
            title: 'Problem Description',
            content: `<div class="worksheet-content-block">
              <strong>CS Problem:</strong><br>
              ${problem}
            </div>`
          },
          {
            title: 'Algorithm Design',
            content: generateAlgorithmDesign(problem, course, context)
          },
          {
            title: 'Implementation',
            content: generateImplementation(problem, course, context)
          },
          {
            title: 'Complexity Analysis',
            content: generateComplexityAnalysis(problem, course)
          },
          {
            title: 'Test Cases',
            content: generateTestCases(problem, course)
          },
          {
            title: 'Optimization',
            content: generateOptimization(problem, course)
          },
          {
            title: 'Related Algorithms',
            content: generateRelatedAlgorithms(problem, course)
          }
        ]
      };
    }
  }
};

// Helper functions for worksheet generation
function generateGivenInfo(problem, course) {
  const givenItems = [
    'Equation or expression to solve',
    'Domain and range considerations',
    'Any constraints or conditions'
  ];

  return `<div class="worksheet-subsection">
    <ul>
      ${givenItems.map(item => `<li>${item}</li>`).join('')}
    </ul>
  </div>`;
}

function generateMathSolution(problem, course, context) {
  const steps = [
    {
      number: 1,
      title: 'Identify the problem type and approach',
      content: `This appears to be a ${course.problemTypes[Math.floor(Math.random() * course.problemTypes.length)].toLowerCase()} problem. We'll use standard algebraic manipulation.`
    },
    {
      number: 2,
      title: 'Apply the appropriate method',
      content: `<div class="math-expression">Step-by-step calculation:<br>Given equation: ${problem}<br>Rearranging terms...</div>`
    },
    {
      number: 3,
      title: 'Solve systematically',
      content: 'Following the order of operations and algebraic principles from your course materials.'
    },
    {
      number: 4,
      title: 'Check the solution',
      content: 'Substitute back into the original equation to verify our answer.'
    }
  ];

  return steps.map(step => `
    <div class="solution-step">
      <div class="step-number">Step ${step.number}: ${step.title}</div>
      <div class="step-content">${step.content}</div>
    </div>
  `).join('');
}

function generateFinalAnswer(problem, course) {
  const sampleAnswers = {
    math101: ['x = 4', 'f'(x) = 2x + 3', '∫(2x + 1)dx = x² + x + C'],
    math203: ['λ₁ = 3, λ₂ = 1', 'x = [2, -1, 3]ᵀ', 'Vectors are linearly independent']
  };

  const answers = sampleAnswers[course.id] || ['Solution completed'];
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  return `<div class="final-answer">
    <strong>Final Answer:</strong> ${randomAnswer}
  </div>`;
}

function generateVerification(problem, course) {
  return `<div class="worksheet-content-block">
    <strong>Verification Process:</strong>
    <ul>
      <li>Substitute the solution back into the original equation</li>
      <li>Check that all mathematical operations are valid</li>
      <li>Verify the answer makes sense in the context of the problem</li>
    </ul>
    <div class="reference-note">
      Reference: Course materials on verification methods (${course.files.length > 0 ? course.files[0].name : 'textbook chapter 3'})
    </div>
  </div>`;
}

function generateRelatedConcepts(problem, course) {
  const concepts = {
    math101: ['Algebraic manipulation', 'Function analysis', 'Derivative rules', 'Integration techniques'],
    math203: ['Matrix operations', 'Vector spaces', 'Linear independence', 'Eigenvalue properties'],
    history207: ['Historical causation', 'Primary sources', 'Historiography', 'Comparative analysis'],
    physics150: ['Newton's laws', 'Energy conservation', 'Momentum', 'Thermodynamic processes'],
    cs201: ['Data structure properties', 'Algorithm complexity', 'Search algorithms', 'Graph theory']
  };

  const courseConcepts = concepts[course.id] || ['General problem solving'];

  return `<div class="worksheet-subsection">
    <ul>
      ${courseConcepts.slice(0, 4).map(concept => 
        `<li><strong>${concept}:</strong> Applied in this problem to achieve the solution</li>`
      ).join('')}
    </ul>
  </div>`;
}

function generatePracticeProblems(problem, course) {
  const practiceProblems = course.templates.slice(0, 3);

  return practiceProblems.map((practice, index) => `
    <div class="practice-problem">
      <strong>Practice Problem ${index + 1}:</strong><br>
      ${practice}
      <div class="reference-note">
        Hint: Use similar methods as demonstrated in the main solution above
      </div>
    </div>
  `).join('');
}

function generateHistoricalContext(problem, course, context) {
  return `<div class="worksheet-content-block">
    <strong>Historical Context:</strong>
    <p>This question relates to the broader historical period covered in our course materials. 
    Key background information includes the social, political, and economic conditions of the time.</p>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Time Period:</div>
      <p>Modern Era (19th-20th century) - as covered in your uploaded materials</p>
    </div>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Key Factors:</div>
      <ul>
        <li>Political developments and power structures</li>
        <li>Economic systems and trade relationships</li>
        <li>Social movements and cultural changes</li>
        <li>Technological innovations and their impacts</li>
      </ul>
    </div>
  </div>`;
}

function generateThesis(problem, course) {
  return `<div class="worksheet-content-block">
    <strong>Suggested Thesis Statement:</strong>
    <p>Based on the analysis of primary and secondary sources from your course materials, 
    this essay will argue that [main argument based on the question] through examination 
    of three key areas: [factor 1], [factor 2], and [factor 3].</p>

    <div class="reference-note">
      Note: Customize this thesis based on your specific argument and evidence from uploaded materials
    </div>
  </div>`;
}

function generateMainArguments(problem, course, context) {
  const arguments = [
    'Economic factors and their long-term consequences',
    'Political decisions and leadership roles',
    'Social movements and popular participation',
    'International relations and global context'
  ];

  return `<div class="worksheet-subsection">
    ${arguments.slice(0, 3).map((arg, index) => `
      <div class="worksheet-subsection">
        <div class="worksheet-subsection-title">Argument ${index + 1}: ${arg}</div>
        <p>Develop this argument using evidence from your course readings and uploaded materials. 
        Consider both primary sources and historical interpretations.</p>
      </div>
    `).join('')}
  </div>`;
}

function generateEvidence(problem, course, context) {
  return `<div class="worksheet-content-block">
    <strong>Types of Evidence to Include:</strong>
    <ul>
      <li><strong>Primary Sources:</strong> Documents, letters, speeches from the time period</li>
      <li><strong>Statistical Data:</strong> Economic figures, population data, voting records</li>
      <li><strong>Secondary Sources:</strong> Historical analyses from your course materials</li>
      <li><strong>Comparative Examples:</strong> Similar events or patterns in other contexts</li>
    </ul>

    <div class="reference-note">
      Reference your uploaded course materials for specific examples and citations
    </div>
  </div>`;
}

function generateConclusion(problem, course) {
  return `<div class="worksheet-content-block">
    <strong>Conclusion Framework:</strong>
    <p>Synthesize your main arguments and restate your thesis in light of the evidence presented. 
    Consider the broader historical significance and any ongoing debates among historians.</p>

    <ul>
      <li>Restate thesis with nuanced understanding</li>
      <li>Summarize key evidence and arguments</li>
      <li>Address counterarguments or alternative interpretations</li>
      <li>Discuss historical significance and legacy</li>
    </ul>
  </div>`;
}

function generateAdditionalSources(problem, course) {
  return `<div class="worksheet-subsection">
    <strong>Recommended Additional Reading:</strong>
    <ul>
      <li>Course textbook chapters related to this topic</li>
      <li>Primary source collections from your uploaded materials</li>
      <li>Academic articles on historiographical debates</li>
      <li>Comparative studies from similar historical contexts</li>
    </ul>
  </div>`;
}

// Physics helper functions
function generatePhysicsGivenFind(problem, course) {
  return `<div class="worksheet-content-block">
    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Given:</div>
      <ul>
        <li>Initial conditions and parameters</li>
        <li>Physical constants and values</li>
        <li>System constraints and assumptions</li>
      </ul>
    </div>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Find:</div>
      <p>The specific quantity requested in the problem statement</p>
    </div>
  </div>`;
}

function generatePhysicsPrinciples(problem, course, context) {
  const principles = [
    'Conservation of Energy',
    'Newton's Laws of Motion',
    'Conservation of Momentum',
    'Thermodynamic Laws'
  ];

  return `<div class="worksheet-subsection">
    <div class="worksheet-subsection-title">Relevant Physics Principles:</div>
    <ul>
      ${principles.slice(0, 2).map(principle => 
        `<li><strong>${principle}:</strong> Applied to solve this type of problem</li>`
      ).join('')}
    </ul>

    <div class="reference-note">
      Reference: Physics principles from your uploaded lab materials and textbook
    </div>
  </div>`;
}

function generatePhysicsSolution(problem, course, context) {
  const steps = [
    'Set up coordinate system and identify forces',
    'Apply relevant physics principles and equations',
    'Substitute known values and solve algebraically',
    'Calculate numerical result with proper units'
  ];

  return steps.map((step, index) => `
    <div class="solution-step">
      <div class="step-number">Step ${index + 1}:</div>
      <div class="step-content">
        ${step}
        <div class="math-expression">
          [Mathematical work would be shown here with equations and calculations]
        </div>
      </div>
    </div>
  `).join('');
}

function generatePhysicsAnswer(problem, course) {
  const sampleAnswers = [
    'v = 25.2 m/s at 30° below horizontal',
    'W = 1250 J',
    'η = 0.35 or 35%',
    'F = 450 N in the positive x-direction'
  ];

  const randomAnswer = sampleAnswers[Math.floor(Math.random() * sampleAnswers.length)];

  return `<div class="final-answer">
    <strong>Final Answer:</strong> ${randomAnswer}
  </div>`;
}

function generatePhysicsConcepts(problem, course) {
  return `<div class="worksheet-content-block">
    <strong>Conceptual Understanding:</strong>
    <p>This problem demonstrates key physics concepts including the relationship between 
    different physical quantities and how fundamental principles govern natural phenomena.</p>

    <ul>
      <li>Physical interpretation of the mathematical solution</li>
      <li>Real-world applications of these principles</li>
      <li>Limitations and assumptions in our model</li>
    </ul>
  </div>`;
}

function generateSimilarProblems(problem, course) {
  return course.templates.slice(0, 2).map((template, index) => `
    <div class="practice-problem">
      <strong>Similar Problem ${index + 1}:</strong><br>
      ${template}
      <div class="reference-note">
        Use the same approach and principles demonstrated above
      </div>
    </div>
  `).join('');
}

// Computer Science helper functions
function generateAlgorithmDesign(problem, course, context) {
  return `<div class="worksheet-content-block">
    <strong>Algorithm Design Approach:</strong>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Problem Analysis:</div>
      <ul>
        <li>Input specifications and constraints</li>
        <li>Expected output format</li>
        <li>Performance requirements</li>
      </ul>
    </div>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Algorithm Strategy:</div>
      <p>Based on the problem type, we'll use a systematic approach involving 
      appropriate data structures and algorithmic techniques covered in your course materials.</p>
    </div>
  </div>`;
}

function generateImplementation(problem, course, context) {
  return `<div class="worksheet-content-block">
    <strong>Implementation Outline:</strong>

    <div class="math-expression">
// Pseudocode structure
function solveProblem(input):
    // Step 1: Initialize data structures
    // Step 2: Process input according to algorithm
    // Step 3: Apply core logic
    // Step 4: Return result

// Actual implementation would follow
// the patterns from your course examples
    </div>

    <div class="reference-note">
      Reference implementation patterns from your uploaded programming assignments
    </div>
  </div>`;
}

function generateComplexityAnalysis(problem, course) {
  return `<div class="worksheet-content-block">
    <strong>Time and Space Complexity:</strong>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Time Complexity:</div>
      <p>O(n log n) - Based on the dominant operations in our algorithm</p>
    </div>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Space Complexity:</div>
      <p>O(n) - For auxiliary data structures needed during execution</p>
    </div>

    <div class="worksheet-subsection">
      <div class="worksheet-subsection-title">Justification:</div>
      <p>Analysis of each step shows the bottleneck operations and memory usage patterns.</p>
    </div>
  </div>`;
}

function generateTestCases(problem, course) {
  const testCases = [
    'Empty input/base case',
    'Single element input',
    'Normal case with multiple elements',
    'Edge case with maximum constraints'
  ];

  return `<div class="worksheet-subsection">
    <strong>Test Cases:</strong>
    ${testCases.map((testCase, index) => `
      <div class="practice-problem">
        <strong>Test ${index + 1}:</strong> ${testCase}<br>
        Expected behavior: [Description of expected output]
      </div>
    `).join('')}
  </div>`;
}

function generateOptimization(problem, course) {
  return `<div class="worksheet-content-block">
    <strong>Potential Optimizations:</strong>
    <ul>
      <li>Alternative data structures for better performance</li>
      <li>Algorithmic improvements for edge cases</li>
      <li>Memory usage optimization techniques</li>
      <li>Parallel processing opportunities</li>
    </ul>
  </div>`;
}

function generateRelatedAlgorithms(problem, course) {
  const algorithms = [
    'Binary Search variations',
    'Graph traversal algorithms',
    'Dynamic programming approaches',
    'Greedy algorithm techniques'
  ];

  return `<div class="worksheet-subsection">
    <strong>Related Algorithms:</strong>
    <ul>
      ${algorithms.slice(0, 3).map(alg => 
        `<li><strong>${alg}:</strong> Share similar principles or applications</li>`
      ).join('')}
    </ul>
  </div>`;
}

// Global state
let currentCourse = 'math101';
let isGenerating = false;

// DOM elements
let elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initializeEventListeners();
  switchCourse('math101');
});

function initializeElements() {
  elements = {
    tabs: document.querySelectorAll('.tab'),
    uploadArea: document.getElementById('uploadArea'),
    uploadButton: document.getElementById('uploadButton'),
    fileInput: document.getElementById('fileInput'),
    uploadProgress: document.getElementById('uploadProgress'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    uploadedFiles: document.getElementById('uploadedFiles'),
    problemTemplates: document.getElementById('problemTemplates'),
    templateButtons: document.getElementById('templateButtons'),
    problemInput: document.getElementById('problemInput'),
    generateButton: document.getElementById('generateButton'),
    courseInfo: document.getElementById('courseInfo'),
    materialsList: document.getElementById('materialsList'),
    worksheetContent: document.getElementById('worksheetContent'),
    worksheetActions: document.getElementById('worksheetActions'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    loadingSteps: document.getElementById('loadingSteps'),
    printButton: document.getElementById('printButton'),
    downloadButton: document.getElementById('downloadButton'),
    newWorksheetButton: document.getElementById('newWorksheetButton')
  };
}

function initializeEventListeners() {
  // Tab switching
  elements.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const courseId = tab.dataset.course;
      switchCourse(courseId);
    });
  });

  // File upload
  elements.uploadButton.addEventListener('click', () => {
    elements.fileInput.click();
  });

  elements.fileInput.addEventListener('change', handleFileSelection);

  // Drag and drop
  elements.uploadArea.addEventListener('dragover', handleDragOver);
  elements.uploadArea.addEventListener('dragleave', handleDragLeave);
  elements.uploadArea.addEventListener('drop', handleFileDrop);

  // Generate worksheet
  elements.generateButton.addEventListener('click', generateWorksheet);

  // Worksheet actions
  elements.printButton?.addEventListener('click', printWorksheet);
  elements.downloadButton?.addEventListener('click', downloadWorksheet);
  elements.newWorksheetButton?.addEventListener('click', createNewWorksheet);
}

function switchCourse(courseId) {
  currentCourse = courseId;
  const course = courseData[courseId];

  // Update active tab
  elements.tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.course === courseId) {
      tab.classList.add('active');
      tab.style.borderColor = course.color;
    }
  });

  // Update course info
  updateCourseInfo(course);

  // Update problem templates
  updateProblemTemplates(course);

  // Update accent colors
  document.documentElement.style.setProperty('--current-course-color', course.color);
}

function updateCourseInfo(course) {
  const courseDescription = elements.courseInfo.querySelector('.course-description');
  if (courseDescription) {
    courseDescription.innerHTML = `
      <h4>${course.title}</h4>
      <p>${course.description}</p>
      <p><strong>Personality:</strong> ${course.personality}</p>
      <p><strong>Files uploaded:</strong> ${course.files.length}</p>
    `;
  }
}

function updateProblemTemplates(course) {
  elements.templateButtons.innerHTML = '';
  course.templates.forEach(template => {
    const button = document.createElement('button');
    button.className = 'template-button';
    button.textContent = template.substring(0, 30) + (template.length > 30 ? '...' : '');
    button.title = template;
    button.addEventListener('click', () => {
      elements.problemInput.value = template;
    });
    elements.templateButtons.appendChild(button);
  });
}

function handleDragOver(e) {
  e.preventDefault();
  elements.uploadArea.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.preventDefault();
  elements.uploadArea.classList.remove('drag-over');
}

function handleFileDrop(e) {
  e.preventDefault();
  elements.uploadArea.classList.remove('drag-over');
  const files = Array.from(e.dataTransfer.files);
  processFiles(files);
}

function handleFileSelection(e) {
  const files = Array.from(e.target.files);
  processFiles(files);
}

function processFiles(files) {
  const validFiles = files.filter(file => {
    const isValidType = file.type === 'application/pdf' || 
                       file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    return isValidType && file.size <= 10 * 1024 * 1024; // 10MB limit
  });

  if (validFiles.length === 0) {
    alert('Please select valid PDF or DOCX files (max 10MB each).');
    return;
  }

  validFiles.forEach(file => {
    simulateFileUpload(file);
  });
}

function simulateFileUpload(file) {
  const course = courseData[currentCourse];

  // Show progress
  elements.uploadProgress.style.display = 'block';
  elements.progressText.textContent = `Uploading ${file.name}...`;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // Add file to course
      const fileObj = {
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type,
        uploadedAt: new Date()
      };

      course.files.push(fileObj);

      // Update UI
      addFileToList(fileObj);
      updateCourseInfo(course);

      // Hide progress
      setTimeout(() => {
        elements.uploadProgress.style.display = 'none';
        elements.progressFill.style.width = '0%';
      }, 500);
    }

    elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
  }, 100);
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function addFileToList(file) {
  const fileItem = document.createElement('div');
  fileItem.className = 'file-item';
  fileItem.innerHTML = `
    <div class="file-icon">${file.type.includes('pdf') ? '📄' : '📝'}</div>
    <div class="file-info">
      <div class="file-name">${file.name}</div>
      <div class="file-size">${file.size}</div>
    </div>
    <div class="file-status">✓ Ready</div>
  `;
  elements.uploadedFiles.appendChild(fileItem);
}

function generateWorksheet() {
  if (isGenerating) return;

  const problem = elements.problemInput.value.trim();
  if (!problem) {
    alert('Please enter a problem or question first.');
    return;
  }

  isGenerating = true;
  elements.generateButton.disabled = true;
  elements.generateButton.textContent = 'Generating...';

  // Show loading overlay
  elements.loadingOverlay.style.display = 'flex';

  // Animate loading steps
  animateLoadingSteps();

  // Simulate worksheet generation
  setTimeout(() => {
    const course = courseData[currentCourse];
    const context = {
      files: course.files,
      courseInfo: course
    };

    const worksheetGenerator = worksheetGenerators[course.worksheetType];
    const worksheet = worksheetGenerator.generateWorksheet(course, problem, context);

    displayWorksheet(worksheet, course);

    // Update course worksheet count
    course.worksheetCount++;

    // Hide loading and reset button
    elements.loadingOverlay.style.display = 'none';
    elements.generateButton.disabled = false;
    elements.generateButton.textContent = '🔬 Generate Solution Worksheet';
    elements.worksheetActions.style.display = 'flex';

    isGenerating = false;
  }, 4000);
}

function animateLoadingSteps() {
  const steps = elements.loadingSteps.querySelectorAll('.step');
  let currentStep = 0;

  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      steps[currentStep].classList.add('active');
      currentStep++;
    } else {
      clearInterval(interval);
    }
  }, 800);
}

function displayWorksheet(worksheet, course) {
  const currentDate = new Date().toLocaleDateString();
  const worksheetNumber = course.worksheetCount + 1;

  elements.worksheetContent.innerHTML = `
    <div class="worksheet">
      <div class="worksheet-course-header">
        <div class="worksheet-course-title">${worksheet.title}</div>
        <div class="worksheet-meta">
          <span>Date: ${currentDate}</span>
          <span>Worksheet #${worksheetNumber}</span>
        </div>
      </div>

      ${worksheet.sections.map(section => `
        <div class="worksheet-section">
          <h3 class="worksheet-section-title">${section.title}</h3>
          <div class="worksheet-section-content">
            ${section.content}
          </div>
        </div>
      `).join('')}

      <div class="worksheet-section">
        <div class="reference-note" style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
          Generated by Course GPT Worksheet Generator | ${course.title}
        </div>
      </div>
    </div>
  `;
}

function printWorksheet() {
  window.print();
}

function downloadWorksheet() {
  // Simulate download
  alert('Worksheet download functionality would be implemented here. In a real implementation, this would generate a PDF or Word document.');
}

function createNewWorksheet() {
  elements.problemInput.value = '';
  elements.worksheetContent.innerHTML = `
    <div class="welcome-message">
      <div class="welcome-icon">📝</div>
      <h4>Ready for a New Worksheet!</h4>
      <p>Enter your next problem above to generate another solution worksheet.</p>
    </div>
  `;
  elements.worksheetActions.style.display = 'none';
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export for debugging
window.courseData = courseData;
window.switchCourse = switchCourse;
