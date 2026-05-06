// ==================== SHARED FUNCTIONS ====================

// Highlight active nav link
function setActiveNav(pageName) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`[data-page="${pageName}"]`);
  if (activeLink) activeLink.classList.add('active');
}

// Connect Solana wallet (mock for demo)
function connectSolana() {
  const btn = document.getElementById('solana-btn');
  
  if (window.connectedWallet) {
    window.connectedWallet = null;
    btn.textContent = 'Connect ◎';
    btn.classList.remove('connected');
  } else {
    window.connectedWallet = { address: '11111111111111111111111111111112' };
    btn.textContent = '✓ Connected';
    btn.classList.add('connected');
    alert('✓ Mock Solana Wallet Connected\n\nNetwork: Devnet\n\nIn production, this connects to Phantom or Solflare.');
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ MedChain App Initialized');
  
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageName = currentPage.replace('.html', '');
  setActiveNav(pageName);
});
