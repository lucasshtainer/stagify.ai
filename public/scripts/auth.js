// Auth Modal Functionality
(function() {
  const authModal = document.getElementById('auth-modal');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const authModalClose = document.getElementById('auth-modal-backdrop');
  const authModalCloseBtn = document.getElementById('auth-modal-close');
  const loginTab = document.getElementById('login-tab');
  const signupTab = document.getElementById('signup-tab');
  const authForm = document.getElementById('auth-form');
  const authTitle = document.getElementById('auth-title');
  const authSubtitle = document.getElementById('auth-subtitle');
  const authSubmitBtn = document.getElementById('auth-submit-btn');
  const authFooter = document.getElementById('auth-footer');
  const authSwitchLink = document.getElementById('auth-switch-link');
  const forgotPasswordLink = document.getElementById('forgot-password-link');
  
  let currentMode = 'login';

  function openAuthModal(mode = 'login') {
    if (!authModal) return;
    currentMode = mode;
    authModal.classList.remove('hidden');
    updateAuthMode(mode);
  }

  function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.add('hidden');
  }

  function updateAuthMode(mode) {
    currentMode = mode;
    
    if (mode === 'login') {
      loginTab?.classList.add('active');
      signupTab?.classList.remove('active');
      if (authTitle) authTitle.textContent = 'Log in to your account';
      if (authSubtitle) authSubtitle.textContent = 'Welcome back! Please log in to continue.';
      if (authSubmitBtn) authSubmitBtn.textContent = 'Continue';
      if (authFooter) authFooter.innerHTML = 'Don\'t have an account? <a href="#" id="auth-switch-link">Sign up</a>';
      if (forgotPasswordLink) forgotPasswordLink.style.display = 'block';
    } else {
      signupTab?.classList.add('active');
      loginTab?.classList.remove('active');
      if (authTitle) authTitle.textContent = 'Create your account';
      if (authSubtitle) authSubtitle.textContent = 'Sign up to get started with Stagify.ai';
      if (authSubmitBtn) authSubmitBtn.textContent = 'Sign up';
      if (authFooter) authFooter.innerHTML = 'Already have an account? <a href="#" id="auth-switch-link">Log in</a>';
      if (forgotPasswordLink) forgotPasswordLink.style.display = 'none';
    }
    
    // Re-attach event listener to the switch link
    const newSwitchLink = document.getElementById('auth-switch-link');
    if (newSwitchLink) {
      newSwitchLink.addEventListener('click', (e) => {
        e.preventDefault();
        updateAuthMode(mode === 'login' ? 'signup' : 'login');
      });
    }
  }

  // Event Listeners
  if (loginBtn) {
    loginBtn.addEventListener('click', () => openAuthModal('login'));
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => openAuthModal('signup'));
  }

  if (authModalClose) {
    authModalClose.addEventListener('click', closeAuthModal);
  }

  if (authModalCloseBtn) {
    authModalCloseBtn.addEventListener('click', closeAuthModal);
  }

  if (loginTab) {
    loginTab.addEventListener('click', () => updateAuthMode('login'));
  }

  if (signupTab) {
    signupTab.addEventListener('click', () => updateAuthMode('signup'));
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-email')?.value;
      const password = document.getElementById('auth-password')?.value;
      
      if (currentMode === 'login') {
        console.log('Login attempt:', { email });
        // TODO: Implement actual login logic
        alert('Login functionality will be implemented soon!');
      } else {
        console.log('Signup attempt:', { email });
        // TODO: Implement actual signup logic
        alert('Signup functionality will be implemented soon!');
      }
    });
  }

  if (authSwitchLink) {
    authSwitchLink.addEventListener('click', (e) => {
      e.preventDefault();
      updateAuthMode(currentMode === 'login' ? 'signup' : 'login');
    });
  }

  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Password reset functionality will be implemented soon!');
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal && !authModal.classList.contains('hidden')) {
      closeAuthModal();
    }
  });
})();

