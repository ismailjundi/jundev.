document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('#hamburger-menu');
    const navbarNav = document.querySelector('.navbar-items');

    hamburger.addEventListener('click', function () {
        navbarNav.classList.toggle('active')
    })
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzhGvyZxcbuzVeeqFZU83hyYXnRSEw2HgDpfqbVW3zIKVyY0nAqS3FftxWITUduPDQF/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})