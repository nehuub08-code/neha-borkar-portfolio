/**
 * PORTFOLIO-AWARE AI CHATBOT ENGINE (NIVA)
 * Grounded strictly in verified portfolio data. Provides accurate,
 * hallucination-free answers about Neha Borkar's engineering portfolio.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const launcher = document.getElementById('chatbot-launcher');
  const panel = document.getElementById('chatbot-panel');
  const closeBtn = document.getElementById('chatbot-close');
  const clearBtn = document.getElementById('chatbot-clear');
  const messagesContainer = document.getElementById('chatbot-messages');
  const inputField = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const chipsContainer = document.getElementById('chatbot-chips');

  if (!panel || !messagesContainer) return;

  const data = window.PORTFOLIO_DATA;

  // Toggle Panel
  function toggleChatbot(forceState) {
    const isOpen = panel.classList.contains('open');
    const newState = typeof forceState === 'boolean' ? forceState : !isOpen;
    
    if (newState) {
      panel.classList.add('open');
      inputField && inputField.focus();
    } else {
      panel.classList.remove('open');
    }
  }

  launcher && launcher.addEventListener('click', () => toggleChatbot());
  closeBtn && closeBtn.addEventListener('click', () => toggleChatbot(false));

  // Clear Chat History
  clearBtn && clearBtn.addEventListener('click', () => {
    messagesContainer.innerHTML = '';
    renderWelcomeMessage();
  });

  // Render Bot Message
  function appendBotMessage(htmlContent, actionButtons = []) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble bot';
    
    let content = `<div>${htmlContent}</div>`;
    
    if (actionButtons.length > 0) {
      content += `<div class="chat-action-links">`;
      actionButtons.forEach(btn => {
        if (btn.type === 'scroll') {
          content += `<button class="chat-action-link-btn" onclick="document.querySelector('${btn.target}').scrollIntoView({behavior:'smooth'})"><i class="${btn.icon}"></i> ${btn.label}</button>`;
        } else if (btn.type === 'modal') {
          content += `<button class="chat-action-link-btn" onclick="window.openProjectModalById && window.openProjectModalById('${btn.projectId}')"><i class="${btn.icon}"></i> ${btn.label}</button>`;
        } else if (btn.type === 'link') {
          content += `<a href="${btn.url}" target="_blank" rel="noopener noreferrer" class="chat-action-link-btn"><i class="${btn.icon}"></i> ${btn.label}</a>`;
        }
      });
      content += `</div>`;
    }

    bubble.innerHTML = content;
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Render User Message
  function appendUserMessage(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.textContent = text;
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Render Typing Indicator
  function showTypingIndicator() {
    const typing = document.createElement('div');
    typing.className = 'typing-bubble';
    typing.id = 'chat-typing-indicator';
    typing.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    messagesContainer.appendChild(typing);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return typing;
  }

  function removeTypingIndicator() {
    const typing = document.getElementById('chat-typing-indicator');
    if (typing) typing.remove();
  }

  // Welcome Message
  function renderWelcomeMessage() {
    appendBotMessage(
      `<p>👋 Hello! I am <strong>NIVA</strong>, Neha Borkar's portfolio assistant.</p>
       <p>I can help you explore Neha's <strong>technical skills</strong>, academic results (<strong>9.5 SGPA</strong> &amp; <strong>9.16 CGPA</strong>), featured projects (<strong>Q-CORE</strong> &amp; <strong>WhatsAI</strong>), or assist you in connecting via <strong>WhatsApp</strong> or email.</p>`,
      [
        { type: 'scroll', target: '#projects', icon: 'fa-solid fa-code', label: 'View Projects' },
        { type: 'scroll', target: '#education', icon: 'fa-solid fa-graduation-cap', label: 'Academic Results' },
        { type: 'scroll', target: '#contact', icon: 'fa-solid fa-paper-plane', label: 'Contact Neha' }
      ]
    );
  }

  // Rule-Based Knowledge Engine strictly grounded in PORTFOLIO_DATA
  function generateAnswer(query) {
    const q = query.toLowerCase().trim();

    // 1. Who is Neha / Background / Identity
    if (q.includes('who is') || q.includes('about neha') || q.includes('intro') || q.includes('profile') || q.includes('background') || q.includes('tell me about neha')) {
      return {
        text: `<p><strong>Neha Borkar</strong> is a Computer Engineering undergraduate currently in her <strong>Second Year (Semester 3)</strong> at <strong>DY Patil College of Engineering and Innovation, Varale</strong> (Autonomous Institute affiliated with Savitribai Phule Pune University, Maharashtra).</p>
               <p>Her professional direction centers on <strong>AI Engineering, Software Development, and Computer Engineering</strong>. She specializes in backend systems using <strong>FastAPI</strong>, data structures, and Generative AI application development.</p>`,
        actions: [
          { type: 'scroll', target: '#about', icon: 'fa-solid fa-user', label: 'Read Full Story' },
          { type: 'scroll', target: '#skills', icon: 'fa-solid fa-layer-group', label: 'View Skills' }
        ]
      };
    }

    // 2. Academic Results / CGPA / SGPA
    if (q.includes('cgpa') || q.includes('sgpa') || q.includes('academic') || q.includes('marks') || q.includes('grade') || q.includes('result') || q.includes('score')) {
      return {
        text: `<p>Here are Neha Borkar's <strong>verified academic results</strong>:</p>
               <ul>
                 <li><strong>First Semester SGPA:</strong> 9.5 / 10.0 (Distinction)</li>
                 <li><strong>First Year CGPA:</strong> 9.16 / 10.0 (Academic Honors)</li>
               </ul>
               <p><em>Note: These are two distinct academic measurements from SPPU Autonomous Pattern. Neha is currently in Semester 3 (Second Year).</em></p>`,
        actions: [
          { type: 'scroll', target: '#education', icon: 'fa-solid fa-graduation-cap', label: 'View Education Section' }
        ]
      };
    }

    // 3. Q-CORE Project
    if (q.includes('q-core') || q.includes('qcore') || q.includes('quantum') || q.includes('microprocessor') || q.includes('bloch') || q.includes('architecture assistant')) {
      const qcore = data.projects.find(p => p.id === 'q-core');
      return {
        text: `<p><strong>Q-CORE</strong> is an educational web platform exploring <em>Quantum vs. Classical Microprocessors</em>, developed for the Computer Architecture &amp; Organization curriculum at DY Patil College of Engineering and Innovation.</p>
               <ul>
                 <li><strong>Tech Stack:</strong> React 19, Vite, Three.js (WebGL), Tailwind CSS v4, Recharts</li>
                 <li><strong>Features:</strong> 16:9 Presentation Deck, 3D Morphing Core (Silicon CMOS vs Superconducting QPU), 4 Virtual Laboratories (CPU Execution, Qubit State, Circuit Builder, Dilution Cooling), 3D Bloch Sphere, and Q-TUTOR AI assistant.</li>
               </ul>`,
        actions: [
          { type: 'modal', projectId: 'q-core', icon: 'fa-solid fa-circle-info', label: 'Detailed Breakdown' },
          { type: 'link', url: qcore.liveUrl, icon: 'fa-solid fa-arrow-up-right-from-square', label: 'Open Live Application' },
          { type: 'link', url: qcore.repoUrl, icon: 'fa-brands fa-github', label: 'GitHub Repository' }
        ]
      };
    }

    // 4. WhatsAI Project
    if (q.includes('whatsai') || q.includes('whats-ai') || q.includes('whatsapp') && (q.includes('ai') || q.includes('bot') || q.includes('project') || q.includes('gemini'))) {
      const whatsai = data.projects.find(p => p.id === 'whatsai');
      return {
        text: `<p><strong>WhatsAI</strong> is a commercial full-stack AI WhatsApp assistant platform connecting the <strong>Meta WhatsApp Cloud API</strong> with <strong>Google's Gemini 2.5 Flash API</strong>.</p>
               <ul>
                 <li><strong>Backend:</strong> FastAPI (Python 3.12), SQLAlchemy, JWT auth, PBKDF2/bcrypt hashing, SQLite &amp; PostgreSQL.</li>
                 <li><strong>Frontend:</strong> React 18, Vite, Tailwind CSS, Recharts telemetry.</li>
                 <li><strong>Key Innovation:</strong> Features an in-browser interactive WhatsApp Phone Simulator to test customer conversations and Gemini responses without requiring live webhook tunnels.</li>
               </ul>`,
        actions: [
          { type: 'modal', projectId: 'whatsai', icon: 'fa-solid fa-circle-info', label: 'Detailed Breakdown' },
          { type: 'link', url: whatsai.liveUrl, icon: 'fa-solid fa-arrow-up-right-from-square', label: 'Open Live Demo' },
          { type: 'link', url: whatsai.repoUrl, icon: 'fa-brands fa-github', label: 'GitHub Repository' }
        ]
      };
    }

    // 5. General Projects query
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('build') || q.includes('apps')) {
      return {
        text: `<p>Neha has engineered two flagship production projects:</p>
               <ol style="padding-left: 20px; margin: 8px 0;">
                 <li><strong>Q-CORE:</strong> 3D Interactive Educational Platform for Quantum vs Classical Computer Architecture (React 19, Three.js, Tailwind v4).</li>
                 <li><strong>WhatsAI:</strong> Full-Stack AI WhatsApp Assistant powered by Meta Cloud API and Google Gemini 2.5 Flash (FastAPI, Python, React, SQLAlchemy).</li>
               </ol>`,
        actions: [
          { type: 'scroll', target: '#projects', icon: 'fa-solid fa-code', label: 'Explore Projects Section' }
        ]
      };
    }

    // 6. Skills / Programming Languages / Backend
    if (q.includes('skill') || q.includes('language') || q.includes('python') || q.includes('c++') || q.includes('fastapi') || q.includes('stack') || q.includes('tech') || q.includes('dsa')) {
      return {
        text: `<p>Neha's verified technical matrix includes:</p>
               <ul>
                 <li><strong>Programming:</strong> Python (Basic), C++ (Basic)</li>
                 <li><strong>Backend &amp; APIs:</strong> FastAPI (Core), REST API Development, SQLite, JWT Authentication, Bcrypt Hashing</li>
                 <li><strong>AI &amp; Generative AI:</strong> GenAI Fundamentals, Prompt Engineering, AI Agent Fundamentals, LLM API Integration (Project Exposure with Gemini)</li>
                 <li><strong>Databases:</strong> SQL Fundamentals, SQLite, PostgreSQL (Basic Exposure)</li>
                 <li><strong>Tools:</strong> Git, GitHub, Linux, Bash, venv, pip, pytest, Python Async</li>
                 <li><strong>DSA:</strong> Arrays, Linked Lists, Stack, Queue, Deque, Recursion, Searching, Sorting, Greedy, Backtracking, Branch &amp; Bound, Heuristics</li>
               </ul>`,
        actions: [
          { type: 'scroll', target: '#skills', icon: 'fa-solid fa-layer-group', label: 'Inspect Skills Matrix' }
        ]
      };
    }

    // 7. Education / College / Degree
    if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('sppu') || q.includes('degree') || q.includes('semester') || q.includes('varale') || q.includes('dy patil')) {
      return {
        text: `<p>Neha's educational credentials:</p>
               <ul>
                 <li><strong>Degree:</strong> Bachelor of Technology (B.Tech) in Computer Engineering (2023 - 2027)</li>
                 <li><strong>Current Status:</strong> Second Year, Third Semester (Sem 3)</li>
                 <li><strong>College:</strong> DY Patil College of Engineering and Innovation, Varale (Autonomous Institute)</li>
                 <li><strong>University:</strong> Savitribai Phule Pune University (SPPU), Maharashtra</li>
               </ul>`,
        actions: [
          { type: 'scroll', target: '#education', icon: 'fa-solid fa-graduation-cap', label: 'View Academic Timeline' }
        ]
      };
    }

    // 8. Contact / WhatsApp / Email / Phone
    if (q.includes('contact') || q.includes('whatsapp') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('message') || q.includes('phone') || q.includes('call') || q.includes('number')) {
      return {
        text: `<p>You can connect directly with Neha through:</p>
               <ul>
                 <li><strong>WhatsApp:</strong> +91 9529604668</li>
                 <li><strong>Email:</strong> neha.borkar2408@gmail.com</li>
                 <li><strong>LinkedIn:</strong> linkedin.com/in/neha-borkar-a6a6ba390/</li>
                 <li><strong>GitHub:</strong> github.com/nehuub08-code</li>
               </ul>`,
        actions: [
          { type: 'link', url: data.contact.whatsappUrl, icon: 'fa-brands fa-whatsapp', label: 'Chat on WhatsApp' },
          { type: 'link', url: `mailto:${data.contact.email}`, icon: 'fa-solid fa-envelope', label: 'Send Email' },
          { type: 'scroll', target: '#contact', icon: 'fa-solid fa-paper-plane', label: 'Use Contact Form' }
        ]
      };
    }

    // 9. GitHub / Coding profiles
    if (q.includes('github') || q.includes('linkedin') || q.includes('repo') || q.includes('coding profile')) {
      return {
        text: `<p>Neha's verified profiles:</p>
               <ul>
                 <li><strong>GitHub:</strong> <a href="${data.contact.githubUrl}" target="_blank">github.com/nehuub08-code</a></li>
                 <li><strong>LinkedIn:</strong> <a href="${data.contact.linkedinUrl}" target="_blank">linkedin.com/in/neha-borkar-a6a6ba390/</a></li>
               </ul>
               <p><em>Note: No secondary competitive coding accounts (LeetCode, HackerRank, etc.) are confirmed.</em></p>`,
        actions: [
          { type: 'link', url: data.contact.githubUrl, icon: 'fa-brands fa-github', label: 'Visit GitHub' },
          { type: 'link', url: data.contact.linkedinUrl, icon: 'fa-brands fa-linkedin', label: 'Visit LinkedIn' }
        ]
      };
    }

    // 10. Achievements / Certificates
    if (q.includes('achievement') || q.includes('certificate') || q.includes('award') || q.includes('certification') || q.includes('license')) {
      return {
        text: `<p>In accordance with verified records, official external certifications and competitive achievement records are being prepared for future milestones.</p>
               <p>Both the <strong>Achievements</strong> and <strong>Certificates</strong> sections feature dynamic architectures ready to display accredited milestones as they are earned.</p>`,
        actions: [
          { type: 'scroll', target: '#achievements', icon: 'fa-solid fa-trophy', label: 'View Achievements' },
          { type: 'scroll', target: '#certificates', icon: 'fa-solid fa-certificate', label: 'View Certificates' }
        ]
      };
    }

    // 11. Greetings
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste') || q.includes('good morning') || q.includes('good afternoon')) {
      return {
        text: `<p>Hello! Welcome to Neha Borkar's engineering portfolio. How can I assist you today? You can ask about her <strong>FastAPI projects</strong>, <strong>academic distinction (9.5 SGPA / 9.16 CGPA)</strong>, or how to contact her.</p>`,
        actions: [
          { type: 'scroll', target: '#projects', icon: 'fa-solid fa-code', label: 'Show Projects' },
          { type: 'scroll', target: '#contact', icon: 'fa-solid fa-paper-plane', label: 'Contact Options' }
        ]
      };
    }

    // Default Fallback
    return {
      text: `<p>I am grounded strictly in Neha Borkar's verified academic and project data. I can answer inquiries regarding:</p>
             <ul>
               <li><strong>Who is Neha?</strong> (Education at DY Patil College, SPPU)</li>
               <li><strong>Academic results</strong> (First Sem SGPA 9.5, First Year CGPA 9.16)</li>
               <li><strong>Q-CORE</strong> (3D Quantum vs Classical architecture experience)</li>
               <li><strong>WhatsAI</strong> (FastAPI + Gemini 2.5 Flash WhatsApp Assistant)</li>
               <li><strong>Technical skills</strong> (FastAPI, Python, SQLite, REST APIs, Git)</li>
               <li><strong>Contacting Neha</strong> (WhatsApp +91 9529604668, email)</li>
             </ul>`,
      actions: [
        { type: 'scroll', target: '#projects', icon: 'fa-solid fa-code', label: 'Projects' },
        { type: 'scroll', target: '#contact', icon: 'fa-solid fa-paper-plane', label: 'Contact Neha' }
      ]
    };
  }

  // Handle message dispatch
  function handleSendMessage(text) {
    const query = text || (inputField ? inputField.value.trim() : '');
    if (!query) return;

    if (inputField) inputField.value = '';
    appendUserMessage(query);

    const typing = showTypingIndicator();
    sendBtn && (sendBtn.disabled = true);

    // Realistic typing delay
    setTimeout(() => {
      removeTypingIndicator();
      const response = generateAnswer(query);
      appendBotMessage(response.text, response.actions);
      sendBtn && (sendBtn.disabled = false);
      inputField && inputField.focus();
    }, 450);
  }

  // Events
  sendBtn && sendBtn.addEventListener('click', () => handleSendMessage());
  inputField && inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  });

  // Prompt chips
  if (chipsContainer) {
    chipsContainer.querySelectorAll('.chat-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const query = e.currentTarget.getAttribute('data-query');
        handleSendMessage(query);
      });
    });
  }

  // Initial welcome
  renderWelcomeMessage();
});

