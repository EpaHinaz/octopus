// Toast notification
function showNotification(msg, isError = false) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.background = isError ? '#c62828' : '#2c3e2f';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// History functions
function saveAttempt(storyId, storyTitle, score, totalQuestions) {
  const history = JSON.parse(localStorage.getItem('readingHistory') || '[]');
  history.unshift({
    date: new Date().toLocaleString(),
    storyId,
    storyTitle,
    score,
    totalQuestions
  });
  // Keep last 50 attempts
  localStorage.setItem('readingHistory', JSON.stringify(history.slice(0, 50)));
}

function getHistory() {
  return JSON.parse(localStorage.getItem('readingHistory') || '[]');
}

// Best stars per story
function getBestStars() {
  return JSON.parse(localStorage.getItem('bestStars') || '{}');
}

function setBestStars(storyId, stars) {
  const best = getBestStars();
  if (!best[storyId] || stars > best[storyId]) {
    best[storyId] = stars;
    localStorage.setItem('bestStars', JSON.stringify(best));
    return true;
  }
  return false;
}

// Reset all progress
function resetAllProgress() {
  if (confirm('Reset all stars and history? This cannot be undone.')) {
    localStorage.removeItem('readingHistory');
    localStorage.removeItem('bestStars');
    showNotification('All progress reset!');
    if (window.location.pathname.includes('history.html')) location.reload();
    else if (window.location.pathname.includes('index.html')) window.location.reload();
  }
}
