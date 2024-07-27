document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let menuBtn = document.querySelector('#menu-btn');
    let searchBtn = document.querySelector('#search-btn');
    let closeBtn = document.querySelector('#close-btn');

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active'); // Ensure the search form is closed when the menu is opened
        closeBtn.style.display = navbar.classList.contains('active') ? 'inline-block' : 'none';
    });

    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active'); // Ensure the menu is closed when the search form is opened
        closeBtn.style.display = searchForm.classList.contains('active') ? 'inline-block' : 'none';
    });

    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        closeBtn.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            navbar.classList.remove('active');
            searchForm.classList.remove('active');
            closeBtn.style.display = 'none';
        }
    });
});
