document.querySelector('.hamburger input').addEventListener('change', function() {
    const sidebar = document.querySelector('.sidebar');
    if (this.checked) {
        sidebar.classList.add('active');
    } else {
        sidebar.classList.remove('active');
    }
});
