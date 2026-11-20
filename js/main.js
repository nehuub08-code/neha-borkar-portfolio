/**
 * MAIN INTERACTIVITY & SECTION RENDERER - NEHA BORKAR PORTFOLIO
 * High-performance, vanilla JavaScript rendering data-driven components.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('PORTFOLIO_DATA not loaded!');
    return;
  }

  // 1. Preloader Removal
  const preloader = document.getElementById('preloader');
  const loaderProgress = document.querySelector('.loader-progress');
  if (loaderProgress) {
    let p = 0;
    const interval = setInterval(() => {
      p += 25;
      loaderProgress.style.width = `${Math.min(p, 100)}%`;
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (preloader) preloader.classList.add('loaded');
        }, 200);
      }
    }, 20);
  } else if (preloader) {
    preloader.classList.add('loaded');
  }

  // 2. Dynamic Copyright Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Navbar Sticky & Active Link Spy
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar && navbar.classList.add('scrolled');
    } else {
      navbar && navbar.classList.remove('scrolled');
    }

    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-links');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('mobile-open');
      mobileToggle.innerHTML = isOpen ? `<i class="fa-solid fa-xmark"></i>` : `<i class="fa-solid fa-bars"></i>`;
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      });
    });
  }

  // 5. Dynamic Typing Effect in Hero
  const typingTarget = document.getElementById('typing-text');
  if (typingTarget) {
    const words = [
      'Computer Engineering Undergraduate',
      'AI Engineering Aspirant',
      'FastAPI Backend Developer',
      'Generative AI Explorer'
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 80;

    function runTyping() {
      const currentWord = words[wordIdx];
      if (isDeleting) {
        typingTarget.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
        speed = 35;
      } else {
        typingTarget.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
        speed = 85;
      }

      if (!isDeleting && charIdx === currentWord.length) {
        speed = 1800; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 400; // Pause before new word
      }

      setTimeout(runTyping, speed);
    }

    runTyping();
  }

  // 6. Render Academic Performance Cards (Distinct SGPA and CGPA)
  const resultsContainer = document.getElementById('academic-results-container');
  if (resultsContainer && data.academicResults) {
    const res = data.academicResults;
    resultsContainer.innerHTML = `
      <div class="result-card-prominent">
        <div class="result-metric-display">
          <span class="result-metric-number">${res.sgpaSem1.value}</span>
          <span class="result-metric-scale">/ ${res.sgpaSem1.scale}</span>
        </div>
        <div class="result-details-content">
          <span class="result-badge">${res.sgpaSem1.badge}</span>
          <h3 class="result-title">${res.sgpaSem1.label}</h3>
          <p class="result-desc">${res.sgpaSem1.description}</p>
        </div>
      </div>

      <div class="result-card-prominent">
        <div class="result-metric-display">
          <span class="result-metric-number">${res.cgpaFirstYear.value}</span>
          <span class="result-metric-scale">/ ${res.cgpaFirstYear.scale}</span>
        </div>
        <div class="result-details-content">
          <span class="result-badge">${res.cgpaFirstYear.badge}</span>
          <h3 class="result-title">${res.cgpaFirstYear.label}</h3>
          <p class="result-desc">${res.cgpaFirstYear.description}</p>
        </div>
      </div>
    `;
  }

  // 7. Render Education Timeline
  const timelineContainer = document.getElementById('education-timeline-container');
  if (timelineContainer && data.education && data.education.milestones) {
    timelineContainer.innerHTML = '';
    data.education.milestones.forEach(m => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      
      const tagsHtml = m.tags
        .map(t => `<span class="timeline-tag-pill">${t}</span>`)
        .join('');

      item.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-year">${m.year}</span>
            <span class="timeline-status">${m.status}</span>
          </div>
          <h4>${m.title}</h4>
          <p class="timeline-institution"><i class="fa-solid fa-building-columns"></i> ${m.institution}</p>
          <p class="timeline-body">${m.details}</p>
          <div class="timeline-tags">
            ${tagsHtml}
          </div>
        </div>
      `;
      timelineContainer.appendChild(item);
    });
  }

  // 8. Render Categorized Skills
  const skillsCategoriesWrapper = document.getElementById('skills-categories-wrapper');
  const skillsTabsContainer = document.getElementById('skills-tabs');

  if (skillsCategoriesWrapper && data.skills && data.skills.categories) {
    function renderSkills(filterCategoryId = 'all') {
      skillsCategoriesWrapper.innerHTML = '';

      const categoriesToRender = filterCategoryId === 'all'
        ? data.skills.categories
        : data.skills.categories.filter(c => c.id === filterCategoryId);

      categoriesToRender.forEach(cat => {
        const block = document.createElement('div');
        block.className = 'skill-category-block';
        block.id = `skill-cat-${cat.id}`;

        const itemsHtml = cat.items.map(item => {
          let profClass = 'applied';
          const profLower = item.proficiency.toLowerCase();
          if (profLower.includes('basic')) profClass = 'basic';
          if (profLower.includes('core')) profClass = 'core';

          return `
            <div class="skill-item-card">
              <i class="${item.icon} skill-item-icon"></i>
              <div class="skill-item-info">
                <div class="skill-item-top">
                  <span class="skill-item-name">${item.name}</span>
                  <span class="proficiency-pill ${profClass}">${item.proficiency}</span>
                </div>
                <p class="skill-item-note">${item.note}</p>
              </div>
            </div>
          `;
        }).join('');

        block.innerHTML = `
          <div class="category-header">
            <div class="category-title-group">
              <div class="category-icon"><i class="${cat.icon}"></i></div>
              <div>
                <h3 class="category-title">${cat.name}</h3>
                <span class="category-desc">${cat.description}</span>
              </div>
            </div>
            <span class="timeline-tag-pill">${cat.items.length} Skills</span>
          </div>
          <div class="skill-badges-grid">
            ${itemsHtml}
          </div>
        `;

        skillsCategoriesWrapper.appendChild(block);
      });
    }

    // Attach Tab Filter handlers
    if (skillsTabsContainer) {
      skillsTabsContainer.querySelectorAll('.skills-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          skillsTabsContainer.querySelectorAll('.skills-tab-btn').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          const filterId = e.currentTarget.getAttribute('data-category');
          renderSkills(filterId);
        });
      });
    }

    renderSkills('all');
  }

  // 9. Render Achievements Dynamic Empty State
  const achievementsContainer = document.getElementById('achievements-container');
  if (achievementsContainer && data.achievements) {
    if (data.achievements.records.length === 0) {
      achievementsContainer.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon"><i class="fa-solid fa-trophy"></i></div>
          <h3>${data.achievements.emptyStateMessage}</h3>
          <p>${data.achievements.emptyStateSubtitle}</p>
          <div class="empty-state-pill">
            <i class="fa-solid fa-clock-rotate-left"></i> Dynamic Section Ready for Verified Records
          </div>
        </div>
      `;
    }
  }

  // 10. Render Certificates Dynamic Empty State
  const certificatesContainer = document.getElementById('certificates-container');
  if (certificatesContainer && data.certificates) {
    if (data.certificates.records.length === 0) {
      certificatesContainer.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon"><i class="fa-solid fa-certificate"></i></div>
          <h3>${data.certificates.emptyStateMessage}</h3>
          <p>${data.certificates.emptyStateSubtitle}</p>
          <div class="empty-state-pill">
            <i class="fa-solid fa-shield-halved"></i> Verification Architecture Ready for Future Credentials
          </div>
        </div>
      `;
    }
  }

  // 11. Render Coding Profiles
  const profilesContainer = document.getElementById('profiles-container');
  if (profilesContainer && data.codingProfiles) {
    profilesContainer.innerHTML = '';
    data.codingProfiles.forEach(p => {
      const card = document.createElement('div');
      card.className = 'profile-card-box';
      const isGitHub = p.platform.toLowerCase() === 'github';

      card.innerHTML = `
        <div class="profile-card-header">
          <div class="profile-platform-icon ${isGitHub ? 'github' : 'linkedin'}">
            <i class="${p.icon}"></i>
          </div>
          <div class="profile-platform-info">
            <h3>${p.platform}</h3>
            <span class="profile-platform-handle">@${p.handle}</span>
          </div>
        </div>
        <p class="profile-card-desc">${p.description}</p>
        <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
          <span class="timeline-tag-pill" id="${isGitHub ? 'github-repos-pill' : 'linkedin-pill'}">
            ${isGitHub ? 'Fetching Repos...' : p.tagline}
          </span>
          <a href="${p.profileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            Visit Profile <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
          </a>
        </div>
      `;

      profilesContainer.appendChild(card);

      // Async fetch GitHub profile info
      if (isGitHub && window.GitHubService) {
        window.GitHubService.fetchUserProfile(p.handle).then(user => {
          const pill = document.getElementById('github-repos-pill');
          if (pill && user.public_repos !== undefined) {
            pill.innerHTML = `<i class="fa-solid fa-code-branch"></i> ${user.public_repos} Public Repositories`;
          }
        });
      }
    });
  }
});

