// ==========================================================================
// Blood Life Hub - Application Logic (ES6 Vanilla JavaScript)
// Structured for clarity, modularity, and easy explanation in viva/presentations.
// ==========================================================================

import {
  COMPATIBILITY_DATA,
  MYTHS_DATA,
  QUIZ_QUESTIONS,
  INITIAL_DONORS
} from './data.js';

// Run all module initializers once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCompatibilityExplorer();
  initEligibilityChecklist();
  initMythsSection();
  initQuiz();
  initDonorRegistry();
});

// --------------------------------------------------------------------------
// 1. Navigation & Header Scrolling
// --------------------------------------------------------------------------
function initNavigation() {
  const header = document.getElementById('header');
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle elevation shadow on page scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu hamburger toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// --------------------------------------------------------------------------
// 2. ABO/Rh Blood Compatibility Explorer
// --------------------------------------------------------------------------
function initCompatibilityExplorer() {
  const buttons = document.querySelectorAll('.type-btn');
  const titleEl = document.getElementById('compatTitle');
  const noteEl = document.getElementById('compatNote');
  const badgeEl = document.getElementById('compatBadge');
  const giveContainer = document.getElementById('giveTags');
  const receiveContainer = document.getElementById('receiveTags');

  // Function to update the card content for a selected blood group
  function selectBloodGroup(groupKey) {
    const data = COMPATIBILITY_DATA[groupKey];
    if (!data) return;

    // Update active state on buttons
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === groupKey);
    });

    // Update textual details
    titleEl.textContent = `${data.name} (${groupKey})`;
    noteEl.textContent = data.note;
    badgeEl.textContent = data.badge;

    // Render "Can Donate To" tag chips
    giveContainer.innerHTML = data.give
      .map(type => `<span class="type-tag">${type}</span>`)
      .join('');

    // Render "Can Receive From" tag chips
    receiveContainer.innerHTML = data.receive
      .map(type => `<span class="type-tag">${type}</span>`)
      .join('');
  }

  // Attach click listener to each blood type button
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectBloodGroup(btn.dataset.type);
    });
  });

  // Display O Negative by default on initial page load
  selectBloodGroup('O-');
}

// --------------------------------------------------------------------------
// 3. Quick Self-Eligibility Checklist
// --------------------------------------------------------------------------
function initEligibilityChecklist() {
  const checkboxes = document.querySelectorAll('.eligibility-check');
  const verdictEl = document.getElementById('checklistVerdict');
  if (!checkboxes.length || !verdictEl) return;

  function updateChecklist() {
    const total = checkboxes.length;
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

    if (checkedCount === total) {
      verdictEl.textContent = `All ${total} criteria met! You are fully eligible to donate blood today.`;
      verdictEl.style.backgroundColor = '#ecfdf5';
      verdictEl.style.borderColor = '#10b981';
      verdictEl.style.color = '#065f46';
    } else {
      verdictEl.textContent = `${checkedCount} of ${total} confirmed. Please satisfy all criteria before visiting a donation center.`;
      verdictEl.style.backgroundColor = 'var(--primary-light)';
      verdictEl.style.borderColor = 'var(--primary-soft)';
      verdictEl.style.color = 'var(--primary)';
    }
  }

  checkboxes.forEach(cb => cb.addEventListener('change', updateChecklist));
  updateChecklist();
}

// --------------------------------------------------------------------------
// 4. Myths vs. Facts Section
// --------------------------------------------------------------------------
function initMythsSection() {
  const mythsContainer = document.getElementById('mythsGrid');
  if (!mythsContainer) return;

  // Generate myth cards dynamically from data array
  mythsContainer.innerHTML = MYTHS_DATA.map((item, index) => `
    <article class="myth-card-item">
      <span class="myth-badge">Myth #${index + 1}</span>
      <h3 class="myth-heading">${item.myth}</h3>
      <p class="fact-text"><strong>Medical Fact:</strong> ${item.fact}</p>
    </article>
  `).join('');
}

