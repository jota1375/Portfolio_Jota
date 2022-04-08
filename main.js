const btnToggle = document.querySelector('.toggle_btn');

btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});