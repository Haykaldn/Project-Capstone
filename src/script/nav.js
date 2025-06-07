// Menambahkan event listener untuk scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  
  if (window.scrollY > 0) {
    header.classList.add('scrolled'); // Menambahkan background saat di-scroll
  } else {
    header.classList.remove('scrolled'); // Menghapus background saat di atas
  }
});

