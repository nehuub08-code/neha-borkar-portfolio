/**
 * PROJECT SHOWCASE & MODAL MANAGER
 * Dynamically renders verified projects, integrates GitHub statistics,
 * and manages the deep-dive project detail modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const projectsContainer = document.getElementById('projects-container');
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!projectsContainer || !window.PORTFOLIO_DATA) return;

  const projects = window.PORTFOLIO_DATA.projects;

  // Render Projects
  function renderProjects() {
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.id = `project-${project.id}`;

      // Tech chips HTML
      const techChipsHtml = project.technologies
        .map(t => `<span class="tech-chip">${t}</span>`)
        .join('');

      card.innerHTML = `
        <div class="project-header-bar">
          <div class="project-title-group">
            <span class="project-category-tag">${project.category}</span>
            <h3>${project.title}</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">${project.subtitle}</p>
          </div>
          <span class="project-badge-pill">${project.status}</span>
        </div>

        <div class="project-body-content">
          <p class="project-desc-text">${project.shortDescription}</p>

          <div class="project-tech-chips">
            ${techChipsHtml}
          </div>

          <div class="repo-stats-bar" id="stats-${project.id}">
            <div class="repo-stat-item">
              <i class="fa-solid fa-code"></i>
              <span>Loading repo...</span>
            </div>
          </div>

          <div class="project-actions-row">
            <button class="btn btn-secondary btn-sm btn-open-modal" data-project-id="${project.id}">
              <i class="fa-solid fa-circle-info"></i> View Details
            </button>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <i class="fa-brands fa-github"></i> Repository
            </a>
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);

      // Async load GitHub stats
      if (window.GitHubService && project.githubRepo) {
        window.GitHubService.fetchRepoStats(project.githubRepo).then(stats => {
          const statsEl = document.getElementById(`stats-${project.id}`);
          if (statsEl) {
            statsEl.innerHTML = `
              <div class="repo-stat-item" title="Primary Language">
                <i class="fa-solid fa-code"></i>
                <span>${stats.language}</span>
              </div>
              <div class="repo-stat-item" title="GitHub Stars">
                <i class="fa-regular fa-star"></i>
                <span>${stats.stargazers_count} stars</span>
              </div>
              <div class="repo-stat-item" title="Forks">
                <i class="fa-solid fa-code-fork"></i>
                <span>${stats.forks_count}</span>
              </div>
              <div class="repo-stat-item" title="Last Updated">
                <i class="fa-regular fa-clock"></i>
                <span>${window.GitHubService.formatDate(stats.updated_at)}</span>
              </div>
            `;
          }
        });
      }
    });

    // Attach modal open handlers
    document.querySelectorAll('.btn-open-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pId = e.currentTarget.getAttribute('data-project-id');
        openProjectModal(pId);
      });
    });
  }

  // Open Modal with specific project details
  function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-subtitle').textContent = project.subtitle;
    document.getElementById('modal-overview-text').textContent = project.overview;
    document.getElementById('modal-problem-text').textContent = project.problemStatement;
    document.getElementById('modal-solution-text').textContent = project.solution;

    // Features list
    const featuresListEl = document.getElementById('modal-features-list');
    featuresListEl.innerHTML = project.keyFeatures
      .map(feat => `<li><i class="fa-solid fa-check"></i> <span>${feat}</span></li>`)
      .join('');

    // Tech stack
    const modalTechEl = document.getElementById('modal-tech-chips');
    modalTechEl.innerHTML = project.technologies
      .map(t => `<span class="tech-chip">${t}</span>`)
      .join('');

    // Academic attribution
    const creditsEl = document.getElementById('modal-academic-credits');
    if (creditsEl) {
      creditsEl.textContent = project.academicCredits;
    }

    // Modal action buttons
    const liveBtn = document.getElementById('modal-live-link');
    const repoBtn = document.getElementById('modal-repo-link');
    if (liveBtn) liveBtn.href = project.liveUrl;
    if (repoBtn) repoBtn.href = project.repoUrl;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event Listeners for Modal
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });

  // Global helper for opening modal (accessible by Chatbot)
  window.openProjectModalById = openProjectModal;

  // Initialize
  renderProjects();
});

