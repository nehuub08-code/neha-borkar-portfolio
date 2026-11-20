/**
 * GITHUB REST API SERVICE
 * Connects to public GitHub API with smart caching and rate-limit fallbacks.
 */

const GitHubService = {
  CACHE_PREFIX: 'gh_cache_',
  CACHE_EXPIRY_MS: 30 * 60 * 1000, // 30 minutes

  // Verified default fallback metrics when offline or rate-limited
  fallbackData: {
    'nehuub08-code/q-core': {
      stargazers_count: 0,
      forks_count: 0,
      language: 'JavaScript / React',
      updated_at: '2025-10-15T00:00:00Z',
      html_url: 'https://github.com/nehuub08-code/q-core'
    },
    'nehuub08-code/WhatsAI': {
      stargazers_count: 0,
      forks_count: 0,
      language: 'Python / FastAPI',
      updated_at: '2025-11-01T00:00:00Z',
      html_url: 'https://github.com/nehuub08-code/WhatsAI'
    },
    'user/nehuub08-code': {
      public_repos: 10,
      followers: 1,
      following: 2
    }
  },

  async fetchRepoStats(repoFullName) {
    const cacheKey = this.CACHE_PREFIX + repoFullName;
    
    // Check local cache
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < this.CACHE_EXPIRY_MS) {
          return parsed.data;
        }
      }
    } catch (e) {
      console.warn('Local cache read error:', e);
    }

    // Attempt live fetch
    try {
      const response = await fetch(`https://api.github.com/repos/${repoFullName}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API returned status ${response.status}`);
      }

      const data = await response.json();
      const result = {
        stargazers_count: data.stargazers_count ?? 0,
        forks_count: data.forks_count ?? 0,
        language: data.language || 'Code',
        updated_at: data.updated_at,
        html_url: data.html_url
      };

      try {
        localStorage.setItem(cacheKey, JSON.stringify({
          timestamp: Date.now(),
          data: result
        }));
      } catch (e) {
        // quota exceeded or private mode
      }

      return result;
    } catch (err) {
      console.warn(`Could not fetch live GitHub data for ${repoFullName}, using cached fallback:`, err);
      return this.fallbackData[repoFullName] || {
        stargazers_count: 0,
        forks_count: 0,
        language: 'Software',
        updated_at: new Date().toISOString()
      };
    }
  },

  async fetchUserProfile(username) {
    const cacheKey = this.CACHE_PREFIX + 'user_' + username;

    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < this.CACHE_EXPIRY_MS) {
          return parsed.data;
        }
      }
    } catch (e) {}

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User fetch failed');
      const data = await response.json();
      const result = {
        public_repos: data.public_repos,
        followers: data.followers,
        avatar_url: data.avatar_url
      };
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data: result }));
      } catch (e) {}
      return result;
    } catch (err) {
      return this.fallbackData['user/' + username] || { public_repos: 10, followers: 0 };
    }
  },

  formatDate(isoDateString) {
    if (!isoDateString) return 'Recently';
    try {
      const d = new Date(isoDateString);
      return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch (e) {
      return 'Recently';
    }
  }
};

window.GitHubService = GitHubService;

