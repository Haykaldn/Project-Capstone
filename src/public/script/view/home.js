function toggleNavbarBackground() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Menambahkan kelas scrolled ketika halaman di-scroll
    } else {
        navbar.classList.remove('scrolled'); // Menghapus kelas scrolled saat berada di atas
    }
}

// Memastikan navbar punya background saat halaman pertama kali dimuat
window.addEventListener('scroll', toggleNavbarBackground);