// --------------------------------------------------------------------------
// 5. Interactive Knowledge Quiz
// --------------------------------------------------------------------------
function initQuiz() {
  const activeCard = document.getElementById('quizActiveCard');
  const resultCard = document.getElementById('quizResultCard');
  const questionText = document.getElementById('quizQuestionText');
  const optionsList = document.getElementById('quizOptionsList');
  const counterEl = document.getElementById('quizCounter');
  const scoreLiveEl = document.getElementById('quizLiveScore');
  const progressFill = document.getElementById('quizProgressFill');
  const feedbackBox = document.getElementById('quizFeedbackBox');
  const feedbackText = document.getElementById('quizFeedbackText');
  const nextBtn = document.getElementById('quizNextBtn');
  const restartBtn = document.getElementById('quizRestartBtn');
  const resultScoreText = document.getElementById('resultScoreText');
  const resultMessageText = document.getElementById('resultMessageText');

  let currentIdx = 0;
  let score = 0;
  let hasAnswered = false;

  function loadQuestion() {
    hasAnswered = false;
    feedbackBox.style.display = 'none';

    const q = QUIZ_QUESTIONS[currentIdx];
    const total = QUIZ_QUESTIONS.length;

    // Update progress and header stats
    counterEl.textContent = `Question ${currentIdx + 1} of ${total}`;
    scoreLiveEl.textContent = `Score: ${score}`;
    progressFill.style.width = `${((currentIdx + 1) / total) * 100}%`;

    // Set question text
    questionText.textContent = q.question;

    // Render option buttons
    optionsList.innerHTML = q.options.map((opt, i) => `
      <button class="quiz-option-btn" data-index="${i}">${opt}</button>
    `).join('');

    // Attach click listeners to new option buttons
    optionsList.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleOptionClick(parseInt(btn.dataset.index, 10)));
    });
  }

  function handleOptionClick(selectedIndex) {
    if (hasAnswered) return;
    hasAnswered = true;

    const q = QUIZ_QUESTIONS[currentIdx];
    const buttons = optionsList.querySelectorAll('.quiz-option-btn');

    // Disable all options once chosen
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correctIndex) {
        btn.classList.add('correct');
      } else if (i === selectedIndex) {
        btn.classList.add('wrong');
      }
    });

    // Check correctness and update score
    if (selectedIndex === q.correctIndex) {
      score++;
      scoreLiveEl.textContent = `Score: ${score}`;
      feedbackText.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
    } else {
      feedbackText.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
    }

    feedbackBox.style.display = 'flex';
  }

  nextBtn.addEventListener('click', () => {
    currentIdx++;
    if (currentIdx < QUIZ_QUESTIONS.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    activeCard.style.display = 'none';
    resultCard.style.display = 'block';

    const total = QUIZ_QUESTIONS.length;
    const percentage = Math.round((score / total) * 100);
    resultScoreText.textContent = `You scored ${score} out of ${total} (${percentage}%)`;

    if (percentage === 100) {
      resultMessageText.textContent = 'Outstanding! You have a perfect understanding of blood donation science.';
    } else if (percentage >= 75) {
      resultMessageText.textContent = 'Great job! You know the critical facts of voluntary donation.';
    } else {
      resultMessageText.textContent = 'Good effort! Review the sections above and retake the quiz to boost your score.';
    }
  }

  restartBtn.addEventListener('click', () => {
    currentIdx = 0;
    score = 0;
    resultCard.style.display = 'none';
    activeCard.style.display = 'block';
    loadQuestion();
  });

  // Start with first question
  loadQuestion();
}

// --------------------------------------------------------------------------
// 6. Voluntary Donor Registry (Validation, LocalStorage & Live Search)
// --------------------------------------------------------------------------
function initDonorRegistry() {
  const form = document.getElementById('donorForm');
  const nameInput = document.getElementById('donorName');
  const bloodSelect = document.getElementById('donorBlood');
  const cityInput = document.getElementById('donorCity');
  const phoneInput = document.getElementById('donorPhone');
  const searchInput = document.getElementById('donorSearchInput');
  const tbody = document.getElementById('donorTableBody');
  const donorCountEl = document.getElementById('donorCount');
  const feedbackEl = document.getElementById('formFeedback');
  const resetBtn = document.getElementById('resetDonorsBtn');

  const STORAGE_KEY = 'blood_hub_donors_v2';
  let donors = [];

  // Load donors from localStorage or seed with INITIAL_DONORS
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    donors = cached ? JSON.parse(cached) : [...INITIAL_DONORS];
  } catch (err) {
    donors = [...INITIAL_DONORS];
  }

  // Render donor table with optional search query filter
  function renderDonors(filterText = '') {
    const query = filterText.toLowerCase().trim();
    const filtered = donors.filter(d => 
      d.name.toLowerCase().includes(query) ||
      d.bloodGroup.toLowerCase().includes(query) ||
      d.city.toLowerCase().includes(query)
    );

    donorCountEl.textContent = `${filtered.length} Donor${filtered.length === 1 ? '' : 's'}`;

    if (!filtered.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" style="text-align:center; padding: 2rem; color: #94a3b8;">
            No donors found matching "${escapeHtml(filterText)}".
          </td>
        </tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(d => `
      <tr>
        <td>${escapeHtml(d.name)}</td>
        <td><span class="blood-badge">${escapeHtml(d.bloodGroup)}</span></td>
        <td>${escapeHtml(d.city)}</td>
        <td>${escapeHtml(d.phone)}</td>
      </tr>
    `).join('');
  }

  function saveDonors() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(donors));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  // Form Validation & Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset error fields
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    feedbackEl.textContent = '';
    feedbackEl.className = 'form-feedback';

    let isValid = true;
    const nameVal = nameInput.value.trim();
    const bloodVal = bloodSelect.value;
    const cityVal = cityInput.value.trim();
    const phoneVal = phoneInput.value.trim();

    if (nameVal.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter a valid full name (min 2 characters).';
      isValid = false;
    }
    if (!bloodVal) {
      document.getElementById('bloodError').textContent = 'Please select a blood group.';
      isValid = false;
    }
    if (cityVal.length < 2) {
      document.getElementById('cityError').textContent = 'Please specify your city or campus location.';
      isValid = false;
    }
    const cleanDigits = phoneVal.replace(/\D/g, '');
    if (cleanDigits.length < 10) {
      document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    }

    if (!isValid) return;

    // Mask phone for donor privacy (e.g., •••-•••-4321)
    const lastFour = cleanDigits.slice(-4);
    const maskedPhone = `•••-•••-${lastFour}`;

    // Add new donor at the beginning of list
    donors.unshift({
      name: nameVal,
      bloodGroup: bloodVal,
      city: cityVal,
      phone: maskedPhone
    });

    saveDonors();
    renderDonors(searchInput.value);
    form.reset();

    feedbackEl.textContent = 'Thank you! You have been registered in the donor directory.';
    feedbackEl.classList.add('success');
    setTimeout(() => { feedbackEl.textContent = ''; }, 4500);
  });

  // Real-time search filter
  searchInput.addEventListener('input', (e) => {
    renderDonors(e.target.value);
  });

  // Reset to initial demo data
  resetBtn.addEventListener('click', () => {
    if (confirm('Reset directory back to initial demo donor records?')) {
      donors = [...INITIAL_DONORS];
      saveDonors();
      searchInput.value = '';
      renderDonors();
    }
  });

  // Initial table render
  renderDonors();
}

// Utility: Prevent XSS attacks when injecting user-submitted text into HTML
function escapeHtml(str) {
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
}
