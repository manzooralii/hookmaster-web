
//   <!-- ==================== JAVASCRIPT FOR TOGGLE FUNCTIONALITY ==================== -->
const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });